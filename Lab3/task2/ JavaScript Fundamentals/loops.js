let i = 3;

while (i) {
  alert(i--);
}

let s = 0;
while (s++ < 5) alert(s);

let d = 0;
while (++d < 5) alert(d);

for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert(i);
  }
}

let w = 0;
while (w < 3) {
  alert(`number ${w}!`);
  w++;
}

let num;
do {
  num = prompt("number", 0);
} while (num <= 100 && num);
