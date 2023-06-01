let num = [6, 28, 12, 496, 8, 14];

function isPerfectNumber(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num;
}

function countPerfectNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (isPerfectNumber(arr[i])) {
      count++;
    }
  }
  return count;
}

const perfectCount = countPerfectNumbers(num);
document.write(perfectCount);
