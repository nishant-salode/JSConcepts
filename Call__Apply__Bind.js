
			//Call and apply method

let firstObject ={
fn:"William",
ln:"Abignale",
printFullName: function(){
console.log(this.fn+this.ln)}
}
//call the print func() of firstobject
firstObject.printFullName();

let borrower ={
fn:"Akshay",
ln:"Kumar",
}
//borrower borrows the print func() of firstobject 
firstObject.printFullName.call(borrower)


//Adding parameter other than this named objects

let printWithHomeTown = function(hometown){
console.log(this.fn+this.ln+"Lives in: "+hometown)
}


//it gets fn and ln from this while the next param is hometown
printWithHomeTown.call(borrower,'New Delhi')

//Only difference here is in apply method params are passed as array
//function.apply(object,array of parameters)
printWithHomeTown.apply(borrower,['Kolkata'])

//Bind method doesnt direcctly calls the method instead return a function itself
//so we need to store it in a variable
//parameter can be array only if there is a single object else multiple parameter needs to be passed
let bindFunc = printWithHomeTown.bind(borrower,'Dhaka');
//After bind, call the function normally
bindFunc();
