const names: Array<string> = []; // string[]
// names[0].split(" ");

const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(100);
  }, 2000);
});

promise.then((data) => {
  console.log(data);
});
