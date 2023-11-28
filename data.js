const setOne = [3, 1, 7, 9];
const setTwo = [2, 4, 1, 9, 3];

function newArr(arr1, arr2) {
  let sum = 0

  for(let char of arr1) {
    if(!arr2.includes(char)) {
      sum += char
    }
  }
  for(let char of arr2) {
    if(!arr1.includes(char)) {
      sum += char
    }
  }

  return sum
}

// console.log(newArr(setOne, setTwo));

function dotProduct(vec1, vec2) {
  if(vec1.length !== vec2.length) {
    return "Vectors of different dimensions cannot be multiplied";
  }

  let ps = 0;

  for(let i = 0; i < vec1.length; i++) {
    for(let j = i; j <= vec2.length; j++) {
      if(i === j) {
        ps += vec1[i] * vec2[j];
        continue;
      }
    }
  }

  if(ps == 0) {
    return "The dot product of both vectors are orthogonal";
  }

  return ps;
}

console.log(dotProduct([-5,3], [3,5]));