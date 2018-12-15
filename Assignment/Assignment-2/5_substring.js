function chkstring(str) {
    var str1 = "Marvellous";
    if (str.indexOf(str1) != -1) {
        console.log("String contains " + str1 + " in it");
    }
    else {
        console.log("String not contains " + str1 + " in it");
    }
}
var str = "“Pune Kothrud Marvellous Infosystems";
chkstring(str);
