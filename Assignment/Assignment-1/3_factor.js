function display_factors(num) {
    var i = 1;
    var n = num / 2;
    while (i <= n) {
        if (num % i == 0)
            console.log(i);
        i++;
    }
}
display_factors(20);
