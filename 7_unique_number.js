const remove_duplicate = (numbers) => {
    let temp = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] != numbers[i + 1]) {
            temp.push(numbers[i]);
        }
    }
    return temp;
};

let numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
const result = remove_duplicate(numbers);
console.log(result);
