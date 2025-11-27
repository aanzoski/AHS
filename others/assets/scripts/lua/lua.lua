--[[

	--------------------------------------------------------------------

	Place this module in workspace and
	Copy and run this command:
	workspace.NameTag.Parent = game.StarterPlayer.StarterPlayerScripts

	--------------------------------------------------------------------
	
	@816
--[[]]

local Players = game:GetService("Players")
local Construct = require("@self/Construct")

local NameTag = {}
NameTag.__index = NameTag

function NameTag.Init(humanoid, parent)
	assert(typeof(humanoid) == "Instance" and humanoid:IsA("Humanoid"), "1st parameter must be a Humanoid. (HumanoidNametagModifier::Init)")

	local self = setmetatable({}, NameTag)
	self.ChangedLock = false
	self.Humanoid = humanoid
	self.StoredName = humanoid.DisplayName

	humanoid:SetAttribute("AsmoTagStored", self.StoredName)

	self.ChangedLock = true
	humanoid.DisplayName = " "
	self.ChangedLock = false

	self.NameChangeConnection = humanoid:GetPropertyChangedSignal("DisplayName"):Connect(function()
		if self.ChangedLock or self.Sleeping then return end

		local newName = humanoid.DisplayName
		if newName == " " then return end

		self.StoredName = newName
		humanoid:SetAttribute("AsmoTagStored", newName)

		self.ChangedLock = true
		humanoid.DisplayName = " "
		self.ChangedLock = false
	end)

	self.Billboard = Construct:ConstructBillboardGUI()
	self.Billboard.Adornee = workspace.Terrain

	self.Label = Construct:ConstructNametagLabel()
	self.Label.Parent = self.Billboard

	self.Billboard.Parent = parent
	self.Sleeping = false

	return self
end

function NameTag:ShouldMarkForGC()
	return not self.Humanoid:IsDescendantOf(game)
end

function NameTag:GetTextSizeFromDistance(distance)
	if distance < 20 then return 23 end
	if distance < 50 then return 18 end
	return 13
end

function NameTag:GetAlphaChannelFromDistance(distance, maxDistance)
	local alpha = {
		Fill = 1,
		Stroke = 0.5,
		Master = 1
	}

	if maxDistance < distance then
		alpha.Master = 0
	elseif distance > 0.9 * maxDistance then
		alpha.Master = math.clamp((maxDistance - distance) / (0.1 * maxDistance), 0, 1)
	end

	return alpha
end

function NameTag:GetHead()
	return self.Humanoid.Parent:FindFirstChild("Head")
end

function NameTag:GetPlayer()
	return Players:GetPlayerFromCharacter(self.Humanoid.Parent)
end

function NameTag:GetActiveCameraCoordinateFrame()
	return workspace.CurrentCamera.CFrame
end

function NameTag:GetDistanceFromCamera()
	local head = self:GetHead()
	if not head then return math.huge end
	return (head.Position - self:GetActiveCameraCoordinateFrame().Position).Magnitude
end

function NameTag:GetHumanoidConfiguration()
	return {
		DisplayDistanceType = self.Humanoid.DisplayDistanceType,
		NameDisplayDistance = self.Humanoid.NameDisplayDistance
	}
end

function NameTag:IsOnScreen(part)
	local _, onScreen = workspace.CurrentCamera:WorldToViewportPoint(part.Position)
	return onScreen
end
function NameTag:Step()
	if self:ShouldMarkForGC() then
		self:Remove()
		return
	end

	local currentName = self.Humanoid:GetAttribute("AsmoName")
	if self.Humanoid:GetAttribute("AsmoTagStored") == currentName then
		self:Sleep()
		return
	end

	self:Resume()
	if self.Sleeping then return end

	local head = self:GetHead()
	if not head then return end

	if not self:IsOnScreen(head) then
		self.Billboard.Enabled = false
		return
	end

	local config = self:GetHumanoidConfiguration()
	local distance = self:GetDistanceFromCamera()
	local alpha = self:GetAlphaChannelFromDistance(distance, config.NameDisplayDistance and 100)

	local isVisible = config.NameDisplayDistance < distance or Construct:CastRayForOcclusion(head)

	self.Billboard.StudsOffsetWorldSpace = head.Position + Vector3.new(0, 1.5, 0)
	self.Label.TextSize = self:GetTextSizeFromDistance(distance)
	self.Billboard.Enabled = isVisible
	self.Label.TextTransparency = 1 - (alpha.Fill * alpha.Master)

	local strokeModifier = (alpha.Master == 1) and 1 or 0.95
	self.Label.TextStrokeTransparency = (1 - alpha.Stroke * alpha.Master) * strokeModifier

	self.Label.Text = currentName or self.StoredName
	self.Billboard.PlayerToHideFrom = self:GetPlayer()
end

function NameTag:Remove()
	self.Humanoid.DisplayName = self.StoredName
	self.Billboard:Destroy()

	for key in pairs(self) do
		self[key] = nil
	end

	setmetatable(self, {})
	self.GC = true
end

function NameTag:Sleep()
	if self.Sleeping then return end

	self.ChangedLock = true
	self.Humanoid.DisplayName = self.Humanoid:GetAttribute("AsmoTagStored")
	self.Billboard.Enabled = false
	self.Sleeping = true
end

function NameTag:Resume()
	if not self.Sleeping then return end

	self.ChangedLock = true
	self.Humanoid.DisplayName = " "
	self.ChangedLock = false
	self.Billboard.Enabled = true
	self.Sleeping = false
end

local v35 = {
	Connections = {}
}
local RunService = game:GetService("RunService")
local LocalPlayer = Players.LocalPlayer
function v35.StartClient(self)
	table.insert(self.Connections, RunService.Heartbeat:Connect(function(...)
		self:onRender(...)
	end))

	self.GUIContainer = Construct:ConstructGUIContainer()
	self.GUIContainer.Parent = LocalPlayer:WaitForChild("PlayerGui", 10)

	self.Modifications = {}
end

function v35.onRender(self, ...)
	for index, mod in pairs(self.Modifications) do
		if mod.GC then
			self.Modifications[index] = nil
		else
			mod:Step(...)
		end
	end
end

function v35.CheckHumanoidAlreadyModified(self, humanoid)
	for _, mod in pairs(self.Modifications) do
		if mod.Humanoid == humanoid then
			return true
		end
	end
	return false
end

function v35.ModifyHumanoid(self, humanoid)
	if self:CheckHumanoidAlreadyModified(humanoid) then
		error("Humanoid already modified. (AsmoBetterNametags::ModifyHumanoid)", 2)
	end

	local modification = NameTag.Init(humanoid, self.GUIContainer)
	table.insert(self.Modifications, modification)

	return modification
end
function v35.StandardPlayerCycle(self)
	for _, player in ipairs(Players:GetPlayers()) do
		if player.Character then
			local humanoid = player.Character:WaitForChild("Humanoid")
			self:ModifyHumanoid(humanoid)
		end

		self.Connections[player] = player.CharacterAdded:Connect(function(character)
			local humanoid = character:WaitForChild("Humanoid")
			self:ModifyHumanoid(humanoid)
		end)
	end

	table.insert(self.Connections, Players.PlayerAdded:Connect(function(player)
		self.Connections[player] = player.CharacterAdded:Connect(function(character)
			local humanoid = character:WaitForChild("Humanoid")
			self:ModifyHumanoid(humanoid)
		end)
	end))

	table.insert(self.Connections, Players.PlayerRemoving:Connect(function(player)
		local connection = self.Connections[player]
		if connection then
			connection:Disconnect()
			self.Connections[player] = nil
		end
	end))
end

return v35;
