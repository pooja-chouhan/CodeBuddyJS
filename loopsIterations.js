// level {1/2/3}



// ## Level 2

// ---

// Write a function in Javascript to print the sum of the first n fibonacci numbers.

// **Input:** 6

// **Output:**


const fabonacciSeries = (n) => {
  let fibo = [];
  if (n <= 0) {
    return 0;
  }
  fibo[0] = 0;
  fibo[1] = 1;
  let sum = fibo[0] + fibo[1];
  for (let i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
    sum += fibo[i];
  }
  return sum;
};
console.log(fabonacciSeries(6));



