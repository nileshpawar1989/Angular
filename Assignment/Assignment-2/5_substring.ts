function chkstring(str:string):void {  
    var str1:string = "Marvellous";
    if(str.indexOf(str1) != -1){
        console.log("String contains "+str1+" in it")
    }else{
        console.log("String not contains "+str1+" in it")
    }
 } 
 var str:string = "“Pune Kothrud Marvellous Infosystems"

 chkstring(str)