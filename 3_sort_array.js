const numbers = [
    13, 7, 18, 5, 20, 3, 11, 17, 4, 10, 14, 9, 16, 1, 19, 8, 6, 12, 2, 15,
];

for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] > numbers[j]) {
            temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
        }
    }
}

console.log(numbers);
