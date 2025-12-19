const pro = new Promise((resolve, reject) => {

  const innerpro = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1) // 4
    }, 0)
    console.log(2) // 1
    resolve(3)
  })
  innerpro.then((res) => console.log(res))

  resolve(4) // 4

  console.log('pro') // 2
})

pro.then((res) => console.log(res))

console.log('end') // 3

2
pro
end
3
4


