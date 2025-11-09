window.onload = () => {
  particlesJS("particles-js", {
    particles: {
      number: { value: 30, density: { enable: true, value_area: 800 } },
      color: { value: "#ffc107" },
      shape: { type: "circle" },
      opacity: { value: 0.4, random: false, anim: { enable: false } },
      size: { value: 3, random: true, anim: { enable: false } },
      line_linked: {
        enable: true,
        distance: 180,
        color: "#ffc107",
        opacity: 0.6,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
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
// View Counter
const viewCounter = document.getElementById("view-counter");
let views = localStorage.getItem("portfolioViews");
if (!views) {
  views = 69; // default
}
views++;
localStorage.setItem("portfolioViews", views);
viewCounter.textContent = `👁️ ${views} views`;
// ---- Contact Form Submission (AJAX + Formspree) ----
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");
const submitBtn = document.getElementById("submit-btn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";
  status.textContent = "";

  try {
    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      status.style.color = "#00e676";
      status.textContent = "✅ Message sent successfully!";
      form.reset();
    } else {
      status.style.color = "#ff5252";
      status.textContent = "❌ Oops! Something went wrong. Please try again.";
    }
  } catch (error) {
    status.style.color = "#ff5252";
    status.textContent = "⚠️ Network error. Please try again.";
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Send Message";
  }
});
