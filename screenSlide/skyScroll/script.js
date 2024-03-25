document.addEventListener("DOMContentLoaded", function () {
  console.log("screenSlide/skyScroll/script.js");

  // Smooth scroll function to customize speed and easing
function smoothScrollTo(targetY, duration) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  let startTime = null;

  function scrollAnimation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const nextY = easeFunction(timeElapsed, startY, distance, duration);

    window.scrollTo(0, nextY);

    if (timeElapsed < duration) {
      requestAnimationFrame(scrollAnimation);
    } else {
      window.scrollTo(0, targetY);
    }
  }

  requestAnimationFrame(scrollAnimation);
}

// Ease function - can be adjusted to change scroll behavior
function easeFunction(t, b, c, d) {
  t /= d/2;
  if (t < 1) return c/2*t*t + b;
  t--;
  return -c/2 * (t*(t-2) - 1) + b;
}

  const storyOne = document.querySelector(".sky__section-one");
  const storyOneBtn = document.querySelector(".story__part-one--btn");
  const storyTwo = document.querySelector(".sky__section-three");
  const storyTwoBtn = document.querySelector(".story__part-two--btn");

  storyOneBtn.addEventListener("click", () => {
    smoothScrollTo(storyTwo.offsetTop, 2500);
  });

  storyTwoBtn.addEventListener("click", () => {
    smoothScrollTo(storyOne.offsetTop, 2500);
  });



  function createStars() {

    const space = document.querySelector(".space");

    // Function to create a star
    function createStar(type, amount) {
      for (let i = 0; i < amount; i++) {
        const star = document.createElement("div");
        star.className = `star ${type}`;

        // Generate random positions within the specified ranges
        const top = Math.random() * (135 - 55) + 55; // top: 55% to 135%
        const left = Math.random() * (99 - 0) + 0; // left: 0% to 99%

        // Apply the positions
        star.style.top = `${top}%`;
        star.style.left = `${left}%`;

        space.appendChild(star);
      }
    }

    // Create the stars
    createStar("star-one", 1000); //  transparent 1px stars
    createStar("star-two", 100); //  1/2 transparent 1px stars
    createStar("star-three", 75); // 1px stars
    createStar("star-four", 50); // 1px with box shadow
    createStar("star-five", 25); // 2px stars
  }

  // Run the function to populate the stars
  createStars();

  const bird = document.querySelectorAll(".bird");
  const cloudOne = document.querySelectorAll(".cloud-one__container");

  // Function to calculate and apply the transform for each element
  const applyTransform = (elements, directionMultiplier) => {
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how far this element is from the center of the viewport
      const centerDistance = rect.top + rect.height / 2 - windowHeight / 2;

      // Apply the transformation, adjust multiplier to control the effect's strength
      const transformValue = centerDistance * 0.5 * directionMultiplier;

      // element.style.transform = `translateX(${transformValue}px)`;
      // Check if the current element has the 'bird' class
      if (element.classList.contains("bird")) {
        // Apply a specific transformation for 'bird' elements
        element.style.transform = `translateX(${transformValue}px) scale(0.3)`;
      } else {
        // Apply only the translation for other elements
        element.style.transform = `translateX(${transformValue}px)`;
      }
    });
  };

  let scrollInProgress = false;

  // Listen for scroll events and apply transformations
  const handleScroll = () => {
    if (!scrollInProgress) {
      requestAnimationFrame(() => {
        applyTransform(bird, -6);
        applyTransform(cloudOne, 4);
        scrollInProgress = false;
      });
    }
    scrollInProgress = true;
  };

 

 const spaceShipAnimation = () => {
  const spaceShip = document.querySelector(".space-ship");
  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        spaceShip.style.transform = "scale(0)";
        spaceShip.style.transition = "transform 0s";
        setTimeout(() => {
        
        spaceShip.style.transition = "transform 10s ease";
        spaceShip.style.transform = "scale(0.8)";
        spaceShip.classList.remove("hidden-ship");

      }, 100);
        observer.unobserve(entry.target);
      }
    });
 }, { threshold: 0.5 });
  observer.observe(spaceShip);
};

  // Attach the scroll event listener
  window.addEventListener("scroll", handleScroll);
  spaceShipAnimation();
});
