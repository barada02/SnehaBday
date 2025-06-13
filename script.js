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
        
        for (let i = 0; i < 30; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'absolute';
            heart.style.fontSize = `${Math.random() * 20 + 10}px`;
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.top = `${Math.random() * 100}%`;
            heart.style.opacity = '0.4';
            heart.style.animation = `heartFloat ${Math.random() * 10 + 5}s linear infinite`;
            heart.style.animationDelay = `${Math.random() * 5}s`;
            heart.style.zIndex = '-1';
            
            container.appendChild(heart);
        }
    }
    
    // Add keyframes for heart animation
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes heartFloat {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 0.4;
            }
            50% {
                transform: translateY(-100px) rotate(180deg);
                opacity: 0.7;
            }
            100% {
                transform: translateY(-200px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});
