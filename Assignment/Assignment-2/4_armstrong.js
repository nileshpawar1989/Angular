var chk_armstrong = function (num) {
    var temp = num;
    var arm = 0;
    var n;
    while (temp > 0) {
        n = temp % 10;
        temp = (temp - n) / 10;
        arm = arm + n * n * n;
    }
    if (arm == num) {
        console.log("It is Armstrong number");
    }
    else {
        console.log("It is not Armstrong number");
    }
};
chk_armstrong(153);
