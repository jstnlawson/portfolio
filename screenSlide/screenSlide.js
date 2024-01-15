document.addEventListener("DOMContentLoaded", function () {
  const screensContainer = document.querySelector(".screens-container");
  const titlesContainer = document.querySelector(".titles-container");
  const button = document.querySelector("button");

  // Expose currentIndex to the global scope
  window.currentIndex = 0;

  button.addEventListener("click", function () {
    button.classList.add("active");
  
    // Remove the active class after a delay (e.g., 1 second)
    setTimeout(function () {
      button.classList.remove("active");
    }, 1000); // 1000 milliseconds = 1 second
  });

  function updateScreens(direction) {
    if (direction === "next" && currentIndex < screensContainer.children.length - 1) {
      currentIndex++;
    } else if (direction === "previous" && currentIndex > 0) {
      currentIndex--;
    }

    screensContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    titlesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Call the function from the colorLogic.js file to update colors
    window.changeOrbColors();
  }

  // Expose the function to the global scope
  window.updateScreens = updateScreens;
});

