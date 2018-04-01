const max = process.argv[2];
let FizzBuzz = {
  [Symbol.iterator](){
    let number = 1;
    let returnWords = ['Fizz','Buzz','FizzBuzz'];
    return{
      next(){
        if(number <= max){
          if(((number % 3) === 0) && ((number % 5) === 0) ){
            number++;
            return { done: false, value: returnWords[2] };
          }else if((number % 5) === 0){
            number++;
            return { done: false, value: returnWords[1] };
          }else if((number % 3) === 0){
            number++;
             return { done: false, value: returnWords[0] };
          }
          else{
            number++;
            return { done: false, value: (number-1) };
          }
        }
        return { done: true };
      }
    }
  }
}
for (var n of FizzBuzz) {
  console.log(n);
}