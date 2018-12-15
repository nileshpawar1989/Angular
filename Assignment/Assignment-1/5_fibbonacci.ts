function display_fibonacci(num:number){
    var a:number = 0
    var b:number = 1
    while(b <= num ){
        console.log(b)
        b = a + b
        a = b - a       
    }
}

display_fibonacci(21)

