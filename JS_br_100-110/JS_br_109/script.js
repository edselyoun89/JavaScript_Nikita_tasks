"use strict";

let num2 = 123033; // берем в кавычки, чтобы обращаться к цифрам
let str3 = String(num2);

let sum1 = +str3[0] + +str3[1] + +str3[2];
let sum2 = +str3[3] + +str3[4] + +str3[5];

if (sum1 == sum2) {
	document.write('суммы равны');
} else {
	document.write('суммы не равны');
}