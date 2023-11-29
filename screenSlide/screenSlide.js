

// document.addEventListener("DOMContentLoaded", function () {
//   const screensContainer = document.querySelector(".screens-container");
//   const titlesContainer = document.querySelector(".titles-container");

//   let currentIndex = 0;

//   function showNextScreen() {
//     if (currentIndex < screensContainer.children.length - 1) {
//       currentIndex++;
//       updateScreens();
     
//     }
//   }

//   function showPreviousScreen() {
//     if (currentIndex > 0) {
//       currentIndex--;
//       updateScreens();
      
//     }
//   }

//   function updateScreens() {
//     screensContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
//     titlesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
//     changeOrbColors();
//   }

//   window.showNextScreen = showNextScreen;
//   window.showPreviousScreen = showPreviousScreen;
// });

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
