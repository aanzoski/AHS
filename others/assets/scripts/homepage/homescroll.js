// Homepage Carousel Scroll Functionality
(function() {
  'use strict';

  console.log('🎮 Carousel script loaded');

  let gamesLoaded = false;
  let retryCount = 0;
  const MAX_RETRIES = 30;

  // Initialize carousels when DOM is ready
  function initCarousels() {
    console.log(`🔄 InitCarousels called, retry: ${retryCount}/${MAX_RETRIES}`);
    
    // Check if carousel tracks exist
    const trackTop = document.getElementById('carousel-track-top');
    const trackBottom = document.getElementById('carousel-track-bottom');
    
    if (!trackTop || !trackBottom) {
      console.warn('⚠️ Carousel tracks not found in DOM yet');
      if (retryCount < MAX_RETRIES) {
        retryCount++;
        setTimeout(initCarousels, 200);
        return;
      }
      console.error('❌ Carousel tracks never appeared');
      return;
    }

    console.log('✅ Carousel tracks found');

    // Check for games data
    let gamesToUse = [];
    
    if (typeof games !== 'undefined' && games && games.length > 0) {
      console.log(`✅ Found ${games.length} games from games array`);
      // Filter out Feedback
      gamesToUse = games.filter(game => game.name !== "Feedback");
      console.log(`✅ Using ${gamesToUse.length} playable games`);
    } else if (typeof window.games !== 'undefined' && window.games && window.games.length > 0) {
      console.log(`✅ Found ${window.games.length} games from window.games`);
      gamesToUse = window.games.filter(game => game.name !== "Feedback");
    } else {
      console.warn('⚠️ No games data found, retrying...');
      if (retryCount < MAX_RETRIES) {
        retryCount++;
        setTimeout(initCarousels, 200);
        return;
      }
      console.error('❌ Games data never loaded');
      return;
    }

    if (gamesToUse.length === 0) {
      console.error('❌ No playable games found');
      return;
    }

    console.log('🎯 Loading carousels with', gamesToUse.length, 'games');
    loadTopCarousel(gamesToUse);
    loadBottomCarousel(gamesToUse);
    gamesLoaded = true;
    console.log('✅ Carousels loaded successfully');
  }

  // Load games into top carousel (left to right)
  function loadTopCarousel(gamesToUse) {
    const trackTop = document.getElementById('carousel-track-top');
    if (!trackTop) return;

    // Shuffle and take first 15 games
    const shuffled = [...gamesToUse].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(15, gamesToUse.length));
    
    // Duplicate for seamless loop
    const duplicated = [...selected, ...selected];

    trackTop.innerHTML = duplicated.map(game => createGameCard(game)).join('');
    addClickHandlers(trackTop);
    
    console.log(`✅ Top carousel loaded with ${duplicated.length} cards`);
  }

  // Load games into bottom carousel (right to left)
  function loadBottomCarousel(gamesToUse) {
    const trackBottom = document.getElementById('carousel-track-bottom');
    if (!trackBottom) return;

    // Shuffle differently and take different games
    const shuffled = [...gamesToUse].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(15, gamesToUse.length));
    
    // Duplicate for seamless loop
    const duplicated = [...selected, ...selected];

    trackBottom.innerHTML = duplicated.map(game => createGameCard(game)).join('');
    addClickHandlers(trackBottom);
    
    console.log(`✅ Bottom carousel loaded with ${duplicated.length} cards`);
  }

  // Create a game card HTML
  function createGameCard(game) {
    // Handle your data structure: image and url properties
    const gameImage = game.image || 'others/assets/images/placeholder.png';
    const gameName = game.name || 'Unknown Game';
    const gameUrl = game.url || '';

    return `
      <div class="carousel-game-card" data-game-url="${gameUrl}" data-game-name="${gameName}" title="${gameName}">
        <img src="${gameImage}" alt="${gameName}" draggable="false" loading="lazy" onerror="this.src='others/assets/images/placeholder.png'">
        <h3>${gameName}</h3>
      </div>
    `;
  }

  // Add click handlers to game cards
  function addClickHandlers(track) {
    const cards = track.querySelectorAll('.carousel-game-card');
    cards.forEach(card => {
      card.addEventListener('click', function(e) {
        e.preventDefault();
        const gameUrl = this.getAttribute('data-game-url');
        const gameName = this.getAttribute('data-game-name');
        
        console.log(`🎮 Clicked game: ${gameName}`);
        
        if (gameUrl) {
          // Try to use your existing loadGame function if it exists
          if (typeof loadGame === 'function') {
            // Find the game object from the games array
            const gameObj = games.find(g => g.url === gameUrl);
            if (gameObj) {
              loadGame(gameObj);
            } else {
              // Fallback: load directly
              loadGameByUrl(gameUrl, gameName);
            }
          } else {
            // Fallback: load directly
            loadGameByUrl(gameUrl, gameName);
          }
        } else {
          console.warn('⚠️ No URL found for game:', gameName);
        }
      });
    });
  }

  // Fallback function to load game by URL
  function loadGameByUrl(url, name) {
    console.log(`Loading game: ${name} from ${url}`);
    
    // Check if it's a Google Form (Feedback)
    if (url.includes('forms.gle') || url.includes('google.com/forms')) {
      window.open(url, '_blank');
      return;
    }
    
    // Try to use existing game display system
    const gameDisplay = document.getElementById('game-display');
    const gameIframe = document.getElementById('game-iframe');
    
    if (gameDisplay && gameIframe) {
      // Hide all content sections
      document.querySelectorAll('.content').forEach(content => {
        content.style.display = 'none';
      });
      
      // Show game display
      gameDisplay.style.display = 'block';
      gameIframe.src = url;
      
      console.log('✅ Game loaded in iframe');
    } else {
      // Fallback: open in new tab
      console.warn('⚠️ Game display not found, opening in new tab');
      window.open(url, '_blank');
    }
  }

  // Pause/resume animations on visibility change
  function handleVisibilityChange() {
    const tracks = document.querySelectorAll('.carousel-track');
    
    if (document.hidden) {
      tracks.forEach(track => {
        track.style.animationPlayState = 'paused';
      });
    } else {
      tracks.forEach(track => {
        track.style.animationPlayState = 'running';
      });
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      console.log('📄 DOM Content Loaded');
      setTimeout(initCarousels, 100);
    });
  } else {
    console.log('📄 DOM already loaded');
    setTimeout(initCarousels, 100);
  }

  // Handle page visibility changes
  document.addEventListener('visibilitychange', handleVisibilityChange);

  // Expose reload function for external use
  window.reloadHomeCarousels = function() {
    console.log('🔄 Reloading carousels...');
    if (typeof games !== 'undefined' && games && games.length > 0) {
      const gamesToUse = games.filter(game => game.name !== "Feedback");
      loadTopCarousel(gamesToUse);
      loadBottomCarousel(gamesToUse);
    } else {
      initCarousels();
    }
  };

  console.log('🎮 Carousel script initialization complete');

})();
