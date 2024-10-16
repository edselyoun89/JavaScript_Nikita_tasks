"use strict";

//////
let array = ['a', 'b', 'c', 'd', 'e'];
let flaag = false;

for (let element of array) {
   if (element == 'c') {
	  flaag = true;
	  break;
   }
}

if (flaag === true) {
   alert('+++');
} else {
   alert('---');
}

//////
let num = 4;
let flaag2 = true;
let i = 2;

while (i < num) {
   if (num % i == 0) {
	  flaag2 = !flaag2;
	  break;

   } else {
	  i += 1;
   };
};

if (flaag2) {
   alert(`Число ${num} является простым`)
} else {
   alert(`Число ${num} не является простым`)
}