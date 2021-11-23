function mukammalSon(n) {
   let sum = 0;

   for (let i = 1; i < n; i++) {

      if (n % i == 0)
         sum += i;
   }

   if (sum == n) {
      console.log('mukammal');
   } else {
      console.log('mukammal emas');
   }
}

mukammalSon(17);