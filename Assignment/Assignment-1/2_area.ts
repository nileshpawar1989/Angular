function area(r:number, PI:number=3.14){
    var area:number;
     area = PI * r * r;
    return area;
}

var area_circle = area(5);
console.log("Area of circle is "+area_circle);