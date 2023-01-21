/**
 * return a Map of the unique letters and arrays of words that are made up of those letters
 * @param {array} words An array  of words
 */
function sameLetters(words) {
    let results = new Map();
    words.forEach((word) => {
        word.toLowerCase();
        const noDupes = new Set(word);
        const noDupesArray = [...noDupes];
        noDupesArray.sort();
        let joined = noDupesArray.join("");

        if (results.get(joined)){
            results.get(joined).push(word)
        }
        else {
            results.set(joined, [word])
        }

    })
    return results;
}

module.exports = sameLetters;

let words = ["pair", "per", "pole", "pear", "peer", "reap", "lope"]

console.log(sameLetters(words))