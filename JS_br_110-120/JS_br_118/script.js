let array = [2, 5, 9, 3, 1, 4];
let result = 0;
for (let element of array) {
	result += element;
}
console.log(result)

let array1 = [2, 5, 9, 3, 1, 4];
let result1 = 0;
for (let element of array1) {
    if(element % 2 == 0){
	result1 += element;
    }
}
console.log(result1)

let array2 = [2, 5, 9, 3, 1, 4];
let result2 = 0;
for (let element of array2) {
	result2 += element**2;
}
console.log(result2)

let array3 = [2, 5, 9, 3, 1, 4];
let result3 = 1;
for (let element of array3) {
	result3 *= element;
}
console.log(result3)