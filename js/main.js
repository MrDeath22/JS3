// function myFunc(a) {
//    if(a < 18) {
//       alert('Kiromisan yoqol')
//    } else {
//       alert('Kiravering botam')
//    }
// }

// myFunc(+prompt());

function mukammalSon(n) {
   sum = 0;

   for (let i = 1; i < n; i++) {

      for (let j = 0; j < i; j++) {

         if (n % j == 0)
         sum += j;
      }

      if (sum == n) {
         console.log('sum');
      } else {
         console.log('mukammal emas');
      }
   }
}

mukammalSon(100)