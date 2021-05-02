const pi = Math.PI

class Circle {
    constructor(radius){
        this.radius = radius; 
    }

    get diameter() {
        return this.radius * 2
    }
    set diameter(diameter) {
        this.radius = diameter / 2
    }

    get circumference() {
        return (this.radius * 2) * pi  
    }
    set circumference(circumference) {
        this.radius = (circumference / 2) / pi
    }

    get area() {
        return (this.radius * this.radius) * pi 
    }
    set area(value) {
        this.radius = (this.radius / this.radius) / pi
    }
}