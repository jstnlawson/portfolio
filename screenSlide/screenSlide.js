document.addEventListener("DOMContentLoaded", function () {
  const screensContainer = document.querySelector(".screens-container");
  const titlesContainer = document.querySelector(".titles-container");

  // Expose currentIndex to the global scope
  window.currentIndex = 0;

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
