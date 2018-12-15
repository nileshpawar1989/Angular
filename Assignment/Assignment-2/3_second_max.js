function maximum_second(arr) {
    var i;
    var max = 0;
    var s_max = 0;
    for (i = 0; i < arr.length; i++) {
        if (max < arr[i])
            max = arr[i];
        if (s_max < arr[i] && max > arr[i])
            s_max = arr[i];
    }
    return s_max;
}
var arr = new Array(23, 89, 6, 29, 56, 45, 77, 32);
console.log("Second Maximum number is  " + maximum_second(arr));
