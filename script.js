document.addEventListener('DOMContentLoaded', function() {
    // Get the celebrate button
    const celebrateBtn = document.getElementById('celebrateBtn');
    
    // Add click event to the celebrate button
    celebrateBtn.addEventListener('click', function() {
        // Redirect to the celebration page
        window.location.href = 'celebration.html';
    });
      // Add some initial floating hearts in the background
    createFloatingHearts();
      function createFloatingHearts() {
        const container = document.querySelector('.container');
        
        // Add large hearts
        for (let i = 0; i < 15; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'absolute';
            heart.style.fontSize = `${Math.random() * 50 + 30}px`; // Much larger hearts
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.top = `${Math.random() * 100}%`; // Use full height
            heart.style.opacity = '0.4';
            heart.style.animation = `heartFloatLarge ${Math.random() * 15 + 10}s linear infinite`; // Slower animation for big hearts
            heart.style.animationDelay = `${Math.random() * 5}s`;
            heart.style.zIndex = '-1';
            
            container.appendChild(heart);
        }
        
        // Add medium hearts
        for (let i = 0; i < 15; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'absolute';
            heart.style.fontSize = `${Math.random() * 25 + 15}px`; // Medium sized hearts
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.top = `${Math.random() * 100}%`;
            heart.style.opacity = '0.3';
            heart.style.animation = `heartFloatMedium ${Math.random() * 12 + 8}s linear infinite`;
            heart.style.animationDelay = `${Math.random() * 8}s`;
            heart.style.zIndex = '-1';
            
            container.appendChild(heart);
        }
        
        // Add small hearts
        for (let i = 0; i < 20; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'absolute';
            heart.style.fontSize = `${Math.random() * 15 + 8}px`; // Smaller hearts
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.top = `${Math.random() * 100}%`;
            heart.style.opacity = '0.25';
            heart.style.animation = `heartFloatSmall ${Math.random() * 8 + 6}s linear infinite`;
            heart.style.animationDelay = `${Math.random() * 10}s`;
            heart.style.zIndex = '-1';
            
            container.appendChild(heart);
        }
    }    // Add keyframes for heart animation
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes heartFloatLarge {
            0% {
                transform: translateY(0) rotate(0deg) scale(1);
                opacity: 0.4;
            }
            25% {
                transform: translateY(-40px) translateX(20px) rotate(90deg) scale(1.1);
                opacity: 0.5;
            }
            50% {
                transform: translateY(-80px) translateX(-20px) rotate(180deg) scale(1);
                opacity: 0.6;
            }
            75% {
                transform: translateY(-40px) translateX(-30px) rotate(270deg) scale(1.1);
                opacity: 0.5;
            }
            100% {
                transform: translateY(0) translateX(0) rotate(360deg) scale(1);
                opacity: 0.4;
            }
        }
        
        @keyframes heartFloatMedium {
            0% {
                transform: translateY(0) rotate(0deg) scale(1);
                opacity: 0.3;
            }
            33% {
                transform: translateY(-60px) translateX(30px) rotate(120deg) scale(1.2);
                opacity: 0.4;
            }
            66% {
                transform: translateY(-120px) translateX(-30px) rotate(240deg) scale(1);
                opacity: 0.5;
            }
            100% {
                transform: translateY(0) translateX(0) rotate(360deg) scale(1);
                opacity: 0.3;
            }
        }
        
        @keyframes heartFloatSmall {
            0% {
                transform: translateY(0) rotate(0deg) scale(1);
                opacity: 0.25;
            }
            50% {
                transform: translateY(-40px) translateX(20px) rotate(180deg) scale(1.1);
                opacity: 0.35;
            }
            100% {
                transform: translateY(0) translateX(0) rotate(360deg) scale(1);
                opacity: 0.25;
            }
        }
    `;
    document.head.appendChild(style);
});
