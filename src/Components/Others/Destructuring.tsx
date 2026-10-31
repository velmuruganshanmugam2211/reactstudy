import React from 'react'

let arr = [100,200,300,400]

let fav = arr[0]
let [a,b,c,d] = arr
// console.log(fav);
console.log(a,b,c,d);

// let arr1 = [10,20,30,40,5,4,5,6,7,8,9,10]
// let fval = arr1[0]
// // let [a,b,c,d] = arr
// // let [a,,,d] = arr I
// fet [a1,a2, a3,...a4] = arr
// console.log(a1,a2, a3, a4);


// Nesteddestructure
// let nestArr = [1,2,3,4, [10,20, [30,40]]]
// let [a,b,c,d, [a1,a2, [a11, a12]]] = nestArr
// console.log(d, a12);

function destructuring() {
  return (
    <div>destructuring</div>
  )
}

export default destructuring