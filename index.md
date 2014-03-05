title: Basic Example
author:
  name: Ivan Breet
  twitter: ivanbreet
  url: http://www.ivanbreet.com
output: index.html
theme: sudodoki/reveal-cleaver-theme

--

# Unit Testing
## Part 2 of the getting your code tested.
By [Ivan Breet](http://www.ivanbreet.com) [@ivanbreet](https://www.twitter.com/ivanbreet)

--

### The Joke

Chuck Norris doesn't test code. Chuck Norris' code tests itself.

--

### Unit test structure

1. The **Setup**
2. The **Action**
3. The **Check**

--

### Basic JavaScript function

```javascript
// Check car wheels.
function getWheels(car) {
  return car.wheels;
};
```

--

### Oversimplified testing example

```javascript
// .. following previous function

// The Setup
var car = {};

// The Action
car.wheels = 4;

// The Check
if (getWheels(car) === 4) {
  console.log("Test passed!")
} else {
  console.log("Test failed!");
}
```

--

### What if we have different vehicles?

```javascript
// .. following previous function

// The Setup
var motorcycle = {};

// The Action
motorcycle.wheels = 2;

// The Check
if (getWheels(motorcycle) === 2) {
  console.log("Test passed!")
} else {
  console.log("Test failed!");
}
```
--

## What is a testing frameworks?

Opinionated structure for tests.

- [Jasmine](http://jasmine.github.io/2.0/introduction.html) (JavaScript)
- [Mocha](http://visionmedia.github.io/mocha/) (JavaScript)
- [QUnit](https://qunitjs.com/) (JavaScript)
- [PHPUnit](http://phpunit.de/) (PHP)
- etc.

--

### What are test runners then?
Tools like [Karma](http://karma-runner.github.io/0.10/index.html) & [Testem](https://github.com/airportyh/testem)

* Runs tests for multiple browsers and/or devices.
* Remote workflow
* Continues integration

--

### Unit test workflow

1. Write a basic test
2. Write code that passes
3. Expand test for maximum coverage by initially failing tests
5. Fix failed tests

--

### 1. Write a basic test (Jasmine)

```javascript
// car.spec.js

describe("Car", function() {
  var car;
  beforeEach(function() {
    car = new Car();
  });

  it("should set defaults variables", function() {
    expect(car.getWheels()).toEqual(4);
  });

  it("should set wheels correctly", function() {
    car.setWheels(2);

    expect(car.getWheels()).toEqual(2);
  });
});
```
--

### 2. Write code that passes

```javascript
// car.js

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

```
--

### 3. Expand test for maximum coverage by initially failing tests

```javascript
describe("Car", function() {
  var car;
  beforeEach(function() {
    car = new Car();
  });

  it("should set defaults variables", function() {
    expect(car.getWheels()).toEqual(4);
    expect(car.spare).toBe(true);
  });

  it("should set wheels correctly", function() {
    // ..
  });
});
```

--

### 4. Fix failed tests

```javascript
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
    // ..
  });
});
```

--

### The curve-ball
Making spares count as a wheel.

```javascript
describe("Car", function() {
  var car;
  beforeEach(function() {
    car = new Car();
  });

  it("should set defaults variables", function() {
    // ..
  });

  it("should set wheels correctly", function() {
    // ..
  });

  it("should count a spare as a wheel", function() {
    car.addSpare();

    expect(car.getWheels()).toEqual(5);
  });
});

```

--

### The home run

```javascript
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
```
