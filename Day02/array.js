// // Array 

// let a1 =[]
// console.log(a1)

// let a2 = [10,20]
// console.log(a2)

// const arr3 = []
// arr3.push(10)
// arr3.push(20)
// arr3.push(30)
// arr3.push(40)

// arr3.pop()
// console.log(arr3.length)
// console.log(arr3)

// // second form of array

// let a3=[1,2,3,4,5,]
// for(let i= 0; i < a3.length; i++)
//     console.log( `${a3[i]}`)

// for (let element of a3)
//     console.log(`${element}`)

// // third demo of array

// let a4=[1,2,3,4,5]
// console.log(a4)

// let a5=["ashish","sarvesh","tarun"]
// console.log(a5)

// let a6=[function (n1,n2) {return n1+n2},function (n1,n2) {return n1+n2}]
// console.log(a6)
// console.log(a6[0])
// console.log(a6[0](10, 20))

// console.log(a6[1])
// console.log(a6[1](10, 20))

// let a7=[{"name":"ashish","age":20},{"name":"sarvesh","age":20}]
// console.log(a7[0])
// console.log(a7[1])
// console.log(a7)

// array at 

// Array
const arr1 = [10, 20, 30, 40, 50, 60]
console.log(arr1)
console.log(arr1[2])
console.log(arr1.at(2))

console.log(arr1[-5])
console.log(arr1.at(-5))

// delete/remove the elements from the array
arr1.splice(2, 3)
console.log(arr1)


