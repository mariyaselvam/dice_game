// for first image 

var numbers1 = Math.floor(Math.random()*6)+1;

var myImage1 = "images/dice"+numbers1+".png";

var srcImages1 = document.getElementById("myImage1").setAttribute("src",myImage1);



// for second image 

var numbers2 = Math.floor(Math.random()*6)+1;

var myImage2 = "images/dice"+numbers2+".png";

var srcImages2  = document.getElementById("myImage2").setAttribute("src", myImage2);


if (numbers1 < numbers2 ) {
    document.getElementById("titleWiner").innerHTML="player 2 is wins 🤍";
}

else if (numbers1 > numbers2) {
    document.getElementById("titleWiner").innerHTML="player 1 is wins 🤍";
}

else {
    document.getElementById("titleWiner").innerHTML="draw 😇";
}



