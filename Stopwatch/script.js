
let [hours, minutes, seconds, milliseconds]=  [0, 0,0,0];

let displayTime= document.getElementById("display");
let timer =0;
function stopwatch (){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds =0;
    seconds++;
    if(seconds ==  60 ){
        seconds =0 ;
        minutes++;
        if (minutes == 60 ) {
            minutes = 0 ; 
            hours++;

        }
    }
}
    let h=hours < 10 ? "0" + hours : hours;
    let m=minutes < 10 ? "0" + minutes : minutes;
    let s=seconds < 10 ? "0" + seconds : seconds;
    let mil=milliseconds < 10 ? "00" + milliseconds : milliseconds <100 ? "0" +milliseconds : milliseconds;

    displayTime.innerHTML = h + " : " + m + " : "+ s +" : " +mil;
}
document.getElementById("pause").addEventListener("click",() => {
    clearInterval(timer);
})
document.getElementById("Reset").addEventListener("click",() => {
    clearInterval(timer);
    [hours, minutes, seconds, milliseconds]=  [0, 0,0,0];
    displayTime.innerHTML = "  00 : 00 : 00 : 000 "
})
function watchstart(){
    if (timer!==0) {
        clearInterval(timer);
    }     
       timer= setInterval(stopwatch,10);

}
   