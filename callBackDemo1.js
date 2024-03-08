// JavaScript is a single thread application
// java is a multi threaded application


// Solution : Callback function 


function Demo(){

    console.log("Hello");
}


function add(x){

    console.log(x);
    x()
}

// add(12)
// add("Shree ram")
// add(true)

add(Demo);