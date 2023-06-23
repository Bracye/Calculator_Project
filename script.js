// Only display class
const display = document.querySelector(".display");

// All buttons
const buttons = document.querySelectorAll(".btn");

// Add click event listeners to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Grabs the attribute "data-num" from the buttons
    const buttonValue = button.getAttribute("data-num");

    // When clicked the button "A/C" will clear display
    if (buttonValue === "A/C") {
      display.value = " ";
    }
    // When the "=" button is clicked it will perform the try and catch
    else if (buttonValue === "=") {
      // Testing if display value can be calculated
      try {
        display.value = eval(display.value);
      } catch (err) {
        // If the eval func doesn't work with the expression show the error message to display
        display.value = "Syntax ERROR";
      }
    }
    // If no error append the button value to the display
    else {
      display.value += buttonValue;
    }
  });
});
