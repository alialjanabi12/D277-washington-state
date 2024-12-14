// |> Sticky NavBar & To-top button
function userScroll() {
  const navbar = document.querySelector(".navbar");
  const toTopBtn = document.querySelector("#to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-sticky");
      toTopBtn.classList.add("show");
    } else {
      navbar.classList.remove("navbar-sticky");
      toTopBtn.classList.remove("show");
    }
  });
}

// |> Scroll To Top Button
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// |> Moving text
function runTypingEffect() {
  const text = "Washington State.";
  const typingElement = document.getElementById("typing-text");
  const typingDelay = 100; // 100 milliseconds

  typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingElement.textContent += text.charAt(i);
    }, delay * i);
  }
}

// |> STATS on loading page
function incrementsStats() {
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    counter.innerText = 0;

    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const c = +counter.innerText;

      const increment = target / 50;

      if (c < target) {
        counter.innerText = Math.ceil(c + increment);
        setTimeout(updateCounter, 1);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
}

//|> Replace Text in header
const checkReplace = document.querySelector(".replace-me");

if (checkReplace !== null) {
  const replace = new ReplaceMe(checkReplace, {
    animation: "animated fadeIn",
    speed: 1500,
    separator: ",",
    loopCount: "infinite",
    autoRun: true,
  });
}

//|> INFORMATION SOURCE
document.addEventListener("DOMContentLoaded", function () {
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl, {
      html: true,
      trigger: "click",
    });
  });

  runTypingEffect();
  incrementsStats();
  userScroll();
});

// |> CHECK EMAIL
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var confirmEmail = document.getElementById("confirmEmail").value;

    if (email !== confirmEmail) {
      alert("The email addresses don't match. Please try again.");
    } else {
      alert("Form submitted successfully!");
    }
  });

document.querySelector("#to-top").addEventListener("click", scrollToTop);
