const { Circle, Triangle, Square } = require("./shapes");

test("Circle render method should return correct SVG string", () => {
  const shape = new Circle();
  shape.setColor("blue");
  expect(shape.getSVG()).toEqual(
    '<circle cx="150" cy="100" r="50" fill="blue" />'
  );
});

test("Triangle render method should return correct SVG string", () => {
  const shape = new Triangle();
  shape.setColor("blue");
  expect(shape.getSVG()).toEqual(
    '<polygon points="150,50 100,150 200,150" fill="blue" />'
  );
});

test("Square render method should return correct SVG string", () => {
  const shape = new Square();
  shape.setColor("blue");
  expect(shape.getSVG()).toEqual(
    '<rect x="100" y="50" width="100" height="100" fill="blue" />'
  );
});
