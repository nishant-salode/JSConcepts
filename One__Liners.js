// Here's an example of recursive function with function curry

let multiply = (a) => (b)=> b !== undefined? multiply(a*b) :a;
multiply(2)(5)(13)(21)();

/*  Here the last argument is kept empty/undefined 
 *  which will help the script to retun the calculated value :)
 *  Else it would again call the multiply function recursively
 */

