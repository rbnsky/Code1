function runLater(){
    console.log("run me now!");
}

setTimeout(runLater, 1000);

let runs: number = 0;
let intervalId: number = setInterval(runEverySecond, 40)

function runEverySecond(){
    runs++;
    console.log("I'm running every milisecond", runs);
if(runs >= 5) {
    clearInterval(intervalId);
    }
}

function frame(){}
    console.log("frame");

