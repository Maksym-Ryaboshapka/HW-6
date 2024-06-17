// Task 1

let i = 0;

while (i < 10) {
	i++;

	console.log(i);
}

// Task 2

for (let j = 2; j <= 20; j++) {
  if (j % 2 !== 0) {
    continue;
	}

	console.log(j);
}

// Task 3

for (let k = 1; k <= 10; k++) {
	console.log(`${k} * 7 = ${k * 7}`);
}

// Task 4

const arr1 = [1, 2, 3, 4, 5];
let l = -1;

while (l < 4) {
  l++;

  console.log(arr1[l]);
}

// Task 5

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let m = 0; m <= 9; m++) {
  if (m === 7) {
    break;
  }

  console.log(arr2[m]);
}

// Task 6

const number = prompt("Введіть число");

for (let n = 1; n < number; n++) {
  if (n >= number) {
    break;
	}

	alert(n);
}

// Task 7

let o = 0;

while (o < 20) {
  o++;

  if (o % 3 === 0) {
    continue;
  }

  console.log(o);
}
