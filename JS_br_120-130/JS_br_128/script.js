"use strict";

//////
let array1 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
   let array2 = [1, 2, 3, 4, 5, 6, 7];
   let newObj1 = {};

   for (let i = 0; i <= 6; i++) {
      let element = array2[i];
      let value = array1[i]

      newObj1[element] = value
   };

console.log(newObj1);

//////
let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
let newObj2 = {};

for (let element in obj) {

   if (obj[element] % 2 == 0) {

	  let newelement = element;
	  let value = obj[element];
	  newObj2[newelement] = value;

   } else {
	  continue
   };
};

console.log(newObj2);

//////
let obj1 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
let newObj3 = {};

for (let element in obj1) {

   let newelement = obj1[element];
   let newValue = element;

   newObj3[newelement] = newValue;
};
console.log(obj1);
console.log(newObj3);