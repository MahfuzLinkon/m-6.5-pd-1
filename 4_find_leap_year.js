const find_leap_year = (year) => {
    if (year % 400 == 0) {
        console.log(`Year ${year} is leap year!`);
    } else if (year % 100 == 0) {
        console.log(`Year ${year} is not leap year!`);
    } else if (year % 4 == 0) {
        console.log(`Year ${year} is leap year!`);
    } else {
        console.log(`Year ${year} is not leap year!`);
    }
};
let year = 3000;
find_leap_year(year);
