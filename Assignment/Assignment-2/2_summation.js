function summation() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
var sum = summation(23, 6, 7, 4, 5, 7);
console.log("Addition is " + sum);
