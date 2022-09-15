// "normal"
const add = (x, y) => x + y

// "curried"
const addC = (x) => (y) => x + y

const arr = [1, 2, 3, 4, 5]

const added1 = arr.map((n) => n + 1) // [2, 3, 4, 5, 6]

const added3 = added1.map((n) => n + 2) // [4, 5, 6, 7, 8]

const add1 = addC(1)
const add2 = addC(2)

const c_added1 = arr.map(add1)

const c_added3 = c_added1.map(add2)

const c_added3_once_ = arr.map((n) => add2(add1(n)))
const c_added3_once = arr.map(ourMapper)

function ourMapper(n) {
  //  1, 2
  const one = add1(n) //  2, 3
  const two = add2(one) //  4, 4

  return two
}
