let i = 0;

function num(x) {
   for (;; i++) {
      x = x / 2;
      if (x <= 10) {
         return i;
      } 
   }
}

console.log(num(100));