var Car = function() {
  this.wheels = 4;
  this.spare = false;
};

Car.prototype.getWheels = function() {
  if (this.spare) {
    return this.wheels + 1;
  }
  return this.wheels;
};

Car.prototype.setWheels = function(wheels) {
  this.wheels = wheels;
};

Car.prototype.addSpare = function() {
  this.spare = true;
};
