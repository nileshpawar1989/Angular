function prime(num) {
    var i = 2;
    while (i <= num) {
        if (num % i == 0)
            break;
        i++;
    }
    if (i == num)
        return true;
    else
        return false;
}
var n = prime(11);
if (n)
    console.log("It is prime number");
else
    console.log("It is not prime number");
