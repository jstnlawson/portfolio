

document.addEventListener("DOMContentLoaded", function () {
  const screensContainer = document.querySelector(".screens-container");
  const titlesContainer = document.querySelector(".titles-container");

  let currentIndex = 0;

  function showNextScreen() {
    if (currentIndex < screensContainer.children.length - 1) {
      currentIndex++;
      updateScreens();
      cycleColors('next');
    }
  }

  function showPreviousScreen() {
    if (currentIndex > 0) {
      currentIndex--;
      updateScreens();
      cycleColors('next');
    }
  }

  function updateScreens() {
    screensContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    titlesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  window.showNextScreen = showNextScreen;
  window.showPreviousScreen = showPreviousScreen;
});
