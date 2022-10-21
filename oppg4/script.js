const button1 = document.querySelector("#button1").addEventListener
("click", function () {

    document.getElementById("div1").style.backgroundColor = "red";

})

const button2 = document.querySelector("#button2").addEventListener
("click", function () {

    document.getElementById("div2").style.backgroundColor = "blue";

})

const button3 = document.querySelector("#button3").addEventListener
("click", function () {
 var colors= ["red", "blue", "green", "black"];
 var randomNumber = Math.round(Math.random() * 3);



    document.getElementById("div3").style.backgroundColor = (colors[randomNumber]);

})