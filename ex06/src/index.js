function multiplyArrayFunction(myArray) {

    var myArray = [
[2,5,6,7,8,9],
[2.5,2,0.5,0.2,8],
[1,2,3,4,5,6,7,8,9]

];

for (var i=0; i < myArray.length; i++) {
for (var j=0; j < myArray[i].length; i++) {
console.log(myArray[i][j]);
}

}
}
console.log(multiplyArrayFunction("myArray"));
module.exports = multiplyArrayFunction;