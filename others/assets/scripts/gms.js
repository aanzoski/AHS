// ===== GAMES, APPS, AND WEBSITES DATA =====
// File: others/assets/scripts/gms.js
// This file contains all game, app, and website definitions for GalaxyVerse

// ===== GAME DATA =====
const games = [
  { name: "Feedback", image: "https://iili.io/3OM27wv.th.jpg", url: "https://forms.gle/GhMEg7s8H9aRSy4d9" },
  // Numerals
  { name: "1v1 Old", image: "others/assets/games/images/1v1lol.jpeg", url: "others/assets/games/1v1lol/index.html" },
  { name: "1v1 Oldest", image: "others/assets/games/images/1v1lololdest.jpeg", url: "others/assets/games/1v1.lol_oldest.html" },
  { name: "2048", image: "others/assets/games/images/2048.jpg", url: "others/assets/games/2048.html" },
  { name: "60 Second Burger Run", image: "others/assets/games/images/60-seconds-burger-run.png", url: "others/assets/games/60burger run.html" },
  { name: "8 Ball Pool", image: "others/assets/games/images/8-ball-pool-2021-08-05.webp", url: "others/assets/games/8 Ball Pool.html" },
  { name: "99 Nights In The Forest", image: "others/assets/games/images/99nights.webp", url: "others/assets/games/99nightsitf.html" },
  // A
  { name: "A Small World Cup", image: "others/assets/games/images/asmallworldcup.png", url: "others/assets/games/A Small World Cup.html" },
  { name: "Amazing Strange Police", image: "others/assets/games/images/amazing strange police.jpg", url: "others/assets/games/amazing strange police.html" },
  { name: "Among Us", image: "others/assets/games/images/amongus.jpg", url: "others/assets/games/Among Us.html" },
  { name: "Angry Birds", image: "others/assets/games/images/angrybirds.jpeg", url: "others/assets/games/Angry Birds.html" },
  // B
  { name: "Bacon May Die", image: "others/assets/games/images/bacon-may-die.png", url: "others/assets/games/Bacon May Die.html" },
  { name: "Bad Ice Cream", image: "others/assets/games/images/badicecream.png", url: "others/assets/games/clbadicecream.html" },
  { name: "Bad Parenting 1", image: "others/assets/games/images/badparent.jpeg", url: "others/assets/games/Bad Parenting 1.html" },
  { name: "Bad Time Simulator", image: "others/assets/games/images/badtimesim.png", url: "others/assets/games/Bad Time Simulator.html" },
  { name: "Baldi's Basics Plus", image: "others/assets/games/images/baldis.png", url: "others/assets/games/Baldi's Basics Plus.html" },
  { name: "Baseball Bros", image: "others/assets/games/images/baseballbros.jpeg", url: "others/assets/games/Baseball Bros.html" },
  { name: "Basketbros.IO", image: "others/assets/games/images/basketbros-io.jpg", url: "others/assets/games/Basket Bros.html" },
  { name: "Basket Random", image: "others/assets/games/images/basketrandom.png", url: "others/assets/games/Basket Random.html" },
  { name: "BitLife", image: "others/assets/games/images/bitlife.jpeg", url: "others/assets/games/BitLife.html" },
  { name: "Blackjack", image: "others/assets/games/images/blackjack.png", url: "others/assets/games/BlackJack.html" },
  { name: "Blade Ball", image: "others/assets/games/images/bladeball.png", url: "others/assets/games/Blade Ball.html" },
  { name: "Block Blast", image: "others/assets/games/images/blockblast.jpeg", url: "others/assets/games/Block Blast.html" },
  { name: "Bloxorz", image: "others/assets/games/images/blockorz.jpeg", url: "others/assets/games/Bloxorz.html" },
  { name: "Buildnow.gg", image: "others/assets/games/images/buildnowgg.png", url: "others/assets/games/buildnowgg.html" },
  { name: "Bulletforce", image: "others/assets/games/images/bulletforce.png", url: "others/assets/games/bulletforce.html" },
  // D
  { name: "Drive Mad", image: "others/assets/games/images/drivemad.png", url: "others/assets/games/drive mady.html" },
  // C
  { name: "Candy Crush", image: "others/assets/games/images/candycrush.png", url: "others/assets/games/Candy Crush.html" },
  { name: "Cluster Rush", image: "others/assets/games/images/clusterrush.jpeg", url: "others/assets/games/Cluster Rush.html" },
  { name: "Cookie Clicker", image: "others/assets/games/images/cookie-clicker.png", url: "others/assets/games/Cookie Clicker.html" },
  { name: "Crazy Cars", image: "others/assets/games/images/crazycars.jpg", url: "others/assets/games/Crazy Cars.html" },
  { name: "Crazy Cattle 3D", image: "others/assets/games/images/crazy-cattle-3d-icon.jpg", url: "others/assets/games/Crazy Cattle 3D.html" },
  { name: "Crossy Road", image: "others/assets/games/images/crossyroad.png", url: "others/assets/games/Crossy Road.html" },
  { name: "Cuphead", image: "others/assets/games/images/cuphead.webp", url: "others/assets/games/Cuphead.html" },
  // D
  { name: "Drift Boss", image: "others/assets/games/images/driftboss.png", url: "others/assets/games/Drift Boss.html" },
  { name: "Drift Hunters ", image: "others/assets/games/images/drift-hunters.png", url: "others/assets/games/Drift Huntersfix.html" },
  // E
  { name: "Escape Road", image: "others/assets/games/images/escaperoad.png", url: "others/assets/games/Escape Road.html" },
  { name: "Escape Road 2", image: "others/assets/games/images/escaperoad2.jpeg", url: "others/assets/games/clescaperoad-2.html" },
  // F
  { name: "FNAF", image: "others/assets/games/images/fnaf.webp", url: "others/assets/games/FNAF.html" },
  { name: "Flappy Bird", image: "others/assets/games/images/flappybird.png", url: "others/assets/games/Flappy Bird.html" },
  { name: "Football Bros", image: "others/assets/games/images/football-bros.webp", url: "others/assets/games/Football Bros.html" },
  { name: "Friday Night Funkin': Darkness Takeover", image: "others/assets/games/images/takeover.jpg", url: "others/assets/games/Friday Night Funkin'_ Darkness Takeover.html" },
  { name: "Fruit Ninja", image: "others/assets/games/images/fruitninja.jpeg", url: "others/assets/games/Fruit Ninja.html" },
  // G
  { name: "Geometry Dash Lite", image: "others/assets/games/images/dashlite.png", url: "others/assets/games/geometrydash.html" },
  { name: "Google Baseball", image: "others/assets/games/images/baseball.png", url: "others/assets/games/Google Baseball.html" },
  { name: "Google Feud", image: "others/assets/games/images/googlefeud.jpg", url: "others/assets/games/Google Feud.html" },
  { name: "Granny", image: "others/assets/games/images/granny.png", url: "others/assets/games/Granny.html" },
  // H
  { name: "Highway Racer 2", image: "others/assets/games/images/highwayracer.jpg", url: "others/assets/games/Highway Racer 2.html" },
  { name: "Hotline Miami", image: "others/assets/games/images/hotline Miami.png", url: "others/assets/games/Hotline Miami.html" },
  
  { name: "Infinite Craft", image: "others/assets/games/images/infcraft.jpg", url: "others/assets/games/Infinite Craft" },
  // J
  { name: "Jetpack Joyride", image: "others/assets/games/images/jetpack.png", url: "others/assets/games/Jetpack Joyride.html" },
  // L
  { name: "Levil Devil", image: "others/assets/games/images/levildevil.png", url: "others/assets/games/leveldevil.html" },
  // M
  { name: "Madalin Stunt Cars 2", image: "others/assets/games/images/Madalin Stung Cars 2.png", url: "others/assets/games/Madalin Stunt Cars 2.html" },
  { name: "Madalin Stunt Cars 3", image: "others/assets/games/images/Madalin-Stunt-Cars-3.webp", url: "others/assets/games/Madalin Stunt Cars 3.html" },
  { name: "Melon Playground", image: "others/assets/games/images/melon-playground.jpg", url: "others/assets/games/Melon Playground.html" },
  { name: "Minecraft 1.12.2", image: "others/assets/games/images/minecraft.png", url: "others/assets/games/Minecraft 1.12.2.html" },
  { name: "Minecraft 1.5.2", image: "others/assets/games/images/minecraft.png", url: "others/assets/games/Minecraft 1.5.2.html" },
  { name: "Minecraft 1.8.8", image: "others/assets/games/images/minecraft.png", url: "others/assets/games/Minecraft 1.8.8.html" },
  { name: "Minesweeper Mania", image: "others/assets/games/images/minesweeper mania.png", url: "others/assets/games/Minesweeper Mania.html" },
  { name: "Monkey Mart", image: "others/assets/games/images/monkey-mart.png", url: "others/assets/games/Monkey Mart.html" },
  // N
  { name: "n-gon", image: "others/assets/games/images/ngone.png", url: "others/assets/games/n-gon.html" },
  // P
  { name: "Paper.IO", image: "others/assets/games/images/paperio2.png", url: "others/assets/games/Paper.io 2.html" },
  { name: "Pixel Gun Survival", image: "others/assets/games/images/pixelgunshoot.jpg", url: "others/assets/games/Pixel Gun Survival.html" },
  { name: "Polytrack", image: "others/assets/games/images/polytrack.jpg", url: "others/assets/games/polytrack.html" },
  { name: "Pokemon Emerald", image: "others/assets/games/images/pokemon emerald.jpg", url: "others/assets/games/Pokemon Emerald.html" },
  { name: "Pokemon Red", image: "others/assets/games/images/pokemonred.jpeg", url: "others/assets/games/Pokemon Red.html" },
  { name: "Pou", image: "others/assets/games/images/pou.png", url: "others/assets/games/pou.html" },
  // R
  { name: "Ragdoll Archers", image: "others/assets/games/images/RagdollArchers.jpg", url: "others/assets/games/ragdollarchers.html" },
  { name: "Rainbow Obby", image: "others/assets/games/images/rainbowobby.png", url: "others/assets/games/Rainbow Obby.html" },
  { name: "Retro Highway", image: "others/assets/games/images/retrohighway.jpg", url: "others/assets/games/retrohighway.html" },
  { name: "Retro Bowl", image: "others/assets/games/images/retro-bowl.jpeg", url: "others/assets/games/Retro Bowl.html" },
  { name: "Retro Bowl College", image: "others/assets/games/images/retrobrowlcollege.jpg", url: "others/assets/games/Retro Bowl College.html" },
  { name: "Rooftop Snipers", image: "others/assets/games/images/rooftopsnipers.jpg", url: "others/assets/games/Rooftop Snipers.html" },
  { name: "Rooftop Snipers 2", image: "others/assets/games/images/rooftop-snipers-2.avif", url: "others/assets/games/Rooftop Snipers 2.html" },
  // S
  { name: "Sandtris", image: "others/assets/games/images/sandtris.png", url: "others/assets/games/Sandtris.html" },
  { name: "SAS: Zombie Assault 2", image: "others/assets/games/images/sas2.jpeg", url: "others/assets/games/clsaszombieassault2.html" },
  { name: "Skibidi Shooter", image: "others/assets/games/images/skibidishooter.jpg", url: "others/assets/games/skibidishooter.html" },
  { name: "Slither.io", image: "others/assets/games/images/slitherio.png", url: "others/assets/games/Slither.io.html" },
  { name: "Slope", image: "others/assets/games/images/slope.png", url: "others/assets/games/Slope.html" },
  { name: "Slope 2", image: "others/assets/games/images/slope2.png", url: "others/assets/games/slope2player.html" },
  { name: "Slow Roads", image: "others/assets/games/images/Slow-Roads.webp", url: "others/assets/games/Slowroads.html" },
  { name: "Smash Karts", image: "others/assets/games/images/smash karts.webp", url: "others/assets/games/smashkartsworking.html" },
  { name: "Sniper Shot", image: "others/assets/games/images/snipershot.png", url: "others/assets/games/snipershot.html" },
  { name: "Solar Smash", image: "others/assets/games/images/Solar_smash.webp", url: "others/assets/games/Solar Smash.html" },
  { name: "Soccer Bros", image: "others/assets/games/images/Soccer-Bros-Unblocked.webp", url: "others/assets/games/soccerbros.html" },
  { name: "Sonic.exe OG", image: "others/assets/games/images/sonicexe.png", url: "others/assets/games/soniceexeog.html" },
  { name: "Space Waves", image: "others/assets/games/images/spacewaves.png", url: "others/assets/games/Space Waves.html" },
  { name: "Steal a Brainrot 1", image: "others/assets/games/images/stealabrain.webp", url: "others/assets/games/Steal Brainrot Online UPD1.html" },
  { name: "Steal a Brainrot 2", image: "others/assets/games/images/steal a brainrot.png", url: "others/assets/games/brainrot.html" },
  { name: "Steal a Brainrot 3", image: "others/assets/games/images/stealabrainrot.webp", url: "others/assets/games/brainrotIthink.html" },
  { name: "Steal a Brainrot 4", image: "others/assets/games/images/stealabraonrot.webp", url: "others/assets/games/stealbrainrot.html" },
  { name: "Stickman Fighter", image: "others/assets/games/images/stickfighter.png", url: "others/assets/games/stick fighter.html" },
  { name: "Stickman Hook", image: "others/assets/games/images/stickman Hook.jpg", url: "others/assets/games/Stickman Hook.html" },
  { name: "Subway Surfers", image: "others/assets/games/images/subwaysurfers.png", url: "others/assets/games/Subway Surfers.html" },
  { name: "Subway Surfers San Francisco", image: "others/assets/games/images/subwaysanfran.jpeg", url: "others/assets/games/Subway Surfers_ San Francisco.html" },
  { name: "Subway Surfers Winter Holiday", image: "others/assets/games/images/subway-surfers.jpg", url: "others/assets/games/Subway Surfers_ Winter Holiday.html" },
  // T
  { name: "The Visitor", image: "others/assets/games/images/thevisitor.jpg", url: "others/assets/games/the visitor.html" },
  { name: "Temple Run 2", image: "others/assets/games/images/temple run 2.png", url: "others/assets/games/Temple Run 2.html" },
  { name: "Territorial.io", image: "others/assets/games/images/territorial.io.png", url: "others/assets/games/territorial.io.html" },
  { name: "Tomb Of The Mask", image: "others/assets/games/images/tomb of the mask.png", url: "others/assets/games/Tomb Of The Mask.html" },
  { name: "Traffic Jam 3d", image: "others/assets/games/images/traffic-jam-3d.jpeg", url: "others/assets/games/trafficjam3d.html" },
  { name: "Tube Jumpers", image: "others/assets/games/images/tubejumpers.jpg", url: "others/assets/games/Tube Jumpers.html" },
  // U
  { name: "Ultimate car driving simulator", image: "others/assets/games/images/Ultimate car driving simulator.png", url: "others/assets/games/Ultimate car driving simulator.html" },
  { name: "Uno", image: "others/assets/games/images/uno.png", url: "others/assets/games/uno.html" },
  // V
  { name: "Volley Random", image: "others/assets/games/images/volleyrandom.png", url: "others/assets/games/volleyrandom.html" },
  // W
  { name: "We Become What We Behold", image: "others/assets/games/images/webecomewhatwebehold.png", url: "others/assets/games/webecomewhatwebehold.html" },
  { name: "Wordle", image: "others/assets/games/images/wordle.webp", url: "others/assets/games/wordle.html" },
  { name: "Wrestle Bros", image: "others/assets/games/images/wrestlebros.png", url: "others/assets/games/wrestlebros.html" },
  // X
//{ name: "You vs 100 Skibidi", image: "others/assets/games/images/you-vs-100-skibidi-toilets-cover.avif", url: "others/assets/games/youvs100skibidi.html" },
  // Y
  { name: "You vs 100 Skibidi", image: "others/assets/games/images/you-vs-100-skibidi-toilets-cover.avif", url: "others/assets/games/youvs100skibidi.html" },
  // Z
  { name: "Zombie Road", image: "others/assets/games/images/you-vs-100-skibidi-toilets-cover.avif", url: "others/assets/games/zombieroad.html" },
  { name: "Zombie Rush", image: "others/assets/games/images/you-vs-100-skibidi-toilets-cover.avif", url: "others/assets/games/zombierush.html" }
];

// ===== APP DATA =====
const apps = [
  { name: "AI", image: "others/assets/apps/images/chippytea.png", url: "others/assets/apps/ai.html" },
  { name: "EmulatorJS", image: "others/assets/apps/images/emulatorjs.png", url: "others/assets/apps/clemujs (1).html" },
  { name: "Ruffle", image: "others/assets/apps/images/ruffle.png", url: "others/assets/apps/clruffle (1).html" },
  { name: "Sandstone", image: "others/assets/apps/images/sandstone.jpg", url: "others/assets/apps/sandstone (1).html" },
  { name: "Silk", image: "others/assets/apps/images/silk.jpg", url: "others/assets/apps/clsilk (1).html" },
  { name: "Soundboard", image: "others/assets/apps/images/soundboard.png", url: "others/assets/apps/soundboard.html" },
  { name: "Soundcloud", image: "others/assets/apps/images/soundcloud.png", url: "others/assets/apps/soundcloud (1).html" },
  { name: "Spotify (SOON)", image: "others/assets/apps/images/spotify.png", url: "about:blank"}, 
  { name: "Vscode", image: "others/assets/apps/images/vscode.jpeg", url: "others/assets/apps/vscode.html" },
  { name: "YouTube", image: "others/assets/apps/images/youtube.png", url: "/others/assets/apps/yt.html"},
];

// ===== WEBSITES DATA - GALAXYVERSE NETWORK =====
const websites = [
  {
    name: "GalaxyVerse Main",
    url: "https://schoologydashboard.org/"
  },
  {
    name: "GalaxyVerse - GVerse",
    url: "https://gverse.schoologydashboard.org.cdn.cloudflare.net/"
  },
  {
    name: "GalaxyVerse - AHS",
    url: "http://ahs.schoologydashboard.org.cdn.cloudflare.net/"
  },
  {
    name: "GalaxyVerse - Learn",
    url: "http://learn.schoologydashboard.org.cdn.cloudflare.net/"
  },
  {
    name: "GalaxyVerse - Original",
    url: "https://galaxyverse-c1v.pages.dev/"
  },
  {
    name: "GalaxyVerse - Org",
    url: "https://galaxyverse.org/"
  }
];

// ===== HELPER FUNCTIONS =====

/**
 * Get the Game of the Day based on current CDT timezone
 * @returns {Object} The selected game object
 */
function getGameOfTheDay() {
  const now = new Date();
  const cdtOffset = -5; // CDT is UTC-5
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const cdtTime = new Date(utc + (3600000 * cdtOffset));
  const startOfYear = new Date(cdtTime.getFullYear(), 0, 0);
  startOfYear.setHours(0, 0, 0, 0);
  const diff = cdtTime - startOfYear;
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  
  // Filter out Feedback from playable games
  const playableGames = games.filter(game => game.name !== "Feedback");
  const index = dayOfYear % playableGames.length;
  
  return playableGames[index];
}

/**
 * Search games by query string
 * @param {string} query - Search query
 * @returns {Array} Filtered games array
 */
function searchGamesData(query) {
  if (!query || query.trim() === '') {
    return games;
  }
  const searchTerm = query.toLowerCase().trim();
  return games.filter(game => game.name.toLowerCase().includes(searchTerm));
}

/**
 * Search apps by query string
 * @param {string} query - Search query
 * @returns {Array} Filtered apps array
 */
function searchAppsData(query) {
  if (!query || query.trim() === '') {
    return apps;
  }
  const searchTerm = query.toLowerCase().trim();
  return apps.filter(app => app.name.toLowerCase().includes(searchTerm));
}

/**
 * Search websites by query string
 * @param {string} query - Search query
 * @returns {Array} Filtered websites array
 */
function searchWebsitesData(query) {
  if (!query || query.trim() === '') {
    return websites;
  }
  const searchTerm = query.toLowerCase().trim();
  return websites.filter(site => site.name.toLowerCase().includes(searchTerm));
}

/**
 * Get a random game
 * @returns {Object} Random game object
 */
function getRandomGame() {
  const playableGames = games.filter(game => game.name !== "Feedback");
  return playableGames[Math.floor(Math.random() * playableGames.length)];
}

/**
 * Get total count of games (excluding Feedback)
 * @returns {number} Total playable games
 */
function getTotalGamesCount() {
  return games.filter(game => game.name !== "Feedback").length;
}

/**
 * Get total count of apps
 * @returns {number} Total apps
 */
function getTotalAppsCount() {
  return apps.length;
}

/**
 * Get total count of websites
 * @returns {number} Total websites
 */
function getTotalWebsitesCount() {
  return websites.length;
}

// Export for use in other files (if using modules)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    games,
    apps,
    websites,
    getGameOfTheDay,
    searchGamesData,
    searchAppsData,
    searchWebsitesData,
    getRandomGame,
    getTotalGamesCount,
    getTotalAppsCount,
    getTotalWebsitesCount
  };
}

function openApp(app) {
  if (app.name === "YouTube") {
    window.location.href = app.url; // go straight to URL
  } else {
    // existing iframe loading code here
    document.getElementById("iframe").src = app.url;
  }
}
