let arr1 = [1, 2, 3, 4];

      function calcArr(arr) {

         let res = 0;

         for (let elem of arr) {
            res += elem;
         };

         res = res / arr.length

         return res;
      };

      console.log(calcArr(arr1))

   
      



      let arr2 = [1, 2, 3, 4];
      let arr3 = [5, 6, 7, 8];

      function sum(arr) {
         let sum = 0;
         for (let elem of arr) {
            sum += elem
         };
         return sum;
      };

      function num1(arr1, arr2) {
         let res1 = sum(arr1)
         let res2 = sum(arr2)
         return res1 / res2;
      };

      console.log(num1(arr2, arr3));


      

     
      let arr6 = [1, 2, 3, 4, 5, 6]

      function num2(arr) {
         let res = 1;

         for (let elem of arr) {
            res *= elem;
         }

         return res;
      };

      console.log(num2(arr6));