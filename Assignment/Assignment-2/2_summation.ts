function summation(...arr:number[]):number {  
    var i   
    var sum:number = 0 
 
    for(i = 0;i<arr.length;i++) { 
       sum = sum + arr[i] 
    } 
    return sum;
 } 
 var sum:number = summation(23, 6, 7, 4, 5, 7) 
 console.log("Addition is "+sum)