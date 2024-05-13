const monthlySavings = (payments, livingCost) => {
    if (Array.isArray(payments) && Number.isInteger(livingCost)) {
        payments = payments.map((el) => {
            if (el >= 3000) {
                return el - (20 * el) / 100;
            } else {
                return el;
            }
        });
        const total_income = payments.reduce((acc, cur) => acc + cur, 0);
        console.log(total_income);
        if (total_income - livingCost < 0) {
            return "Earn More";
        } else {
            return total_income - livingCost;
        }
    } else {
        return "Invalid Input!";
    }
};

const payments = [900, 2700, 3400];
const livingCost = 10000;
const result = monthlySavings(payments, livingCost);
console.log(result);
