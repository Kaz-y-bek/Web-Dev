let input = "3 4 5 6 7 8 9 10".split(" ");
let res = [];
for (let i = 0; i < input.length; i++) {
    if (Number(input[i]) %2 === 0) {
        res.push(input[i]);
    }
}

// res.push(input[3]/2);

// console.log(res);
// console.log(res.join(" "));

// let input = "qeww".split("");
// if(input === input.reverse()){
//     console.log("YES");
// }

// let input = "qeq".split("");
// let reversed = [...input].reverse();  // копируем и переворачиваем

// if(input.join("") === reversed.join("")){
//     console.log("YES");
// }else{
//     console.log("NO");
// }

const input = require('fs').readFileSync('/dev/stdin','utf8').trim();

let reversed = input.split("").reverse().join("");

if(input === reversed){
  console.log("YES");
}else{
  console.log("NO");
}
