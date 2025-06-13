document.addEventListener('DOMContentLoaded', function() {
    // Initialize the Lottie animation
    const lottieCake = lottie.loadAnimation({
        container: document.getElementById('lottie-cake'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'Cake.json'
    });
    
    // Create confetti for celebration
    createContinuousConfetti();
    
    // Play birthday song
    setTimeout(() => {
        playBirthdaySong();
    }, 1000);
    
    // Function to create continuous confetti
    function createContinuousConfetti() {
        const colors = [
            '#ff1493', '#8a2be2', '#ff69b4', '#ff00ff', 
            '#9400d3', '#4a0033', '#ff4500', '#ffb6c1', 
            '#c71585', '#db7093', '#ff3366', '#cc0066'
        ];
        
        // Initial batch of confetti
        createConfettiBatch(colors, 100);
        
        // Create new confetti continuously
        setInterval(() => {
            createConfettiBatch(colors, 20);
        }, 2000);
    }
    
    function createConfettiBatch(colors, count) {
        const confettiContainer = document.getElementById('confetti-container');
        
        for (let i = 0; i < count; i++) {
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
            
            confettiContainer.appendChild(confetti);
            
            // Remove confetti after animation is complete
            setTimeout(() => {
                confetti.remove();
            }, duration * 1000);
        }
    }
    
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
    
    // Add image fade-in animation
    const featuredImage = document.querySelector('.featured-image');
    featuredImage.style.opacity = '0';
    
    setTimeout(() => {
        featuredImage.style.opacity = '1';
    }, 500);
});
