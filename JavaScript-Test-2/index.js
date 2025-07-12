// 1. Reverse an array
function reverseArr(data) {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    result = [data[i], result];          // add each element to front
  }
  return result;
}
console.log(reverseArr([1, 2, 3]));
console.log(reverseArr([10, 20, 30]));












// 2. Second largest number
function findSecondBig(arr) {
  let biggest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > biggest) {
      biggest = arr[i];              // find max
    }
  }
  let second = arr[0];
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] < biggest && arr[j] > second) {
      second = arr[j];                   // find just smaller than max
    }
  }
  return second;
}
console.log(findSecondBig([10, 5, 20, 8]));
console.log(findSecondBig([1, 2, 2, 3]));












// 3. Remove duplicates
function removeDups(list) {
  let clean = [];
  for (let i = 0; i < list.length; i++) {
    let found = false;
    for (let j = 0; j < clean.length; j++) {
      if (list[i] === clean[j]) {
        found = true;               // already in clean
      }
    }
    if (!found) {
      clean.push(list[i]);          // add only if not found
    }
  }
  return clean;
}
console.log(removeDups([1, 2, 2, 3]));
console.log(removeDups([5, 5, 5, 1]));












// 4. Check if arrays are equal
function areArraysSame(x, y) {
  if (x.length !== y.length) return false;           // diff size
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) return false;               // check each element
  }
  return true;
}
console.log(areArraysSame([1, 2, 3], [1, 2, 3]));
console.log(areArraysSame([1, 2], [2, 1]));














// 5. Rotate array right
function rotateRightArray(arr, k) {
  let total = arr.length;
  for (let i = 0; i < k; i++) {
    let last = arr[total - 1];             // take last element
    for (let j = total - 1; j > 0; j--) {
      arr[j] = arr[j - 1];                 // shift elements right
    }
    arr[0] = last;                          // place last to first
  }
  return arr;
}
console.log(rotateRightArray([1, 2, 3, 4], 2));
console.log(rotateRightArray([10, 20, 30], 1));













// 6. Count vowels
function countAllVowels(txt) {
  let vCount = 0;
  let vowels = "aeiouAEIOU";
  for (let i = 0; i < txt.length; i++) {
    let ch = txt[i];
    for (let j = 0; j < vowels.length; j++) {
      if (ch === vowels[j]) {
        vCount++;                    // match found
      }
    }
  }
  return vCount;
}
console.log(countAllVowels("hello"));
console.log(countAllVowels("JAVASCRIPT"));













// 7. Print triangle pattern
function triangleStars(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);                 // print row
  }
}
triangleStars(3);
triangleStars(2);














// 8. Factorial of number
function findFactorial(num) {
  let total = 1;
  for (let i = num; i >= 1; i--) {
    total *= i;                    // multiply one by one
  }
  return total;
}
console.log(findFactorial(5));
console.log(findFactorial(3));















// 9. Check if number is prime
function primeOrNot(n) {
  if (n < 2) return false;
  let isPrime = true;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrime = false;             // divisible
    }
  }
  return isPrime;
}
console.log(primeOrNot(7));
console.log(primeOrNot(9));













// 10. Fibonacci number at n position
function getFibo(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let f1 = 0;
  let f2 = 1;
  let next;
  for (let i = 2; i <= n; i++) {
    next = f1 + f2;                // sum last 2
    f1 = f2;
    f2 = next;
  }
  return f2;
}
console.log(getFibo(5));
console.log(getFibo(6));














// 11. Count frequency of elements
function countFreq(arr) {
  let freq = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (freq[num] == undefined) {
      freq[num] = 1;
    } else {
      freq[num]++;                // increase count
    }
  }
  return freq;
}
console.log(countFreq([1, 2, 2, 3]));
console.log(countFreq([4, 4, 4]));
















// 12. Invert object
function flipObj(obj) {
  let newObj = {};
  for (let key in obj) {
    let value = obj[key];
    newObj[value] = key;                // reverse key-value
  }
  return newObj;
}
console.log(flipObj({a:1, b:2}));
console.log(flipObj({x:'y', z:'w'}));












// 13. Merge two objects
function joinObjects(obj1, obj2) {
  let final = {};
  for (let i in obj1) {
    final[i] = obj1[i];                 // copy first
  }
  for (let j in obj2) {
    final[j] = obj2[j];                  // overwrite or add
  }
  return final;
}
console.log(joinObjects({a:1}, {b:2}));
console.log(joinObjects({x:10}, {x:20, y:30}));














// 14. Find key with highest value
function maxKey(obj) {
  let max = 0;
  let ans = "";
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      ans = key;
    }
  }
  return ans;
}
console.log(maxKey({a: 1, b: 5, c: 3}));
console.log(maxKey({x: 100, y: 99}));













// 15. Deep clone
function deepCopy(data) {
  let copy = Array.isArray(data) ? [] : {};
  for (let key in data) {
    let value = data[key];
    if (typeof value === "object" && value !== null) {
      copy[key] = deepCopy(value);               // recursive copy
    } else {
      copy[key] = value;
    }
  }
  return copy;
}
console.log(deepCopy({a:1, b:{c:2}}));
console.log(deepCopy({x:[1,2], y:{z:3}}));
















// 16. Check palindrome
function isPalin(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev = rev + str[i];                       // reverse string
  }
  return rev === str;
}
console.log(isPalin("madam"));
console.log(isPalin("hello"));













// 17. First non-repeating character
function firstUnique(str) {
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[j] === ch) {
        count++;                     // count occurence
      }
    }
    if (count === 1) {
      return ch;                     // found unique
    }
  }
  return null;
}
console.log(firstUnique("aabbcdd"));
console.log(firstUnique("xxyz"));














// 18. Reverse string manually
function reverseText(str) {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];                            // add backwards
  }
  return res;
}
console.log(reverseText("hello"));
console.log(reverseText("JS"));















// 19. Flatten nested array
function makeFlat(arr) {
  let flat = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let inner = makeFlat(arr[i]);                     // recursive flat
      for (let j = 0; j < inner.length; j++) {
        flat.push(inner[j]);
      }
    } else {
      flat.push(arr[i]);
    }
  }
  return flat;
}
console.log(makeFlat([1, [2, [3]], 4]));
console.log(makeFlat([[1], [2, 3]]));














// 20. Group objects by type
function groupByType(arr) {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    let t = arr[i].type;
    let name = arr[i].name;
    if (result[t] == undefined) {
      result[t] = [name];             // new type
    } else {
      result[t].push(name);          // push in array
    }
  }
  return result;
}
console.log(groupByType([
  {type: 'fruit', name: 'apple'},
  {type: 'fruit', name: 'banana'}
]));
console.log(groupByType([
  {type: 'a', name: 'x'},
  {type: 'b', name: 'z'}
]));