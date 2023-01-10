var Circle = /** @class */ (function () {
    function Circle() {
        this.pi = 3;
    }
    Circle.pi = 3.14;
    return Circle;
}());
console.log(Circle.pi); // returns 3.14
var circleObj = new Circle();
console.log(circleObj.pi); // returns 3
