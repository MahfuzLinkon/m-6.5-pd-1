const get_grade = (mark) => {
    if (mark >= 80 && mark <= 100) return "A+";
    else if (mark >= 70 && mark < 80) return "A";
    else if (mark >= 60 && mark < 70) return "A-";
    else if (mark >= 50 && mark < 60) return "B";
    else if (mark >= 40 && mark < 50) return "C";
    else if (mark >= 33 && mark < 40) return "D";
    else if (mark >= 0 && mark < 33) return "F";
    else return "Invalid Grade !";
};

let mark = -1;
const result = get_grade(mark);
console.log(`You got: ${result}`);
