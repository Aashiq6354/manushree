//function -->
//def:function is group of statements to perform specific task
// ------------------------------------ console.log("------------------------------------")
//50 times... drawLine(){"---------"}   call();

//advantage of function
//1)code reusability
// 2)code optimization
// 3)length of program will be less
// 4)easy to debug
// 5)easy to maintain
// 6)easy to understand
// 7)easy to extend
// 8)easy to test
// 9)easy to modify
// 10)easy to read


//type of functions

//2 type of functions  1)predefined functions 2)user defined functions

//js does not have datatype --->
/// void demo() int sum()
//function keyword is used to define function, arrow function
//4 type of function
// 1)function with no argument and no return type
// 2)function with argument and no return type
// 3)function with no argument and return type
// 4)function with argument and return type


// function demo()
// {
//     console.log("No arguments and no return type");
// }

// demo()

// function demo2()
// {
//     return "No arguments and with return type"
// }

// // var x = demo2()
// // console.log(x);

// console.log(demo2());


function sum(a,b){
    return a+b
}

var x = sum(5,7);
console.log(x);


function mul(x,y){
    console.log(x*y);
}

mul(4,5)