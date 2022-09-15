// "normal" version of basic arithmetic functions
function add(x, y) {
  return x + y
}

function sub(x, y) {
  return x - y
}

function mul(x, y) {
  return x * y
}

function div(x, y) {
  return x / y
}

// curried versions (takes each argument one at a time)
const addC = (x) => (y) => x + y

const subC = (x) => (y) => x - y

const mulC = (x) => (y) => x * y

const divC = (x) => (y) => x / y
