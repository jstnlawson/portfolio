document.addEventListener("DOMContentLoaded", function () {
  const screensContainer = document.querySelector(".screens-container");
  const titlesContainer = document.querySelector(".titles-container");
  const hypnotic = document.getElementById("hypnotic");

  window.currentIndex = window.currentIndex || 0;
  window.currentColorSetIndex = window.currentColorSetIndex || 0;

  const colorSets = [
    {
      before: [
        // { color: "rgba(128, 128, 128, 0)", position: "55%" },
        // { color: "rgba(128, 128, 128, 0.8)", position: "55.2%" },
        // { color: "rgba(128, 128, 128, 0.8)", position: "60%" },
        // { color: "rgba(128, 128, 128, 0)", position: "60.2%" },
        { color: "rgba(255, 255, 255, 0)", position: "55%" },
        { color: "rgba(255, 255, 255, 0.5)", position: "55.2%" },
        { color: "rgba(255, 255, 255, 0.5)", position: "60%" },
        { color: "rgba(255, 255, 255, 0)", position: "60.2%" },
      ],
      after: [
        { color: "rgba(255, 255, 255, 0)", position: "55%" },
        { color: "rgba(255, 255, 255, 0.8)", position: "55.2%" },
        { color: "rgba(255, 255, 255, 0.8)", position: "60%" },
        { color: "rgba(255, 255, 255, 0)", position: "60.2%" },
      ],
    },
    {
      before: [
        { color: "rgba(222, 166, 174, 0)", position: "55%" },
        { color: "rgba(222, 166, 174, 0.9)", position: "55.2%" },
        { color: "rgba(222, 166, 174, 0.9)", position: "60%" },
        { color: "rgba(222, 166, 174, 0)", position: "60.2%" },
        // { color: "rgba(255, 255, 255, 0)", position: "55%" },
        // { color: "rgba(255, 255, 255, 0.8)", position: "55.2%" },
        // { color: "rgba(255, 255, 255, 0.8)", position: "60%" },
        // { color: "rgba(255, 255, 255, 0)", position: "60.2%" },
      ],
      after: [
        { color: "rgba(222, 166, 174, 0)", position: "55%" },
        { color: "rgba(222, 166, 174, 0.9)", position: "55.2%" },
        { color: "rgba(255, 255, 255, 0.6)", position: "60%" },
        { color: "rgba(222, 166, 174, 0)", position: "60.2%" },
      ],
    },
    {
      before: [
        { color: "rgba(51, 75, 92, 0)", position: "55%" },
        { color: "rgba(51, 75, 92, 0.8)", position: "55.2%" },
        { color: "rgba(51, 75, 92, 0.8)", position: "60%" },
        { color: "rgba(51, 75, 92, 0)", position: "60.2%" },
        // { color: "rgba(229, 145, 99, 0)", position: "55%" },
        // { color: "rgba(229, 145, 99, 0.8)", position: "55.2%" },
        // { color: "rgba(229, 145, 99, 0.8)", position: "60%" },
        // { color: "rgba(229, 145, 99, 0)", position: "60.2%" },
      ],
      after: [
        { color: "rgba(51, 75, 92, 0)", position: "55%" },
        { color: "rgba(51, 75, 92, 0.8)", position: "55.2%" },
        { color: "rgba(51, 75, 92, 0.8)", position: "60%" },
        { color: "rgba(51, 75, 92, 0)", position: "60.2%" },
      ],
    },
    {
      before: [
        { color: "rgba(206, 111, 89, 0)", position: "55%" },
        { color: "rgba(206, 111, 89, 0.8)", position: "55.2%" },
        { color: "rgba(206, 111, 89, 0.8)", position: "60%" },
        { color: "rgba(206, 111, 89, 0)", position: "60.2%" },
        // { color: "rgba(255, 255, 255, 0)", position: "55%" },
        // { color: "rgba(255, 255, 255, 0.8)", position: "55.2%" },
        // { color: "rgba(255, 255, 255, 0.8)", position: "60%" },
        // { color: "rgba(255, 255, 255, 0)", position: "60.2%" },
      ],
      after: [
        { color: "rgba(206, 111, 89, 0)", position: "55%" },
        { color: "rgba(206, 111, 89, 0.8)", position: "55.2%" },
        { color: "rgba(206, 111, 89, 0.8)", position: "60%" },
        { color: "rgba(206, 111, 89, 0)", position: "60.2%" },
      ],
    },
  ];

  function nextScreen() {
    if (window.currentIndex < screensContainer.children.length - 1) {
      window.currentIndex++;
      window.currentColorSetIndex =
        (window.currentColorSetIndex + 1) % colorSets.length;
    }
    updateScreens();
  }

  function previousScreen() {
    if (window.currentIndex > 0) {
      window.currentIndex--;
      window.currentColorSetIndex =
        (window.currentColorSetIndex - 1 + colorSets.length) % colorSets.length;
    }
    updateScreens();
  }

  function updateScreens() {
    const titles = document.querySelectorAll(".title");

    // Remove animation classes from all titles and elements within them
    titles.forEach((title) => {
      title.classList.remove("active");
      title
        .querySelectorAll(".tech-stack, .project-title, .project-description")
        .forEach((element) => {
          element.style.opacity = 0;
          element.style.transform = "scale(0.3) translateY(-8px)";
        });
    });

    // Add animation classes to the active title and elements within it
    const activeTitle = titles[window.currentIndex];
    setTimeout(() => {
      activeTitle.classList.add("active");

      // Set transition properties for elements outside the loop
      activeTitle
        .querySelectorAll(".tech-stack, .project-title, .project-description")
        .forEach((element) => {
          element.style.transition =
            "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
          element.style.opacity = 1;
          element.style.transform = "scale(1) translateY(0)";
        });
    }, 1000); // Adjust the delay as needed
    screensContainer.style.transform = `translateX(-${
      window.currentIndex * 100
    }%)`;
    titlesContainer.style.transform = `translateX(-${
      window.currentIndex * 100
    }%)`;
    changeOrbColors();
  }

  function changeOrbColors() {
    const currentColorSet = colorSets[window.currentColorSetIndex];

    hypnotic.style.setProperty(
      "--before-colors",
      currentColorSet.before
        .map((color) => `${color.color} ${color.position}`)
        .join(", ")
    );

    hypnotic.style.setProperty(
      "--after-colors",
      currentColorSet.after
        .map((color) => `${color.color} ${color.position}`)
        .join(", ")
    );
  }

  changeOrbColors();

  window.nextScreen = nextScreen;
  window.previousScreen = previousScreen;
});
