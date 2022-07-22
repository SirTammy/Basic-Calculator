const display = document.querySelector(".screen")
const buttons = document.querySelectorAll(".btn" )
const allSymbols = ['%', '/', 'x', '-', '+', 'C', '=' ]
const equal = document.querySelector(".equalTo");
let firstVal = ''
let secondVal = ''
let symbol = ''
let result = ''


const calculate = () =>{
    firstVal = parseFloat(firstVal)
    secondVal = parseFloat(secondVal)

    if( symbol == '+'){
        result = firstVal + secondVal;
    }
    if( symbol == '-'){
        result = firstVal - secondVal;
    }
    if( symbol == '/'){
        result = firstVal / secondVal;
    }
    if( symbol == '%'){
        result = firstVal % secondVal;
    }
    if( symbol == 'x'){
        result = firstVal * secondVal;
    }
    display.innerText = result
    firstVal = result;
    secondVal = ''
    
}

function clear(){
            firstVal = '';
            secondVal = '';
            symbol = ''
            return display.innerText = '';
}

for(let button of buttons){
    button.addEventListener('click', function(){
        
        const{innerText: btnValue} = button;
        const btnIsSymbol = allSymbols.includes(btnValue)


        if (!secondVal && btnValue === ''){
            return null
        }
        if (btnValue === 'C'){
            return clear()
        }
        
        if(firstVal && btnIsSymbol){
            if(secondVal){
                 calculate()
            }
            symbol = btnValue
        } else if(!symbol){
            firstVal += btnValue
        } else if(symbol){
            secondVal += btnValue
        }


        if(btnValue !== '='){
            display.innerText += btnValue
        } 

        
    })
}

// equal.addEventListener('click', function(){
//     calculate()
// })


// function calculate (){
//     firstVal = parseFloat(firstVal)
//     secondVal = parseFloat(secondVal)
    
//     if(symbol === '+'){
//         firstVal + secondVal
//     }
    
    
//     display.innerText = result
//     firstVal = result
//     secondVal = ''
// }

// for(let button of buttons) {
//     button.addEventListener('click', function(){
//         const{innerText: btnValue} = button;
//         const btnValueIsSymbol = allSymbols.includes(btnValue)
        
        
//         if(firstVal && btnValueIsSymbol){
//             if(secondVal){
//                 calculate()
//             }
//             symbol = btnValue
//         } 
        
        
//         else if(!symbol){
//             firstVal += btnValue
//         } else if(symbol){
//             secondVal += btnValue
//         }


//         if(btnValue !== '='){
//             display.innerText += btnValue;
//         }
        
//     })
// });