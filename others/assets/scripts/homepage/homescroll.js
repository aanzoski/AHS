// CHeck and review this anzo 
(function() {
  'use strict';

  let gamesLoaded = false;
  let retryCount = 0;
  const MAX_RETRIES = 30;

  function initCarousels() {
    const track = document.getElementById('carousel-track-top');
    
    if (!track) {
      if (retryCount < MAX_RETRIES) {
        retryCount++;
        setTimeout(initCarousels, 200);
        return;
      }
      console.error('Homepage track not found');
      return;
    }

    let gamesToUse = [];
    
    if (typeof games !== 'undefined' && games && games.length > 0) {
      gamesToUse = games.filter(game => game.name !== "Feedback");
    } else if (typeof window.games !== 'undefined' && window.games && window.games.length > 0) {
      gamesToUse = window.games.filter(game => game.name !== "Feedback");
    } else {
      if (retryCount < MAX_RETRIES) {
        retryCount++;
        setTimeout(initCarousels, 200);
        return;
      }
      console.error('Games data not found');
      return;
    }

    if (gamesToUse.length === 0) {
      console.error('No playable games found');
      return;
    }

    loadCarousel(gamesToUse);
    gamesLoaded = true;
  }

  function loadCarousel(gamesToUse) {
    const track = document.getElementById('carousel-track-top');
    if (!track) return;

    const shuffled = [...gamesToUse].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(20, gamesToUse.length));
    const duplicated = [...selected, ...selected];

    track.innerHTML = duplicated.map(game => createGameCard(game)).join('');
    addClickHandlers(track);
  }

  function createGameCard(game) {
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

  function addClickHandlers(track) {
    const cards = track.querySelectorAll('.carousel-game-card');
    cards.forEach(card => {
      card.addEventListener('click', function(e) {
        e.preventDefault();
        const gameUrl = this.getAttribute('data-game-url');
        const gameName = this.getAttribute('data-game-name');
        
        if (gameUrl) {
          if (typeof loadGame === 'function') {
            // Pass the URL string directly, not the game object
            loadGame(gameUrl);
          } else {
            loadGameByUrl(gameUrl, gameName);
          }
        } else {
          console.warn('No URL found for game:', gameName);
        }
      });
    });
  }

  function loadGameByUrl(url, name) {
    if (url.includes('forms.gle') || url.includes('google.com/forms')) {
      window.open(url, '_blank');
      return;
    }
    
    const gameDisplay = document.getElementById('game-display');
    const gameIframe = document.getElementById('game-iframe');
    
    if (gameDisplay && gameIframe) {
      document.querySelectorAll('.content').forEach(content => {
        content.style.display = 'none';
      });
      
      gameDisplay.style.display = 'block';
      gameIframe.src = url;
    } else {
      console.warn('Game display not found, opening in new tab');
      window.open(url, '_blank');
    }
  }

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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(initCarousels, 100);
    });
  } else {
    setTimeout(initCarousels, 100);
  }

  document.addEventListener('visibilitychange', handleVisibilityChange);

  window.reloadHomeCarousels = function() {
    if (typeof games !== 'undefined' && games && games.length > 0) {
      const gamesToUse = games.filter(game => game.name !== "Feedback");
      loadCarousel(gamesToUse);
    } else {
      initCarousels();
    }
  };

})();
