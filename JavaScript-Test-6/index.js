// Rotate String Comparsion

function isRotation(str1, str2) {
  if (str1.length !== str2.length) return false;             // Lengths not equal

  let combined = str1 + str1;                        // Combine string

  for (let i = 0; i <= combined.length - str2.length; i++) {
    let check = "";                                              // Store substring
    for (let j = 0; j < str2.length; j++) {
      check += combined[i + j];                               // Build substring
    }
    if (check === str2) return true;                          // Found match
  }

  return false;                                              // No match found
}


let str1 = "waterbottle";
let str2 = "erbottlewat";
console.log(isRotation(str1, str2)); 



















// Longest Consecutive Subsequence (Unsorted Array)

function findLongestSequence(arr) {
  let tracker = {};                                // Store all numbers
  for (let i = 0; i < arr.length; i++) {
    tracker[arr[i]] = true;                       // Mark as true
  }

  let longest = 0;                                // Final result

  for (let key in tracker) {
    let current = Number(key);                    // Convert to number

    if (!tracker[current - 1]) {                  // Start of sequence
      let temp = current + 1;                     // Next number
      let count = 1;                              // Sequence count     

      while (tracker[temp]) {                     // Continue if found
        count++;
        temp++;
      }

      if (count > longest) {
        longest = count;                       // Update longest
      }
    }
  }

  return longest;
}


let nums1 = [100, 4, 200, 1, 3, 2];
console.log(findLongestSequence(nums1)); 

let nums2 = [0, 3, 7, 2, 5, 8, 4, 6, 1];
console.log(findLongestSequence(nums2)); 























// Longest Substring Without Repeating Characters 

function uniqueSubstringLength(s) {
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    let letters = {};                                // Track chars
    let length = 0;                                  // Current length

    for (let j = i; j < s.length; j++) {
      if (letters[s[j]]) {
        break;                                       // Found repeat
      } else {
        letters[s[j]] = true;
        length++;                                    // Count increase
      }
    }

    if (length > max) {
      max = length;                                  // Update max
    }
  }

  return max;
}


console.log(uniqueSubstringLength("abcabcbb")); 
console.log(uniqueSubstringLength("bbbbb"));    
console.log(uniqueSubstringLength("pwwkew"));   