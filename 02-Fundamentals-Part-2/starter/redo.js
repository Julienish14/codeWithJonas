//========== ******* CHALLENGES ******* ========

//CHALLENGE ONE: You are given a number say true or false if number is narcissistic ex: 153 -> 1^3 + 5^3 + 3^3

function isItNarcissistic(num) {
  const toStr = num.toString();
  const numLeng = toStr.length;
  let result = 0;
  for (let i = 0; i < numLeng; i++) {
    const y = parseInt(toStr[i]);
    result += Math.pow(y, numLeng);
  }
  return result === num;
}

console.log(isItNarcissistic(153));
console.log(isItNarcissistic(13));
