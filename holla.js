const display = document.querySelector(".screen");
const buttons = document.querySelectorAll(".btn" );
const operator = document.querySelectorAll(".operators").value


let symbols = [+, -, x, ]

buttons.forEach(button => {
    button.addEventListener('click', function(){
        // alert (button.value)
        display.innerHTML += button.value;
        let number = numbers.includes(button.value)
        if(number && operator)
    })
});
let firstVal = null;
let secondVal = null;



function calculate (){

}

if(operator == + || operator == - || operator == x ){
    calculate()
}

