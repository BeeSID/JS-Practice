var arr = [1 , 2 , 'Users' , true , false]

// console.log(arr)


// replacing the elemennt

arr[2] = 'hello'

// The below method used to add an data in the end of an array
arr.push(0)
arr.splice(arr.length, 2, 3)
arr[arr.length]=90
console.log("The first array " + arr)
// The below code is update in the array element
arr.push(arr[2]=91)

console.log(arr)

console.log("The Length of an is " + arr.length)