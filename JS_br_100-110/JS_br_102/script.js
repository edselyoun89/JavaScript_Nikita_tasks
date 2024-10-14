"use strict";

let age = 19;
let res;

if (age >= 18) {
	res;
	if (age <= 23) {
		res = '18-23';
	} else {
		res = '23+';
	}
} else {
	res = '<18>';
}

document.write(res);