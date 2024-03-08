function Goa(){
    console.log("Goa");
}

function Singapore(){
    console.log("Singapore");
}

function Maldives(){
    console.log("Maldives");
}


function Travel(cb){

    console.log(cb);
    cb();
}

var budget = 5000;

if(budget < 2000){
    Travel(Goa);
}
else if(budget <= 5000){
    Travel(Singapore);
}
else if(budget > 5000 ){
    Travel(Maldives);
}
else{
    console.log("Bro first Earn money");
}