
			//Call and apply method

let myObj ={
fn:"Nishant",
ln:"Salode",
printNm: function(){
console.log(this.fn+this.ln)}
}


let borrower ={
fn:"Akshay",
ln:"Kumar",
}

myObj.printNm.call(borrower)


//Adding parameter other than this named objects

let printWithHomeTown = function(hometown){

console.log(this.fn+this.ln+"Lives in: "+hometown)
}


//it gets fn and ln from this while the next param is hometown
printWithHomeTown.call(borrower,'Bhopal')

//Only difference here is in apply method params are passed as array
//function.apply(object,array of parameters)
printWithHomeTown.apply(borrower,['applycity'])

//Bind method doesnt direcctly calls the method instead return a function itself
//so we need to store it in a variable
let bindFunc = printWithHomeTown.bind(borrower,['applycity']);
bindFunc();
