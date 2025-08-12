document.addEventListener("DOMContentLoaded", () => {
  const counter = document.querySelector(".counter");
  const loader = document.querySelector(".loader");
  const elementsToAnimate = document.querySelectorAll(
    "p:not(.intro), .logo h1"
  );
  const introTag = document.querySelector(".intro");
  let animationsInitialized = false;

  function shuffleText(finalText, duration, callback) {
    let i = 0;
    const shuffleInterval = setInterval(() => {
      if (i < duration) {
        counter.innerHTML = Math.random().toString(36).substring(2, 8);
        i++;
      } else {
        clearInterval(shuffleInterval);
        counter.innerHTML = finalText;
        if (callback) callback();
      }
    }, 100);
  }

  function removeLetters() {
    let text = counter.innerHTML;
    const removeInterval = setInterval(() => {
      if (text.length > 0) {
        text = text.substring(0, text.length - 1);
        counter.innerHTML = text;
      } else {
        clearInterval(removeInterval);
        if (!animationsInitialized) {
          animateElements();
          animateIntroTag();
        }
        fadeOutLoader();
      }
    }, 100);
  }

  function animateElements() {
    if (animationsInitialized) return;
    animationsInitialized = true;

    elementsToAnimate.forEach((element) => {
      let originalText = element.textContent;
      let index = 0;

      const shuffleElement = setInterval(() => {
        if (index < originalText.length) {
          let shuffledText = "";
          for (let i = 0; i <= index; i++) {
            shuffledText +=
              i < index ? originalText[i] : Math.random().toString(36)[2];
          }
          element.textContent =
            shuffledText + originalText.substring(index + 1);
          index++;
        } else {
          clearInterval(shuffleElement);
          element.textContent = originalText;
        }
      }, 100);
    });
  }

  function animateIntroTag() {
    let originalText = introTag.textContent;
    let currentText = "";
    let index = 0;

    const revealText = setInterval(() => {
      if (index < originalText.length) {
        currentText += originalText[index];
        introTag.textContent = currentText;
        index++;
      } else {
        clearInterval(revealText);
      }
    }, 25);
  }

  function animateMasks() {
    const masks = document.querySelectorAll(".hero-img .mask");
    const clipPathValues = [
      "polygon(10% 0, 0 0, 0 100%, 10% 100%)",
      "polygon(20% 0, 10% 0, 10% 100%, 20% 100%)",
      "polygon(30% 0, 20% 0, 20% 100%, 30% 100%)",
      "polygon(40% 0, 30% 0, 30% 100%, 40% 100%)",
      "polygon(50% 0, 40% 0, 40% 100%, 50% 100%)",
      "polygon(60% 0, 50% 0, 50% 100%, 60% 100%)",
      "polygon(70% 0, 60% 0, 60% 100%, 70% 100%)",
      "polygon(80% 0, 70% 0, 70% 100%, 80% 100%)",
      "polygon(90% 0, 80% 0, 80% 100%, 90% 100%)",
      "polygon(100% 0, 90% 0, 90% 100%, 100% 100%)",
    ];

    setTimeout(() => {
      masks.forEach((mask, index) => {
        gsap.to(mask, {
          clipPath: clipPathValues[index % clipPathValues.length],
          duration: 1,
          delay: index * 0.1,
        });
      });
    });
  }

  gsap.to(counter, {
    innerHTML: 100 + "%",
    duration: 3,
    snap: "innerHTML",
    ease: "none",
    onComplete: () => {
      setTimeout(
        () =>
          shuffleText("MCLN/23", 20, () => {
            setTimeout(removeLetters, 500);
          }),
        500
      );
    },
  });

  function fadeOutLoader() {
    gsap.to(loader, {
      opacity: 0,
      pointerEvents: "none",
      duration: 1,
      onComplete: () => {
        animateMasks();
      },
    });
  }
});
