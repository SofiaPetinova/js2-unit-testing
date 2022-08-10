function sum(n1, n2) {
    return n1 + n2;
}

function allUpper(arr) {
    return arr.map(el => el.toUpperCase())
}

function firstUpper(arr) {
    return arr.map(el => el.charAt(0).toUpperCase() + el.slice(1).toLowerCase())
}

module.exports = {sum, allUpper, firstUpper};

