class Circle {
    constructor(radius) {
        this.radius = radius
    }


    get diameter() {
        return this.radius * 2
    }

    set diameter(value) {
        if (typeof value != 'number') {
            throw new TypeError('Not a number')
        }
        this.radius = value / 2
    }

    get area() {
        return this.radius ** 2 * Math.PI
    }


}

const c = new Circle(2)