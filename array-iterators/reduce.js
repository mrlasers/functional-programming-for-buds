// const arr = [1, 2, 3, 4, 10, 15, 20]

// const sumArr = arr.reduce(
//   (previousValue, currentValue) => {
//     // [ 1 =  0  1
//     //   2 =  1  2
//     //   3 =  3  3
//     //   4 =  6  4
//     //  10 = 10 10
//     //  15 = 20 15
//     //  20 = 35 20
//     // ]
//     const nextValue = previousValue + currentValue

//     console.log(previousValue, currentValue, nextValue)

//     return nextValue
//   },
//   0 // initialValue
// )

// const dogs = [
//   {
//     fname: 'Kodabears',
//     lname: 'Lustan',
//     age: 8,
//   },
//   {
//     fname: 'Coral',
//     lname: 'Pew',
//     age: 7,
//   },
//   {
//     fname: 'Timothy',
//     lname: 'Pew',
//     age: 40,
//   },
// ]
// console.log('dogs', dogs)

// const dog1 = dogs[0]

// const dogsResult = {
//   [dog1.fname + ' ' + dog1.lname]: dog1.age,
// }

// console.log(dogsResult)

// const expected = {
//   'Kodabears Lustan': 8,
//   'Coral Pew': 7,
// }

// const final = dogs.reduce(function (acc, dog) {
//   return {
//     ...acc,
//     [dog.fname + ' ' + dog.lname]: dog.age,
//   }
// }, {})

// console.log('final', final)

const employees = [
  {
    id: 1000,
    fname: 'Timothy',
    lname: 'Poopoo',
    age: 40,
    salary: 1_000_000,
  },
  {
    id: 1001,
    fname: 'David',
    lname: 'Opoheimen',
    age: 21,
    salary: 999_999,
  },
]

const idToFind = 1001

const david = employees.find((emp) => emp.id === idToFind)

const employeeDirectory = employees.reduce(function (directory, employee) {
  return {
    ...directory,
    [employee.id]: employee,
  }
}, {})

// console.log(employeeDirectory)

const mappedEmployeeNames = employees.map((emp) => emp.fname + ' ' + emp.lname)

console.log(mappedEmployeeNames)

const reducedEmployeeNames = employees.reduce(
  (acc, emp) => [...acc, emp.fname + ' ' + emp.lname],
  []
)

console.log(reducedEmployeeNames)

const filteredEmployees = employees.filter((emp) => emp.salary < 1_000_000)

console.log('< $1m', filteredEmployees)

const reducedFilteredEmployees = employees.reduce((acc, emp) => {
  return [...acc, emp]
}, [])

console.log('< $1m', reducedFilteredEmployees)
