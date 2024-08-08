
const asyncFn = async () => {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      resolve(random) 
    }, 5000)
  });
  console.log("...await")
  const result = await myPromise;
  console.log("Finish asyncFn result: ", result)
}

asyncFn();