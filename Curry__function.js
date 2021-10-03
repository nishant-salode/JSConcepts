/*    Function curry is binding to function that excepts multiple parameters  */

// Curry with Function Clousure :

/*
Num1 being the first parameter while 
Num2 being the second one
*/
const multiply = (Num1) =>{
  return (Num2) =>{
    return (Num1*Num2)
  }
}

const multiplyBy11 = multiply(11); //Here you have defined the first parameter Num1 as '11'
multiplyBy11(5); //Your second param Num2 will be 5


/*

// Curry function using bind method

*/

//normal sweet function of adding two numbers :)
let sum = (a,b) =>{
  return (a + b);
}

let add900 = sum.bind(this,900); //Bind returns a new function of sum which has it's first param set to 900
add900(10); // calls the new function while passing the second parameter;
