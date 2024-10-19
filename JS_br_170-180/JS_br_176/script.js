function func1(localNum) {
   console.log(localNum);
}

func1(1); // 1







function func2(localNum) {
   console.log(localNum);
}

let num2 = 1;
func2(num2); // 1






function func3(localNum) {
   console.log(localNum);
}

let num3 = 1;
func3(num3); // 1
num3 = 2;





let num4 = 1;

function func4(localNum) {
   console.log(localNum);
}

num4 = 2;
func4(num4); // 2







function func5(localNum) {
   localNum = 2;
}

let num5 = 1;
func5(num5);
console.log(num5); // 1







function func6(localNum) {
   num6 = 2;
}

let num6 = 1;
func6(num6);
console.log(num6); // 2







function func7(localNum) {
   let num7 = 2;
}

let num7 = 1;
func7(num7);
console.log(num7); // 1