window.onload = () => {
    document.getElementById('loader').style.display = 'none';
};

particlesJS("particles-js", {
    "particles": {
        "number": { "value": 96 },
        "color": { "value": "#e50914" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5, "random": true },
        "size": { "value": 3, "random": true },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#e50914",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "out_mode": "out"
        }
    },
    "interactivity": {
        "events": {
            "onhover": { "enable": true, "mode": "grab" },
            "onclick": { "enable": true, "mode": "push" }
        },
        "modes": {
            "grab": { "distance": 200, "line_linked": { "opacity": 0.7 } },
            "push": { "particles_nb": 4 }
        }
    },
    "retina_detect": true
});

const music = document.getElementById('bg-music');
const musicToggle = document.getElementById('music-toggle');

window.addEventListener('click', () => {
    if (music.paused) music.play();
}, { once: true });

musicToggle.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        musicToggle.textContent = "Sound Off";
    } else {
        music.pause();
        musicToggle.textContent = "Sound On";
    }
});
