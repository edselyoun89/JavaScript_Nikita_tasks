"use strict";

let num = '123033'; 
let str = String(num);

let sum1 = str[0] + str[1] + str[2];
let sum2 = str[3] + str[4] + str[5];

if (sum1 == sum2) {
	console.log('=');
} else {
	console.log('!=');
}