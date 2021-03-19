var myPetsArray = ["Dog", "Cat"];

function myArrayFunction(myPets) {
var myNewPets = [...myPets];

myNewPets = [];
myNewPets.push("Bird", "Fish");
firstPet = myNewPets[0];
lastPet = myNewPets[1];
myNewPets[0] = "Linon"
return mmyNewPets;
}

console.log(myArrayFunction("myNewPets"));
module.exports = myArrayFunction;





