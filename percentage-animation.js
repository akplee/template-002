let percentageCountdown = document.querySelector('#percentage-countdown')
let value = 73
let timing = 10
let interval

f1()

function addiction(){
    if(parseInt(percentageCountdown.innerHTML) < value){
        percentageCountdown.innerHTML = parseInt(percentageCountdown.innerHTML) + 1
        percentageCountdown.innerHTML += '%'
        timing = timing * 1.035
    }
}

function f1(){
    clearInterval(interval)
    addiction()
    interval = setInterval(f1, timing)
}

// while(parseInt(percentageCountdown.innerHTML) <= value){
//     setInterval(addiction, timing);
// }