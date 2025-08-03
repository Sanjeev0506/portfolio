window.onload = () => {
  // Re-implementing a subtle particles.js effect
  particlesJS("particles-js", {
    particles: {
      number: { value: 30, density: { enable: true, value_area: 800 } },
      color: { value: "#00bcd4" }, // Matches the new highlight color
      shape: { type: "circle" },
      opacity: { value: 0.4, random: false, anim: { enable: false } },
      size: { value: 3, random: true, anim: { enable: false } },
      line_linked: {
        enable: true,
        distance: 180,
        color: "#2c2c2c", // A dark gray for links
        opacity: 0.6,
        width: 1
      },
      move: {
        enable: true,
        speed: 1, // Slow, calm movement
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: false },
        resize: true
      },
      modes: {
        grab: { distance: 150, line_linked: { opacity: 0.8 } },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  });

  // Typewriter effect (unchanged)
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
    element.textContent = word.substring(0, j) + "_";
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

  // Scroll animations and navigation highlighting (unchanged)
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('header .nav-links a');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const sectionId = entry.target.id;
      const navLink = document.querySelector(`header .nav-links a[href="#${sectionId}"]`);
      
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        if (navLink) {
          navLinks.forEach(link => link.classList.remove('active'));
          navLink.classList.add('active');
        }
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
};
