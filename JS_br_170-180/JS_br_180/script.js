function func() {
   return console.log('Hello world!');
};


func();


console.log(func);



func = 1234;

      console.log(func);




function func1() {
   return 3;
};


let func2 = func1;




console.log(func1() + func2());





let func3 = function () {
     return 1;
  };


  


let func4 = function () {
   return 2;
};





console.log(func3() + func4())