// simple json sayntax using {}

let s1 ={
 "name":"ashish",
 "age":20,
 "emailid " :"ashishpatil2366@gmail.com"
}

console.log(s1)

//  json syntax using new
let s2= new Object()
s2.name = "ashish"
s2.age  = 20
s2.lastname="Patil"

console.log(s2)

// constructor Function 

// Constructor Function
function Student(name, age) {
    this.name = name
    this.age = age
}

const s3 = new Student()
console.log(typeof (s1))
console.log(s3)

const s4 = new Student("Anil", 35)
console.log(s4)

const s5 = new Student("Mukesh", 30)
s5.mobile = "9876543210"
s5["email id"] = 'mukesh@gmail.com'
console.log(s5)