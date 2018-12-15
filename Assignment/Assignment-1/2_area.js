function area(r, PI) {
    if (PI === void 0) { PI = 3.14; }
    var area;
    area = PI * r * r;
    return area;
}
var area_circle = area(5);
console.log("Area of circle is " + area_circle);
