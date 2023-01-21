function intersection(a, b) {
    let map = new Map();
    let set = new Set();

    a.forEach((element) => map.set(element));

    b.forEach((element) => {
        if (map.has(element)){
            set.add(element)
        }
    })

    let output = [...set];
    return output;
}

module.exports = intersection;

