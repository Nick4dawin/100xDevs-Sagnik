
function calculateTime(){
    const today  = new Date();
    let s = today.getSeconds();
    let m = today.getMinutes();
    let h =today.getHours();
    h = fixDigits(h);
    m = fixDigits(m);
    s = fixDigits(s);
    console.log(h + ":" + m + ":" + s );
    setTimeout(calculateTime,1000);
}

function fixDigits(i){
    if(i<10){
        i = '0' + i;
    }
    return i;    
}


calculateTime();