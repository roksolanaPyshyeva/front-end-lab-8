const max = process.argv[2];
let FizzBuzz = function*(){
  let number = 1;
  let returnWords = ['Fizz','Buzz','FizzBuzz'];
  while(number <= max){
    if(((number % 3) === 0) && ((number % 5) === 0) ){
      number++;
      yield returnWords[2];
    }else if((number % 5) === 0){
      number++;
      yield returnWords[1];;
    }else if((number % 3) === 0){
      number++;
      yield returnWords[0];
    }else{
      number++;
      yield (number-1);
    }
  }
}();
for (var n of FizzBuzz) {
  console.log(n);
}