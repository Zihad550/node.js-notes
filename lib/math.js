/*
 * title: Math library
 * Description: utility library for math related functions
 * author: Jehad Hossain
 * date: 25-02-2022
 */

// math object - module scaffolding
const math = {};

// inspired by stack overflow
math.getRandomNum = function getRandomNumber(min, max) {
    // min and max included
    let minimum = min;
    let maximum = max;
    minimum = typeof minimum === 'number' ? minimum : 0;
    maximum = typeof maximum === 'number' ? maximum : 0;
    return Math.floor(Math.random() * (maximum - minimum + 1) + min);
};
// export the library
module.exports = math;
