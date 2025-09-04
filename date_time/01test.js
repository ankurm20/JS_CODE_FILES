// Date and Time

let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())

// console.log(typeof myDate)

//let myCreateDate = new Date(2023, 0, 23)
//let myCreateDate = new Date(2023, 0, 23, 5 ,3)
// console.log(myCreateDate.toDateString())
// console.log(myDate.toLocaleString())

let myCreateDate = new Date("01-14-2025")
let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreateDate.getTime())

console.log(Math.floor(Date.now()/1000))