const input1 = document.querySelector('#numb1')

input1.value = Math.round(Math.random() * (10 - 0) + 0)

const input2 = document.querySelector('#numb2')

input2.value = Math.round(Math.random() * (10 - 0) + 0)


const output = document.querySelector('#btn1').addEventListener('click',function(input3,input4) {

    var input3 = input1.value
    var input4 = input2.value

    if (input3 > input4) {
        console.log(input3 + " er større enn " + input4);
    }
    else if (input3 < input2) {
        console.log(input3 + " er mindre enn " + input4);
    }
    else {
        console.log(input3 + " er lik som " + input4);
    }
    
})