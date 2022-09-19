function clock(){
    setTimeout (clock, 1000);
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var seconds = new Date().getSeconds();
    var TimeZone = "AM"
    

    if (hours > 12){
        hours -= 12;
        TimeZone = "PM"
    }

    if (hours === 0){
        hours = 12;
    }

    seconds = (seconds < 10) ? "0"+seconds : seconds;
    hours = (hours < 10) ? "0"+hours : hours;
    minutes = (minutes < 10) ? "0"+minutes : minutes;
    
    var showtime = hours + ":"  + minutes + ":" + seconds + " " + TimeZone;
    
    document.getElementById("show").innerHTML = showtime; 
}
clock();


function openNav(){
    document.getElementById("close").style.width = "350px";
    document.getElementById("page").style.marginLeft = "370px";
}
function closeNav(){
    document.getElementById("close").style.width = "0px";
    document.getElementById("page").style.marginLeft = "0px";
}




function Calculate() {
var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;
var num3 = document.getElementById("num3").value;
var num4 = document.getElementById("num4").value;
var num5 = document.getElementById("num5").value;
var num6 = document.getElementById("num6").value;
var num7 = document.getElementById("num7").value;
var num8 = document.getElementById("num8").value;
var num9 = document.getElementById("num9").value;
var num10 = document.getElementById("num10").value;
var array = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10];
var sum = 0;

for (var i = 0; i < array.length; i++) {
    sum += array[i] / array.length;
    console.log(array);
    document.getElementById("result").innerHTML= "Result =" + " " + sum; 
}
}


function formValidate() {
    var x = document.getElementById("ema").value;
    var z = document.getElementById("phone").value;
    var y = document.getElementById("pass").value;
    var text = "";
 
    if (x.length < 11 || x.indexOf("@") == -1) {
     text = "Wrong email address, Try again";
     document.getElementById("error").innerHTML = text;
     return false;
    }
    else if (z.length != 11 || isNaN(z)) {
        text = "Wrong phone number, Try again";
        document.getElementById("error").innerHTML = text;
        return false;
    }
    else if (y.length < 6) {
        text = "Wrong password, Try again";
        document.getElementById("error").innerHTML = text;
        return false;
    }
    else {
     return true;
    }
}

function openpara() {
    document.getElementById("details").style.display = "block";
    document.getElementById("down").style.display = "none";
    document.getElementById("up").style.display = "block";
}
function closepara() {
    document.getElementById("details").style.display = "none";
    document.getElementById("down").style.display = "block";
    document.getElementById("up").style.display = "none";
}



