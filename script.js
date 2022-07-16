const output = document.querySelector(".screen");
const numbOp = document.querySelectorAll(".visible")

numbOp.forEach(key => {
    key.addEventListener('click', function(){
        alert(key.innerHTML)
    })
});

