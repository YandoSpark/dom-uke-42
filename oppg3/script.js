

var check = document.querySelector("#button").addEventListener
('click', function () {

    var input1 = document.querySelector("#input").value;

    var rest = input1.split("").reverse().join("");

    if (rest == input1) {
        console.log(input1 + " er pallindrome");
    }
    else {
        console.log(input1 + " er ikke pallindrome");
    }

})

