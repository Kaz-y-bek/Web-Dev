let array = ["Jack", "John"];

array.push("some word");
array[(Math.floor(array.length) - 1) / 2] = "other world";
array.shift();
array.unshift("first", "second");

console.log(array);

function inputNumbers() {
    let arr = [];

    while (true) {
        let value = prompt("Enter a number");

        if (value === "" || value === null || !isFinite(value)) break;

        arr.push(+value);
    }

    let sum = 0;

    for (let number of arr) {
        sum += number;
    }

    alert(sum);
}

function getMaxSubSum(array) {
    let maxSum = 0;
    let partialSum = 0;

    for (let number of array) {
        partialSum += number;
        maxSum = Math.max(maxSum, partialSum);

        if (partialSum < 0) {
            partialSum = 0;
        }
    }

    return maxSum;
}

alert(getMaxSubSum([-1, 2, 3, -9]));
alert(getMaxSubSum([-1, 2, 3, -9, 11]));
alert(getMaxSubSum([-2, -1, 1, 2]));
alert(getMaxSubSum([100, -9, 2, -3, 5]));
alert(getMaxSubSum([1, 2, 3]));
alert(getMaxSubSum([-1, -2, -3]));

function camelize(str) {
    return str
        .split("-")
        .map((word, index) =>
            index === 0
                ? word
                : word[0].toUpperCase() + word.slice(1)
        )
        .join("");
}

function filterRange(arr, a, b) {
    return arr.filter(item => a <= item && item <= b);
}

let arr1 = [5, 3, 8, 1];
let filtered = filterRange(arr1, 1, 4);

alert(filtered);
alert(arr1);

let arr2 = [5, 2, 1, -10, 8];
arr2.sort((a, b) => b - a);
alert(arr2);

function copySorted(arr) {
    return arr.slice().sort();
}

let arr3 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr3);

alert(sorted);
alert(arr3);

function Calculator() {
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };

    this.calculate = function (str) {
        let split = str.split(" ");
        let a = +split[0];
        let op = split[1];
        let b = +split[2];

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](a, b);
    };

    this.addMethod = function (name, func) {
        this.methods[name] = func;
    };
}

let calc = new Calculator();

alert(calc.calculate("3 + 7"));

calc.addMethod("*", (a, b) => a * b);
alert(calc.calculate("3 * 7"));
