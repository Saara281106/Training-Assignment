console.log();

console.log("Merging Arrays:-");
let fruits = ["apple" , "mango" , "lichi"];
let vegetables = ["lady finger" , "potato" , "onion"];

let groceries = [...fruits,...vegetables];
console.log(groceries);

console.log();
console.log("Copying and Extending Object");
let user = {
    username : "saara281106",
    email : "saara.281106@gmsil.com"
}

let userProfile = {
    ...user,
    age : "19"
}
console.log("Old object:- ");
console.log( user);
console.log("Copied new object:- ");
console.log( userProfile);

console.log();
console.log("Printing elements of array using loops");
let arr = [10 , 20 , 30 , 40 , 50];
for(let i=0 ; i<arr.length ; i++){
    console.log(arr[i]);
}


console.log();