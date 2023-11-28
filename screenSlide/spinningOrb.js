document.addEventListener("DOMContentLoaded", function () {
  // Define an array of color sets
  const colorSets = [
    {
      before: [
        { color: "rgba(128, 128, 128, 0)", position: "55%" },
        { color: "rgba(128, 128, 128, 0.8)", position: "55.2%" },
        { color: "rgba(128, 128, 128, 0.8)", position: "60%" },
        { color: "rgba(128, 128, 128, 0)", position: "60.2%" },
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
        { color: "rgba(255, 255, 255, 0)", position: "55%" },
        { color: "rgba(255, 255, 255, 0.8)", position: "55.2%" },
        { color: "rgba(255, 255, 255, 0.8)", position: "60%" },
        { color: "rgba(255, 255, 255, 0)", position: "60.2%" },
      ],
      after: [
        { color: "rgba(221, 165, 173, 0)", position: "55%" },
        { color: "rgba(221, 165, 173, 0.8)", position: "55.2%" },
        { color: "rgba(221, 165, 173, 0.8)", position: "60%" },
        { color: "rgba(221, 165, 173, 0)", position: "60.2%" },
      ],
    },
    {
      before: [
        { color: "rgba(51, 75, 92, 0)", position: "55%" },
        { color: "rgba(51, 75, 92, 0.8)", position: "55.2%" },
        { color: "rgba(51, 75, 92, 0.8)", position: "60%" },
        { color: "rgba(51, 75, 92, 0)", position: "60.2%" },
      ],
      after: [
        { color: "rgba(229, 145, 99, 0)", position: "55%" },
        { color: "rgba(229, 145, 99, 0.8)", position: "55.2%" },
        { color: "rgba(229, 145, 99, 0.8)", position: "60%" },
        { color: "rgba(229, 145, 99, 0)", position: "60.2%" },
      ],
    },
    {
      before: [
        { color: "rgba(255, 255, 255, 0)", position: "55%" },
        { color: "rgba(255, 255, 255, 0.8)", position: "55.2%" },
        { color: "rgba(255, 255, 255, 0.8)", position: "60%" },
        { color: "rgba(255, 255, 255, 0)", position: "60.2%" },
      ],
      after: [
        { color: "rgba(206, 111, 89, 0)", position: "55%" },
        { color: "rgba(206, 111, 89, 0.8)", position: "55.2%" },
        { color: "rgba(206, 111, 89, 0.8)", position: "60%" },
        { color: "rgba(206, 111, 89, 0)", position: "60.2%" },
      ],
    },
  ];

  // Initialize the current color set index
  let currentColorSetIndex = 0;

  function changeOrbColors() {
    console.log("Changing orb colors");
    // Get the current color set
    const currentColorSet = colorSets[currentColorSetIndex];

    // Update the colors of the ::before and ::after pseudo-elements using the current color set
    const hypnotic = document.getElementById("hypnotic");

    // Update the ::before colors
    hypnotic.style.setProperty(
      "--before-colors",
      currentColorSet.before
        .map((color) => `${color.color} ${color.position}`)
        .join(", ")
    );

    // Update the ::after colors
    hypnotic.style.setProperty(
      "--after-colors",
      currentColorSet.after
        .map((color) => `${color.color} ${color.position}`)
        .join(", ")
    );

    // Increment the color set index or reset to 0 if it exceeds the array length
    currentColorSetIndex = (currentColorSetIndex + 1) % colorSets.length;
  }

  // Call the function to initially set the colors
  changeOrbColors();

  // Log specific styles after color change
  console.log("Width:", window.getComputedStyle(hypnotic).width);
  console.log("Height:", window.getComputedStyle(hypnotic).height);
  console.log(
    "Background Color:",
    window.getComputedStyle(hypnotic).backgroundColor
  );
  console.log("Border Radius:", window.getComputedStyle(hypnotic).borderRadius);
  console.log(
    "Before Colors:",
    window.getComputedStyle(hypnotic).getPropertyValue("--before-colors")
  );
  console.log(
    "After Colors:",
    window.getComputedStyle(hypnotic).getPropertyValue("--after-colors")
  );

  function cycleColors(direction) {
    console.log("Cycling colors");
    if (direction === "next") {
      currentColorSetIndex = (currentColorSetIndex + 1) % colorSets.length;
    } else if (direction === "previous") {
      currentColorSetIndex =
        (currentColorSetIndex - 1 + colorSets.length) % colorSets.length;
    }

    // Call the function to update the colors
    changeOrbColors();
  }

  // After calling changeOrbColors

  // Call the function with your desired colors
  window.changeOrbColors = changeOrbColors;
  window.cycleColors = cycleColors;
});
