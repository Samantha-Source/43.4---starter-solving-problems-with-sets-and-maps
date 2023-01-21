/**
 * Return an array of pairs of numbers that sum to N
 * @param {Array} A an array of numbers
 * @param {Number} N an integer value
 */
function sumPairs(A, N) {
    let numbers = new Map();
    let solution = new Map();

    A.forEach((e) => numbers.set(e));


    A.forEach((e) => {
        let diff = N - e;
        if (diff !== e){
            if(numbers.has(diff) && e < diff){
                solution.set([e, diff])
            }
            if(numbers.has(diff) && diff < e){
                null;
            }
        }
    })

    let output = [];
    for (let key of solution.keys()){
        output.push(key)
    }

    return output;
}

module.exports = sumPairs;

let A = [1, 2, 3, 4]
let N = 7
console.log(sumPairs(A, N))