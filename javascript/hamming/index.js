// Define your Hamming class here.
// `npm test` to ensure the unit tests pass and
// your code meets all of the conditions.
// You may use ES6 or ES5 to solve.

const zip = (arr, ...arrs) => {
    return arr.map((val, i) => arrs.reduce((a, arr) => [...a, arr[i]], [val]));
}

class Hamming {
    compute(a, b) {
        a = Array.from(a)
        b = Array.from(b)
        if (a.length !== b.length) {
            throw "DNA strands must be of equal length.";
        } else {
            var i = 0;
            zip(a, b).forEach(pair => {
                if (pair[0] !== pair[1]) i++;
            });
            return i;
        }
    }
}

module.exports = Hamming;
