let num1 = 1;

      function func1() {
         num1 = 2;
      }
      func1();

      console.log(num1); // 2


      


      

      let num2 = 1;

      function func2() {
         num2 = 2;
      }

      console.log(num2); // 1

      





      let num3 = 1;

      function func3() {
         let num3 = 2;
      }
      func3();

      console.log(num3); // 1


      




      let num4 = 1;

      function func4() {
         let num4 = 2;
      }

      console.log(num4); // 1
      func4();

      




      let num5 = 1;

      function func5() {
         num5 = 2;
      }

      console.log(num5); // 1
      func5();


      



      let num6 = 1;

      function func6() {
         num6++;
      }

      func6();
      func6();
      func6();
      console.log(num6); // 4


      


      function func7() {
         num7 = 2;
      }

      let num7 = 1;

      console.log(num7); // 1

      func7();

  
      


      function func8() {
         num8 = 2;
      }

      let num8 = 1;
      func8();
      console.log(num8); // 2