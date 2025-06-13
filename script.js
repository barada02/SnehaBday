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
        
        for (let i = 0; i < 20; i++) { /* Reduced number from 30 to 20 */
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'absolute';
            heart.style.fontSize = `${Math.random() * 15 + 8}px`; /* Reduced size */
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.top = `${Math.random() * 80}%`; /* Limited to 80% of height */
            heart.style.opacity = '0.4';
            heart.style.animation = `heartFloat ${Math.random() * 8 + 5}s linear infinite`; /* Reduced animation time */
            heart.style.animationDelay = `${Math.random() * 5}s`;
            heart.style.zIndex = '-1';
            
            container.appendChild(heart);
        }
    }    // Add keyframes for heart animation
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes heartFloat {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 0.4;
            }
            50% {
                transform: translateY(-30px) rotate(180deg);
                opacity: 0.7;
            }
            100% {
                transform: translateY(-60px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});
