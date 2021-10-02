//SOLID S-> SINGLE RESPONSIBILITY PRINCIPLE
// 1 class 1 responsibility

//OPEN CLOSE PRINCIPLE

/**
 * THIS IS VEEEERY BAD
 */
class square {
  constructor(size) {
    this.size = size
    this.type = 'square'
  }
}
class circle {
  constructor(radius) {
    this.radius = radius
    this.type = 'circle'
  }
}

class areaCalculator {
  constructor(shapes = []) {
    this.shapes = shapes
  }
  sum() {
    return this.shapes.reduce((acc, shape) => {
      if (shape.type === 'circle') {
        acc += shape.radius ** 2 * Math.PI
      } else if (shape.type === 'square') {
        acc += shape.size ** 2
      }
      return acc
    }, 0)
  }
}
const calc = new areaCalculator([new square(3), new circle(4)])
calc.sum()

/**
 * THIS IS GOOOD
 */

class Shape {
  area() {
    throw new Error('Area method should be implemented')
  }
}

class Square extends Shape {
  constructor(size) {
    super()
  }
}
