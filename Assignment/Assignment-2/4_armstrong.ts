let chk_armstrong = (num:number) => {
    var temp:number = num
    var arm:number = 0
    var n:number
    while(temp > 0){
        n = temp % 10
        temp = (temp - n) / 10
        arm = arm + n * n * n 
    }

    if(arm == num) {
        console.log("It is Armstrong number")
    } else {
        console.log("It is not Armstrong number")
    }
}

chk_armstrong(153)