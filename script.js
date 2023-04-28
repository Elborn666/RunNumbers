let time = 2000; // мс
let step = 10; // шаг в кол-во единицах


function createInterval(num, elem){
    refNumber = document.querySelector('.' + elem)
    let start = 0
    let intStep = Math.round(time/(num/step));
    let interval = setInterval(() => {
        start = start + step;
        if (start == num){
            clearInterval(interval);
        }
        refNumber.innerHTML = start
    }, intStep);
}

createInterval(1000, "text-number")