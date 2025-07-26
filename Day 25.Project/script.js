document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(CustomEase);
  CustomEase.create(
    "hop",
    "M0,0 C0.29,0 0.348,0.05 0.422,0.134 0.494,0.217 0.484,0.355 0.5,0.5 0.518,0.662 0.515,0.793 0.596,0.876 0.701,0.983 0.72,0.987 1,1 "
  );

  function splitTextIntoSpans(selector) {
    let elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      let text = element.innerText;
      let splitText = text
        .split("")
        .map(function (char) {
          return `<span>${char === " " ? "&nbsp;&nbsp;" : char}</span>`;
        })
        .join("");
      element.innerHTML = splitText;
    });
  }
  splitTextIntoSpans(".header h1");

  function animateCounter() {
    const counterElement = document.querySelector(".counter p");
    let currentValue = 0;
    const updateInterval = 300;
    const maxDuration = 2000;
    const endValue = 100;
    const startTime = Date.now();

    const updateCounter = () => {
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime < maxDuration) {
        currentValue = Math.min(
          currentValue + Math.floor(Math.random() * 30) + 5,
          endValue
        );
        counterElement.textContent = currentValue;
        setTimeout(updateCounter, updateInterval);
      } else {
        counterElement.textContent = endValue;
        setTimeout(() => {
          gsap.to(counterElement, {
            y: -20,
            duration: 1,
            ease: "power3.inOut",
            onStart: () => {
              revealLandingPage();
            },
          });
        }, -500);
      }
    };

    updateCounter();
  }

  gsap.to(".counter p", {
    y: 0,
    duration: 1,
    ease: "power3.out",
    delay: 1,
    onComplete: () => {
      animateCounter();
    },
  });

  const revealLandingPage = () => {
    gsap.to(".hero", {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      duration: 2,
      ease: "hop",
      onStart: () => {
        gsap.to(".hero", {
          transform: "translate(-50%, -50%) scale(1)",
          duration: 2.25,
          ease: "power3.inOut",
          delay: 0.25,
        });

        gsap.to(".overlay", {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 2,
          delay: 0.5,
          ease: "hop",
        });

        gsap.to(".hero-img img", {
          transform: "scale(1)",
          duration: 2.25,
          ease: "power3.inOut",
          delay: 0.25,
        });

        gsap.to(".header h1 span", {
          y: 0,
          stagger: 0.1,
          duration: 2,
          ease: "power4.inOut",
          delay: 0.75,
        });
      },
    });
  };
});
