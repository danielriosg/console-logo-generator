// shapes.js

class Shape {
  constructor(color) {
    this.color = color;
  }
  setColor(color) {
    this.color = color;
  }
  getSVG() {
    // Abstract method to be overridden by subclasses
    throw new Error("Subclasses must implement the getSVG() method.");
  }
}

class Circle extends Shape {
  constructor(color) {
    super(color);
  }

  getSVG() {
    return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  constructor(color) {
    super(color);
  }

  getSVG() {
    return `<polygon points="150,50 100,150 200,150" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  constructor(color) {
    super(color);
  }

  getSVG() {
    return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`;
  }
}

module.exports = { Circle, Triangle, Square };
