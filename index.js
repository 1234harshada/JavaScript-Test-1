// Question 1: Count Even and Odd Numbers
function countEvenOddNumbers(arr) {
  let even = 0;
  let odd = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even++;            //count even numbers
    } else {
      odd++;            //count odd numbers
    }
  }
  return { even: even, odd: odd };        //return both counts
}
console.log(countEvenOddNumbers([2, 3, 4, 5]));
console.log(countEvenOddNumbers([11, 14, 16, 17, 19]));








// Question 2: Grade Distribution
function gradeDistribution(marks) {
  let result = { A: 0, B: 0, C: 0, D: 0, F: 0 };          //grade counters
  for (let i = 0; i < marks.length; i++) {
    let m = marks[i];
    if (m >= 90) result.A++;       //grade A
    else if (m >= 80) result.B++;  //grade B
    else if (m >= 70) result.C++;  //grade C
    else if (m >= 60) result.D++;  //grade D
    else result.F++;               //grade F
  }
  return result;
}
console.log(gradeDistribution([95, 82, 67, 50]));
console.log(gradeDistribution([91, 59, 76, 88]));









// Question 3: Check All Positive Numbers
function allPositive(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) {
      return false;         //return false if any non-positive found
    }
  }
  return true;             //all numbers are positive
}
console.log(allPositive([1, 2, 3, 4]));
console.log(allPositive([-1, 0, 5]));









// Question 4: First Number Greater Than 50
function firstGreaterThan50(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 50) {
      return arr[i];            //return first number > 50
    }
  }
  return -1;                    //if not found
}
console.log(firstGreaterThan50([10, 25, 60, 40]));
console.log(firstGreaterThan50([45, 52, 19]));











// Question 5: Leap Year Checker
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;               //it's a leap year
  }
  return false;                //not a leap year
}
console.log(isLeapYear(2024));
console.log(isLeapYear(2023));










// Question 6: Double the Elements
function doubleElements(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);                //multiply each by 2
  }
  return result;
}
console.log(doubleElements([1, 2, 3]));
console.log(doubleElements([5, 10]));











// Question 7: Filter Out Even Numbers
function getOddNumbers(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);             //add odd numbers
    }
  }
  return result;
}
console.log(getOddNumbers([1, 2, 3, 4, 5]));
console.log(getOddNumbers([10, 15, 20, 25]));











// Question 8: Total Character Count in Strings
function totalChars(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i].length;           //add string length
  }
  return total;
}
console.log(totalChars(["hi", "world"]));
console.log(totalChars(["a", "ab", "abc"]));











// Question 9: Get Last 3 Items
function lastThree(arr) {
  let result = [];
  for (let i = arr.length - 3; i < arr.length; i++) {
    if (i >= 0) {
      result.push(arr[i]);                //get last 3 elements
    }
  }
  return result;
}
console.log(lastThree([1, 2, 3, 4, 5]));
console.log(lastThree([10, 20, 30, 40]));











// Question 10: Remove Element at Index 2
function removeAtIndex2(arr) {
  arr.splice(2, 1);                //remove 1 element at index 2
  return arr;
}
console.log(removeAtIndex2([1, 2, 3, 4]));
console.log(removeAtIndex2([10, 11, 12, 13]));










// Question 11: Capitalize First Letter
function capitalizeWords(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    result.push(word[0].toUpperCase() + word.slice(1));            //capitalize first letter
  }
  return result;
}
console.log(capitalizeWords(["hello", "world"]));
console.log(capitalizeWords(["code", "test"]));











// Question 12: Check Divisibility by 5
function hasDivBy5(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 5 === 0) {
      return true;             //return true if any number divisible by 5
    }
  }
  return false;             //otherwise false
}
console.log(hasDivBy5([3, 6, 10, 14]));
console.log(hasDivBy5([2, 4, 6]));











// Question 13: Find Index of First Negative
function firstNegativeIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      return i;               //return index of first negative number
    }
  }
  return -1;                  //return -1 if not found
}
console.log(firstNegativeIndex([1, 2, -3, 4]));
console.log(firstNegativeIndex([5, 7, 8]));












// Question 14: Count Word Frequencies
function wordFrequencies(arr) {
  let freq = {};
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    if (freq[word]) {
      freq[word]++;               //increase count if already exists
    } else {
      freq[word] = 1;             //first time add
    }
  }
  return freq;
}
console.log(wordFrequencies(["apple", "banana", "apple"]));
console.log(wordFrequencies(["x", "x", "y"]));












// Question 15: Group Strings by Length
function groupByLength(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    let len = word.length;
    if (!obj[len]) {
      obj[len] = [];               //if group doesn't exit , create it
    }
    obj[len].push(word);          //add word to correct group
  }
  return obj;
}
console.log(groupByLength(["hi", "yes", "no", "maybe"]));
console.log(groupByLength(["a", "ab", "abc"]));












// Question 16: Convert Array to Object by ID
function arrayToObject(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    obj[item.id] = item.name;                    //use id as key and name as value
  }
  return obj;
}
console.log(arrayToObject([{ id: 1, name: 'A' }, { id: 2, name: 'B' }]));
console.log(arrayToObject([{ id: 3, name: 'X' }, { id: 4, name: 'Y' }]));











// Question 17: Count Data Types
function countTypes(arr) {
  let counts = {};
  for (let i = 0; i < arr.length; i++) {
    let type = typeof arr[i];
    if (counts[type]) {
      counts[type]++;               //add to existing type count
    } else {
      counts[type] = 1;             //start count for new type
    }
  }
  return counts;
}
console.log(countTypes([1, "hi", true, {}]));
console.log(countTypes(["x", "y", 5]));











// Question 18: Flatten One-Level Nested Array
function flattenArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        result.push(arr[i][j]);                       //flatten inner array
      }
    } else {
      result.push(arr[i]);                             //push normal element
    }
  }
  return result;
}
console.log(flattenArray([1, [2, 3], 4]));
console.log(flattenArray(["a", ["b", "c"]]));










// Question 19: Remove Duplicate Numbers
function removeDuplicates(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);                  //add only if not already in unique
    }
  }
  return unique;
}
console.log(removeDuplicates([1, 2, 2, 3]));
console.log(removeDuplicates([4, 4, 5]));













// Question 20: Find Longest Word
function longestWord(arr) {
  let longest = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];                          //update longest if current is longer
    }
  }
  return longest;
}
console.log(longestWord(["hi", "hello", "goodbye"]));
console.log(longestWord(["short", "longer", "lengthiest"]));