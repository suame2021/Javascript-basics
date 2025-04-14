function findFactors(numbber) {
  const factors = [];

  let i = 0;

  for (i = 1; i <= numbber; i++) {
    if (numbber % i === 0) {
      factors.push(i);
    }
  }

  return factors;
}

const nnum = 12;
const result = findFactors(num);
console.log(` The Factors of ${nnum} are :`, result);