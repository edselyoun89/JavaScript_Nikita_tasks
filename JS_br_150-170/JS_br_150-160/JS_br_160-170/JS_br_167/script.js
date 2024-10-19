let arr1 = [2, 4, 6];

function func1(arr) {

   for (let elem of arr) {
      if (elem % 2 != 0) {
         return false;
      }
   };

   return true;
};

if (func1(arr1)) {
   console.log('Все числа четные');
} else {
   console.log('Есть нечетные числа')
}





let num = 4663;

function func2(number) {

   let arrNum = String(number).split('')

   for (let elem of arrNum) {
      if (elem % 2 != 0) {
         return false;
      }
   };

   return true;
};

if (func2(num)) {
   console.log('Все цифры четные');
} else {
   console.log('Есть нечетные цифры')
}




let arr3 = [2, 3, 4, 4, 7];

function func3(arr) {
   for (let i = 0; i <= arr.length - 1; i++) {
      if (arr[i] == arr[i+1]) {
         return true;
      } else {
         continue;
      }
   };
   return false;
}

if (func3(arr3)) {
   console.log('Есть два одинаковых элемента подряд');
} else {
   console.log('Нет двух одинаковых элемента подряд')
}