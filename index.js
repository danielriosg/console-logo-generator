const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shapes"); // 

// Function to prompt the user for input
function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters for the logo:",
      validate: function (input) {
        return input.length > 0 && input.length <= 3
          ? true
          : "Please enter 1 to 3 characters.";
      },
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter text color (color keyword or hexadecimal number):",
    },
    {
      type: "list",
      name: "shape",
      message: "Select a shape:",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter shape color (color keyword or hexadecimal number):",
    },
  ]);
}

// Function to generate the SVG based on user input
function generateSVG(userInput) {
  let shape;
  switch (userInput.shape) {
    case "circle":
      shape = new Circle(userInput.shapeColor);
      break;
    case "triangle":
      shape = new Triangle(userInput.shapeColor);
      break;
    case "square":
      shape = new Square(userInput.shapeColor);
      break;
    default:
      throw new Error("Invalid shape selection");
  }

  const svg = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shape.getSVG()}
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${
        userInput.textColor
      }">
        ${userInput.text}
      </text>
    </svg>
  `;

  return svg;
}

// Main function to run the application
async function run() {
  try {
    const userInput = await promptUser();
    const svg = generateSVG(userInput);
    fs.writeFileSync("logo.svg", svg);
    console.log("Generated logo.svg");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// Run the application
run();
