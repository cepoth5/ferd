const params = new URLSearchParams(window.location.search);

const guest = params.get("to");

const guestName = document.getElementById("guestName");

if (guest) {

  guestName.innerHTML = `Dear ${guest}`;

}

/* =========================
   GSAP OPENING ANIMATION
========================= */

gsap.from(".subtitle", {
  y: 30,
  opacity: 0,
  duration: 1,
});

gsap.from(".title", {
  y: 50,
  opacity: 0,
  duration: 1.2,
  delay: 0.3,
});

gsap.from(".date", {
  y: 30,
  opacity: 0,
  duration: 1,
  delay: 0.6,
});

/* =========================
   MUSIC
========================= */

const music =
  document.getElementById("bgMusic");

const musicToggle =
  document.getElementById("musicToggle");

const openButton =
  document.getElementById("openInvitation");

let isPlaying = false;

/* =========================
   OPEN INVITATION
========================= */

const opening =
  document.querySelector(".opening");

const mainContent =
  document.getElementById("mainContent");

openButton.addEventListener("click", () => {

  /* UNLOCK SCROLL */

  document.body.style.overflowY = "auto";

  document.body.style.height = "auto";

  /* PLAY MUSIC */

  if (music) {

    music.play();

    isPlaying = true;

  }

  /* OPENING ANIMATION */

  gsap.to(".content", {

    opacity: 0,

    y: -50,

    duration: 1,

  });

  gsap.to(".opening", {

    scale: 1.1,

    opacity: 0,

    duration: 1.8,

    delay: 0.3,

  });

  /* SHOW MAIN CONTENT */

  gsap.to("#mainContent", {

    opacity: 1,

    y: 0,

    duration: 1.5,

    delay: 1,

  });

});

/* =========================
   MUSIC TOGGLE
========================= */

musicToggle.addEventListener("click", () => {


  
  if (isPlaying) {

    music.pause();

    musicToggle.innerHTML = "♫";

  } else {

    music.play();

    musicToggle.innerHTML = "♪";

  }

  isPlaying = !isPlaying;

});

/* =========================
   COUNTDOWN
========================= */

const targetDate =
  new Date("June 5, 2026 06:30:00").getTime();

const countdown = setInterval(() => {

  const now = new Date().getTime();

  const distance = targetDate - now;

  const days = Math.floor(
    distance / (1000 * 60 * 60 * 24)
  );

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24))
    / (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (distance % (1000 * 60 * 60))
    / (1000 * 60)
  );

  const seconds = Math.floor(
    (distance % (1000 * 60))
    / 1000
  );

  document.getElementById("days").innerHTML = days;

  document.getElementById("hours").innerHTML = hours;

  document.getElementById("minutes").innerHTML = minutes;

  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {

    clearInterval(countdown);

  }

}, 1000);

/* =========================
   TIMELINE ANIMATION
========================= */

const timelineItems =
  document.querySelectorAll(".timeline-item");

timelineItems.forEach((item, index) => {

  gsap.from(item, {

    scrollTrigger: {
      trigger: item,
      start: "top 85%",
    },

    y: 100,

    opacity: 0,

    duration: 1.4,

    delay: index * 0.15,

    ease: "power4.out",

  });

});

/* =========================
   PARTICLES
========================= */

const particlesContainer =
  document.querySelector(".particles");

for (let i = 0; i < 40; i++) {

  const particle =
    document.createElement("div");

  particle.classList.add("particle");

  particle.style.left =
    Math.random() * 100 + "vw";

  particle.style.animationDuration =
    5 + Math.random() * 10 + "s";

  particle.style.animationDelay =
    Math.random() * 5 + "s";

  particle.style.opacity =
    Math.random();

  particle.style.width =
    particle.style.height =
    Math.random() * 4 + 2 + "px";

  particlesContainer.appendChild(particle);

}

/* =========================
   EVENT ANIMATION
========================= */

gsap.from(".event-card", {

  scrollTrigger: ".event-section",

  y: 100,

  opacity: 0,

  duration: 1.2,

  stagger: 0.2,

  ease: "power3.out",

});

/* =========================
   GALLERY ANIMATION
========================= */

gsap.from(".gallery-item", {

  scrollTrigger: {
    trigger: ".gallery-section",
    start: "top 80%",
  },

  y: 100,

  opacity: 0,

  duration: 1.2,

  stagger: 0.2,

  ease: "power3.out",

});

/* =========================
   COPY GIFT
========================= */

function copyGift() {

  const text =
    document.getElementById("giftNumber").innerText;

  navigator.clipboard.writeText(text);

  alert("Account number copied ✨");

}

/* =========================
   LIGHTBOX GALLERY
========================= */

const galleryItems =
  document.querySelectorAll(".gallery-item img");

const lightbox =
  document.getElementById("lightbox");

const lightboxImage =
  document.getElementById("lightboxImage");

const lightboxClose =
  document.getElementById("lightboxClose");

galleryItems.forEach((item) => {

  item.addEventListener("click", () => {

    lightbox.classList.add("active");

    lightboxImage.src = item.src;

  });

});

lightboxClose.addEventListener("click", () => {

  lightbox.classList.remove("active");

});

lightbox.addEventListener("click", (e) => {

  if (e.target === lightbox) {

    lightbox.classList.remove("active");

  }

});