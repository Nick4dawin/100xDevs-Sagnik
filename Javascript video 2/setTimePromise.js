function customWait(){
    return new Promise(function (resolve){
        setTimeout(resolve,3000)
    });
}

function operation(){
    console.log("Thanks for Waiting");
}


customWait().then(operation); //USING .THEN


