let x = 2, y = 2

function func(a, b) {
   return a == b;
};

console.log(func(x, y));




x = 3;
y = 2;

function func2(a, b) {
   return a != b;
}

console.log(func2(x, y));




x = 3;
y = 3;

function func3(a, b) {
   return a + b >= 10;
}

console.log(func3(x, y));




let number = -2;

function func4(num) {
   return num >= 0
}

console.log(func4(number));