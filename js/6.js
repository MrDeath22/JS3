function tubSon(n) {

   for (let i = 2; i < n; i++) { 

      if (n % i == 0) {

         return false;
      }
   }
   console.log(n + ' tub');
}

tubSon(9);