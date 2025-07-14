
window.onload = () => {
  particlesJS("particles-js", {
    particles: {
      number: { value: 100 },
      color: { value: "#00ff00" },
      shape: { type: "circle" },
      opacity: { value: 0.3, random: true },
      size: { value: 2, random: true },
      line_linked: {
        enable: true,
        distance: 120,
        color: "#00ff00",
        opacity: 0.2,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        out_mode: "out"
      }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" }
      },
      modes: {
        grab: { distance: 150, line_linked: { opacity: 0.4 } },
        push: { particles_nb: 3 }
      }
    },
    retina_detect: true
  });

  const texts = [
    "Web Developer",
    "Backend & Cloud Enthusiast",
    "Generative AI Explorer",
    "Electronics Geek"
  ];
  let i = 0, j = 0, isDeleting = false;
  const speed = 100;
  const element = document.getElementById("typewriter-text");

  function type() {
    const word = texts[i];
    element.textContent = word.substring(0, j) + "|";
    if (!isDeleting) {
      j++;
      if (j > word.length) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
      }
    } else {
      j--;
      if (j < 0) {
        isDeleting = false;
        i = (i + 1) % texts.length;
      }
    }
    setTimeout(type, isDeleting ? 50 : speed);
  }

  type();

  const sections = document.querySelectorAll('.fade-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));
};
