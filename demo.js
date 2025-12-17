let result = []
let a = 3
let total = 0
function foo(a) {
  let i = 0
  for (; i < 3; i++) {
    result[i] = function () {
      total += i * a
      console.log(total)
    }
  }
}

foo(1)
result[0]()
result[1]()
result[2]()

console.log(1)
setTimeout(() => {
  console.log(2)
}, 0)

new Promise((resolve) => {
  console.log(3)
  resolve()
}).then(() => console.log(4))
