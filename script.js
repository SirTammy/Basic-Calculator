const display = document.querySelector(".screen")
const buttons = document.querySelectorAll(".btn" )
const symbols = ['%', '/', 'x', '-', '+', 'C', '=' ]
let firstVal = ''
let secondVal = ''
let symbol = ''


buttons.forEach(button => {
    button.addEventListener('click', function(){
        const{innerText: btnValue} = button;
        if(firstVal && symbol){
            symbol = btnValue
        }



        display.innerText += btnValue;
    })
});