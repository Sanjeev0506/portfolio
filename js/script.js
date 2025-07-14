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

// Typewriter Effect
const roles = [
    "Web Developer",
    "Backend & Cloud Enthusiast",
    "Generative AI Explorer",
    "Electronics Geek"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeEl = document.getElementById('typewriter-text');

function type() {
    const current = roles[roleIndex];
    const text = current.substring(0, charIndex);

    typeEl.textContent = text + "|";

    if (!isDeleting) {
        charIndex++;
        if (charIndex > current.length) {
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        }
    } else {
        charIndex--;
        if (charIndex < 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();
