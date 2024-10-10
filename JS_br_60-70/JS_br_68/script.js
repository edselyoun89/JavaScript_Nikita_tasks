let arr1 = [1, 2, 3];
let arr2 = arr1;
arr1[0] = "a";
console.log(arr2);  
arr2[1] = "b";
console.log(arr1);
console.log(arr2);