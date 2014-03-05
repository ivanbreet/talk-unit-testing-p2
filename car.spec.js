describe("Car", function() {
  var car;
  beforeEach(function() {
    car = new Car();
  });

  it("should set defaults variables", function() {
    expect(car.getWheels()).toEqual(4);
    expect(car.spare).toBe(false);
  });

  it("should set wheels correctly", function() {
    car.setWheels(2);

    expect(car.getWheels()).toEqual(2);
  });

  it("should count a spare as a wheel", function() {
    car.addSpare();

    expect(car.getWheels()).toEqual(5);
  });
});
