// 70/30
// SEASONAL THEME SYSTEM (BUILT-IN)
function getSeasonalTheme() {
  const now = new Date();
  const month = now.getMonth();
  const day = now.getDate();
  
  if ((month === 9 && day >= 20) || (month === 10 && day <= 2)) {
    return 'halloween';
  }
  
  if (month === 11 || (month === 0 && day <= 5)) {
    return 'christmas';
  }
  
  if (month > 1 && month < 5 || (month === 1 && day >= 20) || (month === 5 && day <= 20)) {
    return 'ocean';
  }
  
  if (month > 5 && month < 8 || (month === 5 && day >= 21) || (month === 8 && day <= 22)) {
    return 'light';
  }
  
  return 'modern';
}

function shouldAutoApplySeasonalTheme() {
  const autoApply = localStorage.getItem('autoApplySeasonalThemes');
  return autoApply !== 'false';
}

// ===== ABOUT:BLANK CLOAKING =====
(function() {
  const aboutBlankEnabled = localStorage.getItem('aboutBlank');
  const isInAboutBlank = window.self !== window.top;
  
  if (aboutBlankEnabled === 'enabled' && !isInAboutBlank) {
    const currentURL = window.location.href;
    const win = window.open('about:blank', '_blank');
    
    if (win) {
      win.document.open();
      win.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>New Tab</title>
          <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌐</text></svg>">
        </head>
        <body style="margin:0;padding:0;overflow:hidden;">
          <iframe src="${currentURL}" style="position:fixed;top:0;left:0;width:100%;height:100%;border:none;"></iframe>
        </body>
        </html>
      `);
      win.document.close();
      window.location.replace('about:blank');
      window.close();
    }
  }
})();

// ===== TAB CLOAKING PRESETS =====
const presets = {
  google: { title: "Google", favicon: "https://www.google.com/favicon.ico" },
  classroom: { title: "Home", favicon: "https://ssl.gstatic.com/classroom/favicon.png" },
  bing: { title: "Bing", favicon: "https://bing.com/favicon.ico" },
  nearpod: { title: "Nearpod", favicon: "https://nearpod.com/favicon.ico" },
  powerschool: { title: "PowerSchool Sign In", favicon: "https://powerschool.com/favicon.ico" },
  edge: { title: "New Tab", favicon: "https://www.bing.com/favicon.ico" },
  chrome: { title: "New Tab", favicon: "https://www.google.com/favicon.ico" }
};

// ===== THEME CONFIGURATIONS =====
const themes = {
  modern: { 
    bgColor: '#0f172a', 
    bgSecondary: '#1e293b',
    navColor: '#1e1b4b', 
    accentColor: '#7c3aed',
    accentSecondary: '#a78bfa',
    accentTertiary: '#4f46e5',
    textColor: '#f8fafc', 
    textMuted: '#94a3b8',
    borderColor: '#334155', 
    hoverBg: '#2e3a58', 
    btnBg: '#334155', 
    btnHoverBg: '#4f46e5',
    glassBg: 'rgba(30, 41, 59, 0.8)',
    glassBorder: 'rgba(124, 58, 237, 0.25)',
    shadowGlow: '0 0 25px rgba(124, 58, 237, 0.4)'
  },
  
  halloween: { 
    bgColor: '#1a0a0a',
    bgSecondary: '#2a1a1a',
    navColor: '#2a0f0a', 
    accentColor: '#ff6b00',
    accentSecondary: '#ff9e4f',
    accentTertiary: '#ff3d00',
    textColor: '#ffd6a5',
    textMuted: '#c8a17a',
    borderColor: '#4a2a1a',
    hoverBg: '#3a1a0a',
    btnBg: '#4a2a1a',
    btnHoverBg: '#ff6b00',
    glassBg: 'rgba(42, 16, 10, 0.8)',
    glassBorder: 'rgba(255, 107, 0, 0.25)',
    shadowGlow: '0 0 25px rgba(255, 107, 0, 0.4)'
  },
  
  christmas: { 
    bgColor: '#0a1a12',
    bgSecondary: '#1a2a22',
    navColor: '#1a0a12', 
    accentColor: '#e63946',
    accentSecondary: '#ff758f',
    accentTertiary: '#c1121f',
    textColor: '#f8f9fa',
    textMuted: '#a8c6a8',
    borderColor: '#2a4a3a',
    hoverBg: '#1a2a22',
    btnBg: '#2a4a3a',
    btnHoverBg: '#e63946',
    glassBg: 'rgba(26, 42, 34, 0.8)',
    glassBorder: 'rgba(230, 57, 70, 0.25)',
    shadowGlow: '0 0 25px rgba(230, 57, 70, 0.4)'
  },
  
  midnight: { 
    bgColor: '#0f0f23',
    bgSecondary: '#1a1a2e',
    navColor: '#1a1b4b', 
    accentColor: '#9d4edd',
    accentSecondary: '#c77dff',
    accentTertiary: '#7b2cbf',
    textColor: '#e0e0e0',
    textMuted: '#a0a0c0',
    borderColor: '#3c3c5a',
    hoverBg: '#2a2a4e',
    btnBg: '#3c3c6f',
    btnHoverBg: '#9d4edd',
    glassBg: 'rgba(26, 26, 46, 0.8)',
    glassBorder: 'rgba(157, 78, 221, 0.25)',
    shadowGlow: '0 0 25px rgba(157, 78, 221, 0.4)'
  },
  
  ocean: { 
    bgColor: '#001f3f',
    bgSecondary: '#0a2f4f',
    navColor: '#0a1f4f', 
    accentColor: '#00d4ff',
    accentSecondary: '#7ae7ff',
    accentTertiary: '#00a3cc',
    textColor: '#cfe2f3',
    textMuted: '#8fa8c7',
    borderColor: '#1a4f6f',
    hoverBg: '#1a3f5f',
    btnBg: '#2a5f7f',
    btnHoverBg: '#00d4ff',
    glassBg: 'rgba(10, 47, 79, 0.8)',
    glassBorder: 'rgba(0, 212, 255, 0.25)',
    shadowGlow: '0 0 25px rgba(0, 212, 255, 0.4)'
  },
  
  light: { 
    bgColor: '#f8fafc',
    bgSecondary: '#e2e8f0',
    navColor: '#ffffff', 
    accentColor: '#4f46e5',
    accentSecondary: '#7c73e6',
    accentTertiary: '#3b3bff',
    textColor: '#1e293b',
    textMuted: '#64748b',
    borderColor: '#cbd5e1',
    hoverBg: '#e2e8f0',
    btnBg: '#e2e8f0',
    btnHoverBg: '#4f46e5',
    glassBg: 'rgba(255, 255, 255, 0.8)',
    glassBorder: 'rgba(203, 213, 225, 0.5)',
    shadowGlow: '0 0 15px rgba(99, 102, 241, 0.2)'
  }
};

// ===== SNOW EFFECT =====
let snowEnabled = true;
let snowInterval = null;

function createSnowflake() {
  if (!snowEnabled) return;
  
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  const size = Math.random() * 4 + 2;
  snowflake.style.width = size + 'px';
  snowflake.style.height = size + 'px';
  snowflake.style.left = Math.random() * window.innerWidth + 'px';
  const fallDuration = Math.random() * 10 + 5;
  snowflake.style.animationDuration = fallDuration + 's';
  snowflake.style.animationDelay = Math.random() * 15 + 's';
  snowflake.style.opacity = (Math.random() * 0.5 + 0.3).toFixed(2);
  
  const snowContainer = document.getElementById('snow-container');
  if (snowContainer) {
    snowContainer.appendChild(snowflake);
    setTimeout(() => { 
      if (snowflake.parentNode) {
        snowflake.remove(); 
      }
    }, (fallDuration + 15) * 1000);
  }
}

function startSnow() {
  if (snowInterval) return;
  snowEnabled = true;
  snowInterval = setInterval(createSnowflake, 200);
}

function stopSnow() {
  snowEnabled = false;
  if (snowInterval) {
    clearInterval(snowInterval);
    snowInterval = null;
  }
  const snowContainer = document.getElementById('snow-container');
  if (snowContainer) snowContainer.innerHTML = '';
}

// ===== TAB CLOAKING =====
function applyTabCloaking(title, favicon) {
  if (title) {
    document.title = title;
    localStorage.setItem('TabCloak_Title', title);
  }
  if (favicon) {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = favicon;
    localStorage.setItem('TabCloak_Favicon', favicon);
  }
}

// ===== THEME SYSTEM =====
function applyTheme(themeName) {
  const theme = themes[themeName] || themes.modern;
  
  const root = document.documentElement;
  root.style.setProperty('--bg-color', theme.bgColor);
  root.style.setProperty('--bg-secondary', theme.bgSecondary || theme.bgColor);
  root.style.setProperty('--nav-color', theme.navColor);
  root.style.setProperty('--accent-color', theme.accentColor);
  root.style.setProperty('--accent-secondary', theme.accentSecondary || theme.accentColor);
  root.style.setProperty('--accent-tertiary', theme.accentTertiary || theme.accentColor);
  root.style.setProperty('--text-color', theme.textColor);
  root.style.setProperty('--text-muted', theme.textMuted || theme.textColor + 'b3');
  root.style.setProperty('--border-color', theme.borderColor);
  root.style.setProperty('--hover-bg', theme.hoverBg);
  root.style.setProperty('--btn-bg', theme.btnBg);
  root.style.setProperty('--btn-hover-bg', theme.btnHoverBg || theme.accentColor);
  root.style.setProperty('--glass-bg', theme.glassBg || theme.navColor + 'cc');
  root.style.setProperty('--glass-border', theme.glassBorder || theme.accentColor + '40');
  root.style.setProperty('--shadow-glow', theme.shadowGlow || '0 0 25px ' + theme.accentColor + '66');
  
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute('content', theme.bgColor);
  }
  
  localStorage.setItem('selectedTheme', themeName);
}

// ===== LOAD SETTINGS =====
function loadSettings() {
  let themeToUse = 'original';
  const savedTheme = localStorage.getItem('selectedTheme');
  
  if (!savedTheme && shouldAutoApplySeasonalTheme()) {
    themeToUse = getSeasonalTheme();
  } else if (savedTheme) {
    themeToUse = savedTheme;
  }

  const savedTitle = localStorage.getItem('TabCloak_Title');
  const savedFavicon = localStorage.getItem('TabCloak_Favicon');
  const savedSnow = localStorage.getItem('snowEffect');
  const savedHotkey = localStorage.getItem('hotkey') || '`';
  const savedRedirect = localStorage.getItem('redirectURL') || 'https://google.com';
  const savedAboutBlank = localStorage.getItem('aboutBlank');

  if (savedTitle) {
    document.title = savedTitle;
    const titleInput = document.getElementById('customTitle');
    if (titleInput) titleInput.value = savedTitle;
  }

  if (savedFavicon) {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = savedFavicon;
    const faviconInput = document.getElementById('customFavicon');
    if (faviconInput) faviconInput.value = savedFavicon;
  }

  if (savedSnow === 'disabled') {
    snowEnabled = false;
    const snowToggle = document.getElementById('snowToggle');
    if (snowToggle) snowToggle.checked = false;
    stopSnow();
  } else {
    startSnow();
  }

  const hotkeyInput = document.getElementById('hotkey-input');
  const redirectInput = document.getElementById('redirect-url-input');
  if (hotkeyInput) hotkeyInput.value = savedHotkey;
  if (redirectInput) redirectInput.value = savedRedirect;

  const aboutBlankToggle = document.getElementById('aboutBlankToggle');
  if (aboutBlankToggle) {
    aboutBlankToggle.checked = savedAboutBlank === 'enabled';
  }

  applyTheme(themeToUse);
}

// ===== PANIC BUTTON =====
function setupPanicButton() {
  const savedHotkey = localStorage.getItem('hotkey') || '`';
  const savedRedirect = localStorage.getItem('redirectURL') || 'https://google.com';
  
  document.addEventListener('keydown', (e) => {
    if (e.key === savedHotkey) {
      window.location.href = savedRedirect;
    }
  });
  
  const changeHotkeyBtn = document.getElementById('change-hotkey-btn');
  const hotkeyInput = document.getElementById('hotkey-input');
  
  if (changeHotkeyBtn && hotkeyInput) {
    changeHotkeyBtn.addEventListener('click', () => {
      hotkeyInput.focus();
      hotkeyInput.placeholder = 'Press a key...';
    });
  }
  
  if (hotkeyInput) {
    hotkeyInput.addEventListener('keydown', (e) => {
      e.preventDefault();
      if (e.key.length === 1 || e.key === 'Escape' || /^F\d{1,2}$/.test(e.key)) {
        hotkeyInput.value = e.key;
        localStorage.setItem('hotkey', e.key);
        hotkeyInput.blur();
      }
    });
  }
  
  const changeURLBtn = document.getElementById('change-URL-btn');
  const redirectInput = document.getElementById('redirect-url-input');
  
  if (changeURLBtn && redirectInput) {
    changeURLBtn.addEventListener('click', () => {
      const url = redirectInput.value.trim();
      if (url) {
        localStorage.setItem('redirectURL', url);
        alert('Redirect URL updated!');
      }
    });
  }
}

// ===== UTILITY FUNCTIONS =====
function debounce(func, delay) {
  delay = delay || 300;
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
}

function hideAll() {
  document.querySelectorAll('.content').forEach(c => c.style.display = 'none');
  document.querySelectorAll('.sidebar-link').forEach(link => link.classList.remove('active'));
  const infoButtons = document.querySelector('.homepage-info-buttons');
  if (infoButtons) infoButtons.style.display = 'none';
}

// ===== NAVIGATION FUNCTIONS =====
function showHome() {
  hideAll();
  const homeContent = document.getElementById('content-home');
  if (homeContent) homeContent.style.display = 'block';
  const homeLink = document.getElementById('homeLink');
  if (homeLink) homeLink.classList.add('active');
  const infoButtons = document.querySelector('.homepage-info-buttons');
  if (infoButtons) infoButtons.style.display = 'flex';
}

function showGames() {
  hideAll();
  const gamesContent = document.getElementById('content-gms');
  if (gamesContent) gamesContent.style.display = 'block';
  const gameLink = document.getElementById('gameLink');
  if (gameLink) gameLink.classList.add('active');
  
  if (!document.querySelector('.game-filters') && window.GameStats) {
    const searchContainer = document.querySelector('.search-container');
    if (searchContainer) {
      const filtersHTML = window.GameStats.createFilterButtons();
      searchContainer.insertAdjacentHTML('afterend', filtersHTML);
    }
  }
  
  if (typeof games !== 'undefined' && Array.isArray(games)) {
    const activeFilter = document.querySelector('.filter-btn.active');
    if (activeFilter) {
      const filter = activeFilter.dataset.filter;
      window.filterGames(filter);
    } else {
      renderGames(games);
    }
  }
}

function showSearch() {
  hideAll();
  const searchContent = document.getElementById('content-srch');
  if (searchContent) searchContent.style.display = 'block';
  const searchLink = document.getElementById('searchLink');
  if (searchLink) searchLink.classList.add('active');
  
  setTimeout(() => {
    const proxyInput = document.getElementById('proxyUrlInput');
    if (proxyInput) proxyInput.focus();
  }, 100);
}

function showApps() {
  hideAll();
  const appsContent = document.getElementById('content-aps');
  if (appsContent) appsContent.style.display = 'block';
  const appsLink = document.getElementById('appsLink');
  if (appsLink) appsLink.classList.add('active');
  
  if (typeof apps !== 'undefined' && Array.isArray(apps)) {
    renderApps(apps);
  }
}

function showWebsites() {
  hideAll();
  const websitesContent = document.getElementById('content-websites');
  if (websitesContent) websitesContent.style.display = 'block';
  const websitesLink = document.getElementById('websitesLink');
  if (websitesLink) websitesLink.classList.add('active');
  
  if (typeof websites !== 'undefined' && Array.isArray(websites)) {
    renderWebsites(websites);
  }
}

function showAbout() {
  hideAll();
  const aboutContent = document.getElementById('content-about');
  if (aboutContent) aboutContent.style.display = 'block';
  const aboutLink = document.getElementById('aboutLink');
  if (aboutLink) aboutLink.classList.add('active');
}

function showSettings() {
  hideAll();
  const settingsContent = document.getElementById('content-settings');
  if (settingsContent) settingsContent.style.display = 'block';
  const settingsLink = document.getElementById('settingsLink');
  if (settingsLink) settingsLink.classList.add('active');
}

// Only showing the fixed loadgame smth function and renderGames function

function loadGame(urlOrGame) {
  // Handle both url. Anzo is inactive LOL XD.  strings and game objects
  let url;
  
  if (typeof urlOrGame === 'string') {
    url = urlOrGame;
  } else if (urlOrGame && typeof urlOrGame === 'object' && urlOrGame.url) {
    url = urlOrGame.url;
  } else {
    console.error('Invalid argument provided to loadGame:', urlOrGame);
    alert('Error: Invalid game data.');
    return;
  }
  
  if (!url) {
    console.error('No URL provided');
    alert('Error: Game URL is missing.');
    return;
  }
  
  try {
    const isYouTube = url.includes('/others/assets/apps/YouTube.html') || url.includes('youtu.be');
    
    if (isYouTube) {
      window.open(url, '_blank');
      return;
    }
    
    hideAll();
    const gameDisplay = document.getElementById('game-display');
    const gameIframe = document.getElementById('game-iframe');
    
    if (!gameDisplay || !gameIframe) {
      console.error('Game display elements not found');
      alert('Error: Unable to load game.');
      return;
    }
    
    if (window.GameStats) {
      window.GameStats.stopTracking();
    }
    
    gameIframe.src = '';
    gameIframe.src = url;
    gameDisplay.style.display = 'block';
    
    gameIframe.onload = function() {
      if (window.GameStats) {
        window.GameStats.startTracking(url);
      }
    };
    
    gameIframe.onerror = function() {
      console.error('Failed to load game:', url);
      alert('Error loading game.');
    };
  } catch (error) {
    console.error('Error in loadGame:', error);
    alert('An error occurred while loading the game.');
  }
}

function renderGames(gamesToRender) {
  const gameList = document.getElementById('game-list');
  if (!gameList) return;
  
  gameList.innerHTML = '';
  
  if (!gamesToRender || gamesToRender.length === 0) {
    gameList.innerHTML = '<p style="padding: 20px; text-align: center;">No games found.</p>';
    return;
  }
  
  gamesToRender.forEach(game => {
    if (!game || !game.name || !game.url) return;
    
    const isFavorited = window.GameStats ? window.GameStats.isFavorite(game.url) : false;
    
    const card = document.createElement('div');
    card.className = 'game-card';
    card.tabIndex = 0;
    card.innerHTML = (window.GameStats ? window.GameStats.createFavoriteButton(game.url, isFavorited) : '') + '<img src="' + (game.image || 'https://via.placeholder.com/250x250?text=Game') + '" alt="' + game.name + '" loading="lazy" /><h3>' + game.name + '</h3>';
    
    // Pass the URL string instead of calling loadGame with the entire game object
    card.onclick = () => loadGame(game.url);
    card.onkeypress = (e) => { if (e.key === 'Enter') loadGame(game.url); };
    
    gameList.appendChild(card);
  });
}

function renderApps(appsToRender) {
  const appList = document.getElementById('app-list');
  if (!appList) return;
  
  appList.innerHTML = '';
  
  if (!appsToRender || appsToRender.length === 0) {
    appList.innerHTML = '<p>No apps found.</p>';
    return;
  }
  
  appsToRender.forEach(app => {
    if (!app || !app.name || !app.url) return;
    
    const card = document.createElement('div');
    card.className = 'app-card';
    card.innerHTML = '<img src="' + (app.image || 'https://via.placeholder.com/250x250?text=App') + '" alt="' + app.name + '" loading="lazy" /><h3>' + app.name + '</h3>';
    card.onclick = () => loadGame(app.url);
    appList.appendChild(card);
  });
}

function renderWebsites(websitesToRender) {
  const websitesList = document.getElementById('websites-list');
  if (!websitesList) return;
  
  websitesList.innerHTML = '';
  
  if (!websitesToRender || websitesToRender.length === 0) {
    websitesList.innerHTML = '<p>No websites found.</p>';
    return;
  }
  
  const list = document.createElement('ul');
  list.style.cssText = 'list-style: none; padding: 20px; max-width: 800px; margin: 0 auto;';
  
  websitesToRender.forEach(website => {
    if (!website || !website.name || !website.url) return;
    
    const listItem = document.createElement('li');
    listItem.style.cssText = 'padding: 15px; margin-bottom: 10px; background: var(--nav-color); border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s ease;';
    
    listItem.innerHTML = '<a href="' + website.url + '" target="_blank" style="color: var(--accent-color); text-decoration: none; font-size: 18px; display: flex; align-items: center; gap: 10px;"><span>🔗</span><div><div style="font-weight: 600;">' + website.name + '</div><div style="font-size: 14px; color: var(--text-color); opacity: 0.7; margin-top: 4px;">' + website.url + '</div></div></a>';
    
    listItem.addEventListener('mouseenter', function() {
      this.style.background = 'var(--hover-bg)';
      this.style.borderColor = 'var(--accent-color)';
      this.style.transform = 'translateX(5px)';
    });
    
    listItem.addEventListener('mouseleave', function() {
      this.style.background = 'var(--nav-color)';
      this.style.borderColor = 'var(--border-color)';
      this.style.transform = 'translateX(0)';
    });
    
    list.appendChild(listItem);
  });
  
  websitesList.appendChild(list);
}

function loadGame(url) {
  if (!url) {
    console.error('No URL provided');
    alert('Error: Game URL is missing.');
    return;
  }
  
  try {
    const isYouTube = url.includes('/others/assets/apps/YouTube.html') || url.includes('youtu.be');
    
    if (isYouTube) {
      window.open(url, '_blank');
      return;
    }
    
    hideAll();
    const gameDisplay = document.getElementById('game-display');
    const gameIframe = document.getElementById('game-iframe');
    
    if (!gameDisplay || !gameIframe) {
      console.error('Game display elements not found');
      alert('Error: Unable to load game.');
      return;
    }
    
    if (window.GameStats) {
      window.GameStats.stopTracking();
    }
    
    gameIframe.src = '';
    gameIframe.src = url;
    gameDisplay.style.display = 'block';
    
    gameIframe.onload = function() {
      if (window.GameStats) {
        window.GameStats.startTracking(url);
      }
    };
    
    gameIframe.onerror = function() {
      console.error('Failed to load game:', url);
      alert('Error loading game.');
    };
  } catch (error) {
    console.error('Error in loadGame:', error);
    alert('An error occurred while loading the game.');
  }
}

function searchGames() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;
  
  const query = searchInput.value.toLowerCase().trim();
  
  if (typeof games === 'undefined' || !Array.isArray(games)) {
    console.error('games array not found');
    return;
  }
  
  if (!query) {
    renderGames(games);
    return;
  }
  
  const filtered = games.filter(game => game && game.name && game.name.toLowerCase().includes(query));
  renderGames(filtered);
}

function searchWebsites() {
  const searchInput = document.getElementById('websitesSearchInput');
  if (!searchInput) return;
  
  const query = searchInput.value.toLowerCase().trim();
  
  if (typeof websites === 'undefined' || !Array.isArray(websites)) {
    console.error('websites array not found');
    return;
  }
  
  if (!query) {
    renderWebsites(websites);
    return;
  }
  
  const filtered = websites.filter(site => site && site.name && site.name.toLowerCase().includes(query));
  renderWebsites(filtered);
}

function toggleFullscreen() {
  const gameIframe = document.getElementById('game-iframe');
  if (!gameIframe) return;
  
  try {
    if (!document.fullscreenElement) {
      gameIframe.requestFullscreen().catch(err => {
        console.error('Fullscreen error:', err);
        alert('Fullscreen not available. Click on the game first.');
      });
    } else {
      document.exitFullscreen();
    }
  } catch (error) {
    console.error('Fullscreen error:', error);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}

function initializeApp() {
  try {
    loadSettings();
    showHome();
    setupPanicButton();

    const themeSelect = document.getElementById('themeSelect');
    if (themeSelect) {
      const savedTheme = localStorage.getItem('selectedTheme');
      if (savedTheme) {
        themeSelect.value = savedTheme;
      } else if (shouldAutoApplySeasonalTheme()) {
        themeSelect.value = getSeasonalTheme();
      } else {
        themeSelect.value = 'original';
      }
      
      themeSelect.addEventListener('change', (e) => {
        const theme = e.target.value;
        applyTheme(theme);
        localStorage.setItem('selectedTheme', theme);
      });
    }

    const creditsBtn = document.getElementById('creditsBtn');
    const updateLogBtn = document.getElementById('updateLogBtn');
    const creditsModal = document.getElementById('creditsModal');
    const updateLogModal = document.getElementById('updateLogModal');

    if (creditsBtn && creditsModal) {
      creditsBtn.addEventListener('click', () => {
        creditsModal.style.display = 'block';
      });
    }

    if (updateLogBtn && updateLogModal) {
      updateLogBtn.addEventListener('click', () => {
        updateLogModal.style.display = 'block';
      });
    }

    document.querySelectorAll('.info-close').forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal');
        const modalElement = document.getElementById(modalId);
        if (modalElement) {
          modalElement.style.display = 'none';
        }
      });
    });

    window.onclick = (e) => {
      if (e.target.classList.contains('info-modal')) {
        e.target.style.display = 'none';
      }
    };

    const applyBtn = document.getElementById('applyBtn');
    if (applyBtn) {
      applyBtn.addEventListener('click', () => {
        const titleInput = document.getElementById('customTitle');
        const faviconInput = document.getElementById('customFavicon');
        const title = titleInput ? titleInput.value.trim() : '';
        const favicon = faviconInput ? faviconInput.value.trim() : '';
        applyTabCloaking(title, favicon);
        alert('Tab cloaking applied!');
      });
    }

    const resetBtn = document.getElementById('resetBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        localStorage.removeItem('TabCloak_Title');
        localStorage.removeItem('TabCloak_Favicon');
        document.title = 'Relic';
        const link = document.querySelector("link[rel~='icon']");
        if (link) link.href = '';
        const titleInput = document.getElementById('customTitle');
        const faviconInput = document.getElementById('customFavicon');
        if (titleInput) titleInput.value = '';
        if (faviconInput) faviconInput.value = '';
        const presetSelect = document.getElementById('presetSelect');
        if (presetSelect) presetSelect.value = '';
        alert('Tab cloaking reset!');
      });
    }

    const presetSelect = document.getElementById('presetSelect');
    if (presetSelect) {
      presetSelect.addEventListener('change', (e) => {
        const selected = presets[e.target.value];
        if (selected) {
          const titleInput = document.getElementById('customTitle');
          const faviconInput = document.getElementById('customFavicon');
          if (titleInput) titleInput.value = selected.title;
          if (faviconInput) faviconInput.value = selected.favicon;
          applyTabCloaking(selected.title, selected.favicon);
        }
      });
    }

    const snowToggle = document.getElementById('snowToggle');
    if (snowToggle) {
      snowToggle.addEventListener('change', (e) => {
        if (e.target.checked) {
          localStorage.setItem('snowEffect', 'enabled');
          startSnow();
        } else {
          localStorage.setItem('snowEffect', 'disabled');
          stopSnow();
        }
      });
    }

    const aboutBlankToggle = document.getElementById('aboutBlankToggle');
    if (aboutBlankToggle) {
      aboutBlankToggle.addEventListener('change', (e) => {
        if (e.target.checked) {
          localStorage.setItem('aboutBlank', 'enabled');
        } else {
          localStorage.removeItem('aboutBlank');
        }
      });
    }

    const homeLink = document.getElementById('homeLink');
    const gameLink = document.getElementById('gameLink');
    const appsLink = document.getElementById('appsLink');
    const websitesLink = document.getElementById('websitesLink');
    const settingsLink = document.getElementById('settingsLink');
    const aboutLink = document.getElementById('aboutLink');
    const searchLink = document.getElementById('searchLink');

    if (homeLink) homeLink.addEventListener('click', (e) => { e.preventDefault(); showHome(); });
    if (gameLink) gameLink.addEventListener('click', (e) => { e.preventDefault(); showGames(); });
    if (appsLink) appsLink.addEventListener('click', (e) => { e.preventDefault(); showApps(); });
    if (websitesLink) websitesLink.addEventListener('click', (e) => { e.preventDefault(); showWebsites(); });
    if (settingsLink) settingsLink.addEventListener('click', (e) => { e.preventDefault(); showSettings(); });
    if (aboutLink) aboutLink.addEventListener('click', (e) => { e.preventDefault(); showAbout(); });
    if (searchLink) searchLink.addEventListener('click', (e) => { e.preventDefault(); showSearch(); });

    const backToHomeGame = document.getElementById('backToHomeGame');
    const backToHomeApps = document.getElementById('backToHomeApps');
    const backToHomeWebsites = document.getElementById('backToHomeWebsites');
    
    if (backToHomeGame) {
      backToHomeGame.addEventListener('click', () => {
        if (window.GameStats) {
          window.GameStats.stopTracking();
        }
        showHome();
      });
    }
    
    if (backToHomeApps) {
      backToHomeApps.addEventListener('click', () => showHome());
    }
    
    if (backToHomeWebsites) {
      backToHomeWebsites.addEventListener('click', () => showHome());
    }

    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    
    if (searchBtn) {
      searchBtn.addEventListener('click', searchGames);
    }
    
    if (searchInput) {
      searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchGames();
      });
      searchInput.addEventListener('input', debounce(searchGames, 300));
    }

    const websitesSearchBtn = document.getElementById('websitesSearchBtn');
    const websitesSearchInput = document.getElementById('websitesSearchInput');
    
    if (websitesSearchBtn) {
      websitesSearchBtn.addEventListener('click', searchWebsites);
    }
    
    if (websitesSearchInput) {
      websitesSearchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchWebsites();
      });
      websitesSearchInput.addEventListener('input', debounce(searchWebsites, 300));
    }

    const fullscreenBtn = document.getElementById('fullscreenBtn');
    if (fullscreenBtn) {
      fullscreenBtn.addEventListener('click', toggleFullscreen);
    }
  } catch (error) {
    console.error('Critical error during initialization:', error);
    alert('An error occurred during initialization. Check console.');
  }
}
