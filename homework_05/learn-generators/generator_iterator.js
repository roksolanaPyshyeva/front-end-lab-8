function *factorial(n){
  let element = 1, total = 1;
    while(element<=n){
      total = total* element++;
      yield total;
    }
  }
for (var n of factorial(5)) {
   console.log(n)
}