function display_fibonacci(num) {
    var a = 0;
    var b = 1;
    while (b <= num) {
        console.log(b);
        b = a + b;
        a = b - a;
    }
}
display_fibonacci(21);
