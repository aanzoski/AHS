// ===== GAME FAVORITES & STATISTICS SYSTEM =====
(function() {
  'use strict';

  const GameStats = {
    initialized: false,
    currentGameURL: null,
    currentGameStartTime: null,
    updateInterval: null,

    init: function() {
      if (this.initialized) return;
      this.initialized = true;
      console.log('⭐ Game Favorites & Statistics initialized');
      
      // Track when user leaves the page
      window.addEventListener('beforeunload', () => {
        this.stopTracking();
      });

      // Track visibility changes (tab switching)
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          this.pauseTracking();
        } else {
          this.resumeTracking();
        }
      });
    },

    // Get all favorites
    getFavorites: function() {
      const favorites = localStorage.getItem('gv_favorites');
      return favorites ? JSON.parse(favorites) : [];
    },

    // Check if a game is favorited
    isFavorite: function(gameURL) {
      const favorites = this.getFavorites();
      return favorites.includes(gameURL);
    },

    // Toggle favorite status
    toggleFavorite: function(gameURL) {
      let favorites = this.getFavorites();
      const index = favorites.indexOf(gameURL);
      
      if (index > -1) {
        favorites.splice(index, 1);
      } else {
        favorites.push(gameURL);
      }
      
      localStorage.setItem('gv_favorites', JSON.stringify(favorites));
      return index === -1; // Return true if now favorited
    },

    // Get playtime for a specific game in seconds
    getPlaytime: function(gameURL) {
      const stats = localStorage.getItem('gv_playtime');
      const playtimeData = stats ? JSON.parse(stats) : {};
      return playtimeData[gameURL] || 0;
    },

    // Add playtime for a game
    addPlaytime: function(gameURL, seconds) {
      const stats = localStorage.getItem('gv_playtime');
      const playtimeData = stats ? JSON.parse(stats) : {};
      
      playtimeData[gameURL] = (playtimeData[gameURL] || 0) + seconds;
      localStorage.setItem('gv_playtime', JSON.stringify(playtimeData));
    },

    // Start tracking playtime for current game
    startTracking: function(gameURL) {
      this.stopTracking(); // Stop any existing tracking
      
      this.currentGameURL = gameURL;
      this.currentGameStartTime = Date.now();
      
      console.log('🎮 Started tracking playtime for:', gameURL);
      
      // Update every 10 seconds
      this.updateInterval = setInterval(() => {
        this.saveCurrentPlaytime();
      }, 10000);
    },

    // Save current playtime
    saveCurrentPlaytime: function() {
      if (this.currentGameURL && this.currentGameStartTime) {
        const elapsed = Math.floor((Date.now() - this.currentGameStartTime) / 1000);
        if (elapsed > 0) {
          this.addPlaytime(this.currentGameURL, elapsed);
          this.currentGameStartTime = Date.now(); // Reset start time
          console.log('💾 Saved', elapsed, 'seconds of playtime');
        }
      }
    },

    // Pause tracking (e.g., when tab is hidden)
    pauseTracking: function() {
      this.saveCurrentPlaytime();
      if (this.updateInterval) {
        clearInterval(this.updateInterval);
        this.updateInterval = null;
      }
      console.log('⏸️ Paused playtime tracking');
    },

    // Resume tracking
    resumeTracking: function() {
      if (this.currentGameURL && !this.updateInterval) {
        this.currentGameStartTime = Date.now();
        this.updateInterval = setInterval(() => {
          this.saveCurrentPlaytime();
        }, 10000);
        console.log('▶️ Resumed playtime tracking');
      }
    },

    // Stop tracking completely
    stopTracking: function() {
      this.saveCurrentPlaytime();
      if (this.updateInterval) {
        clearInterval(this.updateInterval);
        this.updateInterval = null;
      }
      this.currentGameURL = null;
      this.currentGameStartTime = null;
      console.log('⏹️ Stopped playtime tracking');
    },

    // Get all games sorted by playtime
    getMostPlayedGames: function(games) {
      if (!games || !Array.isArray(games)) return [];
      
      return games.map(game => ({
        ...game,
        playtime: this.getPlaytime(game.url)
      })).sort((a, b) => b.playtime - a.playtime);
    },

    // Get favorite games
    getFavoriteGames: function(games) {
      if (!games || !Array.isArray(games)) return [];
      
      const favorites = this.getFavorites();
      return games.filter(game => favorites.includes(game.url));
    },

    // Create favorite button HTML
    createFavoriteButton: function(gameURL, isFavorited) {
      const escapedURL = gameURL.replace(/'/g, "\\'");
      return `
        <button class="favorite-btn ${isFavorited ? 'favorited' : ''}" 
                data-game-url="${gameURL}" 
                onclick="event.stopPropagation(); window.GameStats.handleFavoriteClick(event, '${escapedURL}')"
                title="${isFavorited ? 'Remove from favorites' : 'Add to favorites'}">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="${isFavorited ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </button>
      `;
    },

    // Handle favorite button click
    handleFavoriteClick: function(event, gameURL) {
      event.stopPropagation(); // Prevent card click
      
      const isFavorited = this.toggleFavorite(gameURL);
      const button = event.currentTarget;
      
      if (isFavorited) {
        button.classList.add('favorited');
        button.title = 'Remove from favorites';
        button.querySelector('svg').setAttribute('fill', 'currentColor');
        console.log('⭐ Added to favorites:', gameURL);
      } else {
        button.classList.remove('favorited');
        button.title = 'Add to favorites';
        button.querySelector('svg').setAttribute('fill', 'none');
        console.log('☆ Removed from favorites:', gameURL);
      }
      
      // Update the game list if we're on a filtered view
      const activeFilter = document.querySelector('.filter-btn.active');
      if (activeFilter && activeFilter.dataset.filter === 'favorites') {
        // Refresh the favorites view
        window.filterGames('favorites');
      }
    },

    // Create filter buttons HTML
    createFilterButtons: function() {
      return `
        <div class="game-filters">
          <button class="filter-btn active" data-filter="all" onclick="window.filterGames('all')">
            All Games
          </button>
          <button class="filter-btn" data-filter="favorites" onclick="window.filterGames('favorites')">
            ⭐ Favorites
          </button>
          <button class="filter-btn" data-filter="most-played" onclick="window.filterGames('most-played')">
            🔥 Most Played
          </button>
        </div>
      `;
    }
  };

  // Initialize the system
  GameStats.init();

  // Expose to window for global access
  window.GameStats = GameStats;

  // Add filter games function to window
  window.filterGames = function(filter) {
    if (typeof games === 'undefined') {
      console.error('games array not found');
      return;
    }

    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.filter === filter) {
        btn.classList.add('active');
      }
    });

    let gamesToRender;
    switch(filter) {
      case 'favorites':
        gamesToRender = GameStats.getFavoriteGames(games);
        if (gamesToRender.length === 0) {
          const gameList = document.getElementById('game-list');
          if (gameList) {
            gameList.innerHTML = '<p style="padding: 40px; text-align: center; color: var(--text-color);">No favorite games yet. Click the star on any game to add it to your favorites!</p>';
          }
          return;
        }
        break;
      case 'most-played':
        gamesToRender = GameStats.getMostPlayedGames(games);
        break;
      default:
        gamesToRender = games;
    }

    // Use the existing renderGames function
    if (typeof renderGames === 'function') {
      renderGames(gamesToRender);
    }
  };

  console.log('✅ Game Favorites & Statistics system loaded');
})();
function openGame(game) {
  // YouTube skip iframe
  if (game.name === "YouTube") {
    window.location.href = game.url;
    return;
  }

  // otherwise iframe
  const iframe = document.getElementById("iframe");
  iframe.src = game.url;

  // start tracking playtime
  GameStats.startTracking(game.url);
}
