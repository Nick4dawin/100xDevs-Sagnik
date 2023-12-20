let s = 30;

const counter  = setInterval(
    () =>{
        if(s < 0){
            clearInterval(counter);
        }

        else{
            console.log(s);
            s--;
        }
    },1000);


