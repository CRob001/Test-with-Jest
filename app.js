const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
function fromEuroToDollar(euro) {
    return oneEuroIs.USD * euro
}
function fromEuroToYen(euro) {
    return oneEuroIs.JPY * euro
}
const fromEuroToPound = (value) => {
    return value * oneEuroIs.GBP 
}
const fromDollarToYen = (value) => {
    return Math.floor((value / 1.2 ) * 127.9)
}
function fromYenToPound(value) {
    return Math.floor((value / 127.9) * .8)
}
module.exports = { sum, fromEuroToDollar, fromEuroToPound, fromEuroToYen, fromDollarToYen, fromYenToPound };
