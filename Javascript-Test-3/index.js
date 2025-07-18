// Q1: First Non-Repeating Element
function findFirstUnique(arr){
    for (let i = 0; i < arr.length; i++){         // Check each element one by one
        let same = 0;                             // This will be 1 if the element is repeated
        for (let j = 0; j < arr.length; j++){     // Compare current element with all others
            if (arr[i] === arr[j] && i !== j) {   // If same value found at different index
                same = 1;                         // Mark it as repeated
                break;                            // No need to check more, break the loop
            }
            
        }
        if (same === 0) return arr[i];          // If element is not repeated, return it
    }
}
console.log(findFirstUnique([4, 5, 1, 2, 0, 4, 1, 0]));










// Q2: Check if two Objects are same
function checkSame(obj1, obj2) {
    let a = 0;
    for (let i in obj1) {                      // Loop through all keys in obj1
        a++;
        if (obj1[i] !== obj2[i]) return false;  // If any value in different, return false
    }
    let b = 0;
    for (let j in obj2) {                      // Loop through keys in obj2 to count
        b++;
    }
    if (a !== b) return false;                 // If number of keys are different, return false
    return true;                               // If everything matches, return true
}
console.log(checkSame({ a: 1, b: 2 }, { b: 2, a:1}));











// Q3: Merge Arrays and remove Duplicates
function mergeRemove(a, b) {
    let final = [];
    for (let i = 0; i < a.length; i++){
        let found  = false;
        for (let j = 0; j < final.length; j++) {
            if (a[i] === final[j]) found = true;            // Check if value already exists in final
        }
        if ( !found) final.push(a[i]);                      // If not found, add to final
    }
    for (let i= 0; i < b.length; i++) {
        let found = false;
        for (let j = 0; j < final.length; j++) {
            if (b[i] === final[j]) found = true;           // Same check for second array
        }
        if ( !found) final.push(b[i]);                    // Add only if it's not already in final
    }
    return final;
}
console.log(mergeRemove([1, 2, 3], [2, 3, 4]));











// Q4: Convert Array of Objects to One Objects
function arrObj(arr) {
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        result[arr[i].id] = arr[i].name;           // Use id as key and name as value
    }
    return result;
}
console.log(arrObj([{ id: 1, name: "A" }, { id: 2, name: "B" }]));











//Q5: Pair with Given Sum
function checkPair(arr, sum) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0 ; j < arr.length; j++) {
            if (i !== j && arr[i] + arr[j] === sum) return true;        // If any two values make the sum, return true
        }
    }
    return false;                                                      // If no such pair, return false
}
console.log(checkPair([1, 2, 4, 7], 6));













//Q6: Find Missing Number
function missingNum(arr) {
    for (let i = 0; i < arr.length -1; i++) {
        if (arr[i + 1] !== arr[i] + 1) return arr[i] + 1;              // If next number is not +1, return the missing number
    }
}
console.log(missingNum([1, 2, 3, 5, 6]));











//Q7: Object to key-Value Array
function ObjToArr(obj) {
    let result = [];
    for (let key in obj) {
        let temp = [];
        temp[0] = key;                  // First value is the key
        temp[1] = obj[key];             // Second Value is the value
        result.push(temp);              // Push this pair into result array
    }
    return result;
}
console.log(objToArr({ a: 1, b:2 }));












//Q8: Count 1s in Binary
function oneCount(n) {
    let binary = " ";
    while (n > 0) {
        binary  = (n % 2) + binary;                 // Convert number to binary string
        n = Math.floor(n / 2);
    }
    let count = 0; 
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === "1") count++;            // Count how many 1s are in the binary string
    }
    return count;
}
console.log(oneCount(9));












//Q9: Binary Search
function bSearch(arr, num) {
    let start = 0;
    let end = arr.length -1;
    while (start <= end) {
        let mid = Math.floor((start + end) /2);          // Find middle index
        if (arr[mid] === num) return mid;                // If found, return the index
        else if (arr[mid] < num) start = mid + 1;        // If target is greater, go right
        else end = mid - 1;                              // If target is smaller, go left
    }
    return - 1;                                          // If not found, return -1
}
console.log(bSearch([1, 3, 5, 7, 9], 5));














//Q10: Frequency Count
function freq(arr){
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        if (reult[arr[i]] === undefined) {
            result[arr[i]] = 1;                                  // If number is seen first time, set count to 1 
        } else {
            result[arr[i]] = reult[arr[i]] +1;                   // If already present, add 1 to its count
        }
    }
    return result;
}
console.log(freq([1, 1, 2, 3, 3, 3]));

