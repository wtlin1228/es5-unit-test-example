var Demo = require("../demo");

test("set/get value successfully", () => {
  // Arrange
  var demo = new Demo();

  // Act
  demo.setValue("foo", "bar");

  // Assert
  expect(demo.getValue("foo")).toBe("bar");
});

test("private function", () => {
  // Arrange
  var demo = new Demo();

  // Act

  // Assert
  expect(demo.__testOnly__.echo(1)).toBe(1);
});
