class Calculator {
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    return a % b;
  }
}

class ScientificCalculator extends Calculator {
  square(a) {
    return a * a;
  }
  cube(a) {
    return a * a * a;
  }
  power(a, b) {
    return b ** a;
  }
}
const calcy = new ScientificCalculator();

console.log(calcy.add.call(calcy, 10, 5));
console.log(calcy.subtract.apply(calcy, [10, 5]));
const multiplyByTwo = calcy.multiply.bind(calcy, 2);
console.log(multiplyByTwo(5));
const powerOfThree = calcy.power.bind(calcy, 3);
console.log(powerOfThree(2));

