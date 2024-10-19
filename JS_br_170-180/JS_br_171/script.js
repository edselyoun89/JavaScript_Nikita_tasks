let num = 1;

      function func1() {
         console.log(num);
      }

      func1();   // 1


      


      let num1 = 1;

      function func2() {
         console.log(num1);
      }
 
      num1 = 2;
      func2();   // 2


      



      function func3() {
         console.log(num2);
      }

      let num2;

      num2 = 1;
      func3();   // 1

      num2 = 2;
      func3();   // 2