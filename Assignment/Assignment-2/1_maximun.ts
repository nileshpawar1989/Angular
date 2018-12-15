function maximum(arr:any):number {  
    var i
    var max:number = 0
 
    for(i = 0;i<arr.length;i++) { 
        if(max < arr[i])
            max = arr[i] 
    } 
    return max;
 } 
 var arr:number[] = new Array(23, 89, 6, 29, 56, 45, 77, 32 ) 

 console.log("Maximum number is "+maximum(arr))