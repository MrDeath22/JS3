function tubSon(n) {

   for (let i = 2; i < n; i++) { 
      let sum = 0;

      for (let j = i; j <= i; j++) {

         if (i % j == 0) {
            sum += j;
            console.log(sum);
            return false;
         }
      }
      if (sum == i) {

         console.log(i);
      }
   }
}

tubSon(100);

