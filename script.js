function fibs(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    if (i < 2) {
      arr.push(i);
    } else {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
  }
  console.log(arr);
}


function fibsRec(n, arr = [0, 1]) {
    // Base case: return the array when we reach the desired length
    if (n <= arr.length) {
      return arr.slice(0, n); // Slice to ensure we return only `n` numbers
    }
  
    // Add the next Fibonacci number by summing the last two numbers in the array
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  
    // Recursive call
    return fibsRec(n, arr);
  }
  
  console.log(fibsRec(8));
  


