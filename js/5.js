function boluvchi(n) {

   for (let i = 0; i <= n; i++) {

      if (i % 5 == 0) {
         continue;
      }

      if (i % 3 == 0) {
         console.log(i);
      }
   }
}

boluvchi(50);