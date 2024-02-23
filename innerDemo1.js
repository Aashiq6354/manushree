function outer(){


    console.log("Hello i am outer function");

    function inner(){

        console.log( "I am the inner function" );
    }
    inner()
}

outer()
