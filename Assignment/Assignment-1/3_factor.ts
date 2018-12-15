function display_factors(num:number){
    var i:number = 1
    var n:number = num / 2
    while(i <= n ){
        if (num%i == 0)
            console.log(i)
        i++
    }
}

display_factors(20)

