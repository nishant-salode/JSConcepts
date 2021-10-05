/*
  Map : Used for creating a new array and doing operation on each element
        You can either pass a function inside map or write a function withing the parenthesis
*/

let num__array = [0,1,2,42,123,54,72,83,34,77,99];

let double_array = num__array.map(current=>current*2);
console.log(double_array)

/*
  Filter : Used for filtering out elements out of an array
          During iteration it returns a boolean; 
          It decides on the boolean value wheater that element should exist or not in the new array
*/

let even_array = num__array.filter(current=>current%2===0);
console.log('Even array',even_array)
let odd_array = num__array.filter(current=>current%2);
console.log('Odd array',odd_array)


/*
  Reduce : This method accumulates the array into a single value
           It returns a single value
           It has 2 parameters (Accumulator , currentValue)
           Can be used to calculat sum, average, minimum, maximum etc
*/

// Find the sum of all the elements of an array

let sum = num__array.reduce((Accumulator , currentValue)=>{
Accumulator = currentValue + Accumulator;
return Accumulator
},0);  //here accumulator is inititalized to 0

console.log('Total sum: ',sum);

// Another example to find the greatest number in an array

let array_with_negatives = [-12,30,45,-234,345,2,0,-32,-33,99,1000,-2000]
let greatest__num = array_with_negatives.reduce((Accumulator, current) =>{
if(Accumulator > current){
  // old value has bigger value
  return Accumulator
}
else{
  //current has bigger value
  return current
}
}); //by default accumulator is initialized with the first element of the array
console.log('Greatest Number: ',greatest__num);

// Optimized code
let optimized__greatest__num = array_with_negatives.reduce((Accumulator, current) =>{
return (Accumulator > current)?  Accumulator: current;
}); 
console.log('Optimized Greatest Number: ',optimized__greatest__num);

//One linear code :
console.log('Greatest number with Math function: ',Math.max(...array_with_negatives));

