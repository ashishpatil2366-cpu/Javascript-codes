// we are using alias  name for  function

function add(n1=10,n2=30){
    console.log(`Addition - ${n1 + n2}`)
}

// function alias
const myadd = add

add(10, 20)
myadd(11, 22)
console.log(`typeof(myadd) - ${typeof (myadd)}`)
console.log(`myadd - ${myadd}`)

function greet(n1 = "excellent", n2 = "heavy") {
  console.log(`inside greet - ${n1}, ${n2}`);
}

const sayHello = greet;

sayHello("hi", "hello");
console.log(`typeof(sayHello) - ${typeof (sayHello)}`)
