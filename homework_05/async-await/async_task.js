const waitFewSec = (msec, triggerFail) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (triggerFail) {
        reject(false);
        return;
      }

      resolve(true);
    }, msec);
  });
};
const asyncFn = async () => {
  const result = await waitFewSec(1000);
  return result;
};
async function doAsyncMagic(){
  let result  = await Promise.all([
    asyncFn(),
    asyncFn(),
    asyncFn(),
    asyncFn()
    ]).then((result) => console.log(result));
};
doAsyncMagic(); // [true, true, true, true]

async function* rangeGen() {
  for (let i = 1; i <= 15; i++) {
    yield i;
  }
}
async function iterateRange() {
  var sum = 0;
  for await( let results of rangeGen()) {
    sum += results; 
  }
  return sum;
}
iterateRange(); // Promise {<resolved>: 120}
