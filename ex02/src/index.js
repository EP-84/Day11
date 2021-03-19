var temps = [
[31, 32, 19, 37]
[29, 27, 55, 36]
[17, 27, 42, 46]
[91, 27, 31, 61]

];

function myArrayFunction(arr) {
var newTemps = [...arr];
var averageDayTemp = [];


averageDayTemp = 0
i=0
while(i<newTemps.length)

	averageDayTemp = averageDayTemp + newTemps[i]
	i = i + 1

averageDayTemp = averageDayTemp / newTemps.length


return averageDayTemp;
}

console.log(myArrayFunction(averageDayTemp));
module.exports = myArryFunction;


