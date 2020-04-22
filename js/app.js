    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var n = weekday[d.getDay()];
function myFunction() {
    document.getElementById("day").innerHTML = n;
}

function firstYear(){
    if(n == "Monday"){
        window.location = "first_year_mon.html";
    }else if(n == "Tuesday"){
        window.location = "first_year_tue.html";
    }else if(n == "Wednesday"){
        window.location = "first_year_wed.html";
    }else if(n == "Thursday"){
        window.location = "first_year_tue.html";
    }else if(n == "Friday"){
        window.location = "first_year_fri.html";
    }
}

function secondYear(){
    if(n == "Monday"){
        window.location = "second_year_mon.html";
    }else if(n == "Tuesday"){
        window.location = "second_year_tue.html";
    }else if(n == "Wednesday"){
        window.location = "second_year_tue.html";
    }else if(n == "Thursday"){
        window.location = "second_year_tue.html";
    }else if(n == "Friday"){
        window.location = "second_year_fri.html";
    }
}

function thirdYear(){
    if(n == "Monday"){
        window.location = "third_year_mon.html";
    }else if(n == "Tuesday"){
        window.location = "third_year_tue.html";
    }else if(n == "Wednesday"){
        window.location = "third_year_wed.html";
    }else if(n == "Thursday"){
        window.location = "third_year_thu.html";
    }else if(n == "Friday"){
        window.location = "third_year_fri.html";
    }
}

function fouthYear(){
    if(n == "Monday"){
        window.location = "fouth_year_mon.html";
    }else if(n == "Tuesday"){
        window.location = "fouth_year_tue.html";
    }else if(n == "Wednesday"){
        window.location = "fouth_year_wed.html";
    }else if(n == "Thursday"){
        window.location = "fouth_year_thu.html";
    }else if(n == "Friday"){
        window.location = "fouth_year_fri.html";
    }
}

AOS.init({
    duration: 2000
});

function mybtn1(){
    window.open("1SecondFridayDet.html");
}
function mybtn2(){
    window.open("2SecondFridayDet.html");
}
function mybtn3(){
    window.open("3SecondFridayDet.html");
}
function mybtn4(){
    window.open("4SecondFridayDet.html");
}
function mybtn5(){
    window.open("5SecondFridayDet.html");
}
function mybtn6(){
    window.open("6SecondFridayDet.html");
}
function mybtn1b(){
    window.open("1bSecondFridayDet.html");
}
function mybtn2b(){
    window.open("2bSecondFridayDet.html");
}
function mybtn3b(){
    window.open("3bSecondFridayDet.html");
}
function mybtn4b(){
    window.open("4bSecondFridayDet.html");
}
function mybtn5b(){
    window.open("5bSecondFridayDet.html");
}
function mybtn6b(){
    window.open("6bSecondFridayDet.html");
}
function mybtn1t(){
    window.open("1tSecondFridayDet.html");
}
function mybtn2t(){
    window.open("2tSecondFridayDet.html");
}
function mybtn3t(){
    window.open("3tSecondFridayDet.html");
}
function mybtn4t(){
    window.open("4tSecondFridayDet.html");
}
function mybtn5t(){
    window.open("5tSecondFridayDet.html");
}
function mybtn6t(){
    window.open("6tSecondFridayDet.html");
}
