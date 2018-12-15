function maximum(num1:number, num2:number, num3:number ):number {
    if(num1 > num2 && num1 > num3){
        return num1
    } else if(num2 > num1 && num2 > num3){
        return num2
    }else{
        return num3
    }
}

var max:number = maximum(23, 89, 6)
console.log("Maximum number is " + max)