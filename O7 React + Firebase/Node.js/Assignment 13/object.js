console.log();
let smartPhone = {
    brand : "Apple",
    model : "I phone 17",
    storage : "200 GB",
    batteryLife  : "15 hrs"
}
console.log();
console.log("Model: " + smartPhone.model);
console.log("Printing object");
console.log(smartPhone);
smartPhone.storage = "256 GB"
console.log("Printing updated object");
console.log(smartPhone);

smartPhone.color = "blue";
console.log("Printing updated object");
console.log(smartPhone);
delete smartPhone.batteryLife;
console.log("Printing updated object");
console.log(smartPhone);

console.log();