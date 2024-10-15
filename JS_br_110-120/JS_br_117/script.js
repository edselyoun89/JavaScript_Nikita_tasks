let res = 0;
for (let i = 2; i <= 100; i++) {
    if(i % 2 == 0){
	res += i;
    }
}
console.log(res);

let res1 = 0;
for (let i = 1; i <= 99; i++) {
    if(i % 2 != 0){
	res1 += i;
    }
}
console.log(res1);

let res2 = 1;
for (let i = 1; i <= 20; i++) {
    if(i % 2 != 0){
	res2 *= i;
    }
}
console.log(res2);