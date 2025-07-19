// 1. Pyramid Pattern with Spaces
let n1 = 3;
for(let i = 1; i <= n1; i++){
  let line = "";
  for(let s = 1; s <= n1 - i; s++){
    line += " ";                                    // spaces before stars
  }
  for(let star = 1; star <= 2 * i - 1; star++){
    line += "*";                                    // stars
  }
  console.log("Pyramid Row", i + ":", line);
}














// 2. Square with Border Only
let n2 = 4;
for(let i = 1; i <= n2; i++){
  let row = "";
  for(let j = 1; j <= n2; j++){
    if(i == 1 || i == n2 || j == 1 || j == n2){
      row += "*";                                    // borders
    } else {
      row += " ";                                   // empty space inside
    }
  }
  console.log("Square Row", i + ":", row);
}














// 3. Count Binary Zeros and Ones
let binary = "101010110";
let count1 = 0;
let count0 = 0;

for(let i = 0; i < binary.length; i++){
  if(binary[i] == "1"){
    count1++;
  } else if(binary[i] == "0"){
    count0++;
  }
}
console.log("Total 1s:", count1, "| Total 0s:", count0);
















// 4. Group by Role
let users = [
  { name: "A", role: "admin" },
  { name: "B", role: "user" },
  { name: "C", role: "admin" }
];

let roles = {
  admin: [],
  user: []
};

for(let i = 0; i < users.length; i++){
  if(users[i].role === "admin"){
    roles.admin.push(users[i].name);
  } else {
    roles.user.push(users[i].name);
  }
}
console.log("Grouped by Role:", roles);














// 5. Filter Unique Binary Strings
let binArr = ["101", "101", "000", "111", "000"];
let uniqueArr = [];

for(let i = 0; i < binArr.length; i++){
  if(uniqueArr.indexOf(binArr[i]) === -1){
    uniqueArr.push(binArr[i]);                     // only add if not included before
  }
}
console.log("Unique Binary Strings:", uniqueArr);















// 6. Number Pyramid
let n3 = 5;
for(let i = 1; i <= n3; i++){
  let str = "";

  for(let j = 1; j <= i; j++){
    str += j;
  }

  for(let j = i - 1; j >= 1; j--){
    str += j;
  }

  console.log("Pattern Row", i + ":", str);
}















// 7. Diamond Pattern
let n4 = 4;

// Top part
for(let i = 1; i <= n4; i++){
  let spaces = "";
  for(let s = 1; s <= n4 - i; s++){
    spaces += " ";
  }
  let stars = "";
  for(let k = 1; k <= 2 * i - 1; k++){
    stars += "*";
  }
  console.log("Top Line", i + ":", spaces + stars);
}

// Bottom part
for(let i = n4 - 1; i >= 1; i--){
  let spaces = "";
  for(let s = 1; s <= n4 - i; s++){
    spaces += " ";
  }
  let stars = "";
  for(let k = 1; k <= 2 * i - 1; k++){
    stars += "*";
  }
  console.log("Bottom Line", i + ":", spaces + stars);
}