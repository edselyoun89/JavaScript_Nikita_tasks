"use strict";
let a, b, c, d, result, str; // объявляем все 3 переменные методом в одну строку

// Присваиваем переменным значения:
let test = Boolean(3);
alert(test);
test = Boolean(0);
alert(test);
test = Boolean(-1);
alert(test);
test = Boolean(-0);
alert(test);
test = Boolean(+0);
alert(test);
test = Boolean('abc');
alert(test);
test = Boolean('');
alert(test);
test = Boolean('0');
alert(test);
test = Boolean(true);
alert(test);
test = Boolean(false);
alert(test);
test = Boolean('true');
alert(test);
test = Boolean('false');
alert(test);
test = Boolean(null);
alert(test);
test = Boolean('null');
alert(test);
test = Boolean(undefined);
alert(test);
test = Boolean('undefined');
alert(test);
test = Boolean(NaN);
alert(test);
test = Boolean('NaN');
alert(test);
test = Boolean(3 * 'abc');
alert(test);
test = Boolean(Infinity);
alert(test);
test = Boolean(1 / 0);
alert(test);