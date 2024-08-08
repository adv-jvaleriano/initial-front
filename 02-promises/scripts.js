const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const random = Math.random();
    (random >= 0.5) 
      ? 
      resolve(random) 
      : 
      reject(new Error('Random number is less than or equal 0.5'))
  }, 2000)
});

myPromise.then(res => {
  console.log(`Random number ${res} is grater than 0.5`)
}).catch(err => {
  console.error(`Error: ${err}`)
}).finally(() => console.log("Exit"))





// const promise1 = new Promise(resolve => {
//   setTimeout(() => {
//     console.log("Print 1")
//     resolve(100)
//   }, 3000)
// });

// const promise2 = new Promise(resolve => {
//   setTimeout(() => {
//     console.log("Print 2")
//     resolve(100)
//   }, 3000)
// });

// const promise3 = new Promise(resolve => {
//   setTimeout(() => {
//     console.log("Print 3")
//     resolve(100)
//   }, 3000)
// });

// console.time('consecutives')
// promise1
//   .then(() => promise2)
//   .then(() => promise3)
//   .then(() => console.timeEnd('consecutives'))


// console.time('parallel')
// Promise.all([promise1, promise2, promise3])
//   .then(() => console.timeEnd('parallel'))