document.addEventListener('DOMContentLoaded', function() {
    // Get the celebrate button
    const celebrateBtn = document.getElementById('celebrateBtn');
    
    // Add click event to the celebrate button
    celebrateBtn.addEventListener('click', function() {
        // Play birthday song
        playBirthdaySong();
        
        // Create confetti explosion
        createConfettiExplosion();
        
        // Show a birthday message
        showBirthdayMessage();
    });
    
    // Function to play birthday song
    function playBirthdaySong() {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // Notes for "Happy Birthday"
        const notes = [
            { note: 'G4', duration: 0.25 },
            { note: 'G4', duration: 0.25 },
            { note: 'A4', duration: 0.5 },
            { note: 'G4', duration: 0.5 },
            { note: 'C5', duration: 0.5 },
            { note: 'B4', duration: 1 },
            
            { note: 'G4', duration: 0.25 },
            { note: 'G4', duration: 0.25 },
            { note: 'A4', duration: 0.5 },
            { note: 'G4', duration: 0.5 },
            { note: 'D5', duration: 0.5 },
            { note: 'C5', duration: 1 },
            
            { note: 'G4', duration: 0.25 },
            { note: 'G4', duration: 0.25 },
            { note: 'G5', duration: 0.5 },
            { note: 'E5', duration: 0.5 },
            { note: 'C5', duration: 0.5 },
            { note: 'B4', duration: 0.5 },
            { note: 'A4', duration: 0.5 },
            
            { note: 'F5', duration: 0.25 },
            { note: 'F5', duration: 0.25 },
            { note: 'E5', duration: 0.5 },
            { note: 'C5', duration: 0.5 },
            { note: 'D5', duration: 0.5 },
            { note: 'C5', duration: 1 }
        ];
        
        // Frequencies of notes
        const noteFrequencies = {
            'C4': 261.63, 'D4': 293.66, 'E4': 329.63, 'F4': 349.23, 'G4': 392.00, 'A4': 440.00, 'B4': 493.88,
            'C5': 523.25, 'D5': 587.33, 'E5': 659.25, 'F5': 698.46, 'G5': 783.99, 'A5': 880.00, 'B5': 987.77
        };
        
        // Play each note in sequence
        let startTime = audioContext.currentTime;
        
        notes.forEach(note => {
            playNote(noteFrequencies[note.note], startTime, note.duration);
            startTime += note.duration;
        });
        
        function playNote(frequency, startTime, duration) {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.type = 'sine';
            oscillator.frequency.value = frequency;
            
            gainNode.gain.setValueAtTime(0.1, startTime);
            gainNode.gain.linearRampToValueAtTime(0.5, startTime + 0.1);
            gainNode.gain.linearRampToValueAtTime(0, startTime + duration);
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.start(startTime);
            oscillator.stop(startTime + duration + 0.1);
        }
    }
      // Function to create confetti
    function createConfettiExplosion() {
        const confettiContainer = document.querySelector('.confetti-container');
        confettiContainer.innerHTML = '';
        
        const colors = ['#ff1493', '#8a2be2', '#ff69b4', '#ff00ff', '#9400d3', '#4a0033', '#ff4500', '#ffb6c1', '#c71585', '#db7093'];
        
        // Create 200 confetti pieces
        for (let i = 0; i < 200; i++) {
            createConfetti(confettiContainer, colors);
        }
    }
    
    function createConfetti(container, colors) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // Random position, color, shape, and animation duration
        const left = Math.random() * 100;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 12 + 5;
        const duration = Math.random() * 6 + 3;
        const shape = Math.random() > 0.5 ? '50%' : Math.random() > 0.5 ? '0%' : '25%';
        
        confetti.style.left = `${left}%`;
        confetti.style.backgroundColor = color;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.borderRadius = shape;
        confetti.style.animationDuration = `${duration}s`;
        
        container.appendChild(confetti);
        
        // Remove confetti after animation is complete
        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);
    }
      // Function to show a special birthday message
    function showBirthdayMessage() {
        // Create a modal for the birthday message
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.style.zIndex = '1000';
        modal.style.opacity = '0';
        modal.style.transition = 'opacity 0.5s';
        
        // Create the message container
        const messageContainer = document.createElement('div');
        messageContainer.style.backgroundColor = 'rgba(26, 0, 36, 0.9)';
        messageContainer.style.padding = '40px';
        messageContainer.style.borderRadius = '20px';
        messageContainer.style.maxWidth = '600px';
        messageContainer.style.textAlign = 'center';
        messageContainer.style.boxShadow = '0 0 30px rgba(255, 20, 147, 0.5)';
        messageContainer.style.border = '2px solid #ff69b4';
        messageContainer.style.transform = 'scale(0.5)';
        messageContainer.style.transition = 'transform 0.5s';
        messageContainer.style.backdropFilter = 'blur(10px)';
        
        // Birthday message content
        messageContainer.innerHTML = `
            <h2 style="color: #ff69b4; font-size: 3rem; margin-bottom: 20px; font-family: 'Dancing Script', cursive; text-shadow: 0 0 10px rgba(255, 20, 147, 0.5);">Happy 23rd Birthday, Sneha!</h2>
            <p style="color: #fff; font-size: 1.2rem; margin-bottom: 15px; line-height: 1.6;">May your day be as lovely as you are!</p>
            <p style="color: #fff; font-size: 1.2rem; margin-bottom: 15px; line-height: 1.6;">Wishing you joy, laughter, and all the happiness in the world on your special day.</p>
            <p style="color: #fff; font-size: 1.2rem; margin-bottom: 15px; line-height: 1.6;">Here's to an amazing year ahead filled with wonderful adventures!</p>
            <div style="margin-top: 30px;">
                <button id="closeModal" style="background: linear-gradient(45deg, #4a0033, #ff1493); color: white; border: none; padding: 12px 30px; font-size: 1.1rem; border-radius: 30px; cursor: pointer; transition: all 0.3s; box-shadow: 0 0 15px rgba(255, 20, 147, 0.5);">Thank You!</button>
            </div>
        `;
        
        // Add modal to body
        modal.appendChild(messageContainer);
        document.body.appendChild(modal);
        
        // Animate modal appearance
        setTimeout(() => {
            modal.style.opacity = '1';
            messageContainer.style.transform = 'scale(1)';
        }, 100);
        
        // Close modal on button click
        document.getElementById('closeModal').addEventListener('click', () => {
            modal.style.opacity = '0';
            messageContainer.style.transform = 'scale(0.5)';
            setTimeout(() => {
                modal.remove();
            }, 500);
        });
    }
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
