const arr = [1, 2, 3, 4, 10, 15, 20] // ...

const not = (predicate) => (x) => !predicate(x)

const isEven = (n) => n % 2 === 0
const isOdd = not(isEven)

const isDivTen = (n = n % 10 === 0)

const evens = arr.filter((n) => isEven(n)) // [2, 4, 10, 20]

const evenByTen = evens.filter((n) => isDivTen(n)) // [10, 20]

const evenByTen_once = arr.filter((n) => isEven(n) && isDivTen(n))
