function maximum(arr) {
    var i;
    var max = 0;
    for (i = 0; i < arr.length; i++) {
        if (max < arr[i])
            max = arr[i];
    }
    return max;
}
var arr = new Array(23, 89, 6, 29, 56, 45, 77, 32);
console.log("Maximum number is " + maximum(arr));
