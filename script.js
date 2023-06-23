// Only display class
const display = document.querySelector(".display");

// All buttons
const buttons = document.querySelectorAll(".btn");

// Add click event listeners to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.getAttribute("data-num");

    if (buttonValue === "A/C") {
      // Whhen clicked clear display
      display.value = " ";
    } else if (buttonValue === "=") {
      // Testing if display value can be calculated
      try {
        display.value = eval(display.value);
      } catch (err) {
        // If it cannot show connect the error message to display
        display.value = "Syntax ERROR";
      }
    }
    // If no error append the button value to the display
    else {
      display.value += buttonValue;
    }
  });
});
