// arrays 

const myArray = new Array(2, 4, 6, 8, "priya")
// console.log(myArray);


//  myArray.push(34)
//  myArray.pop()
//  myArray.unshift(23)
//  myArray.shift()

//  console.log(myArray);
//  console.log(myArray.includes(2));


//  const newArray = myArray.join()
//  console.log( typeof myArray.join());





//       interview question 

//  const n1 = myArray.slice(1, 3)
//  console.log("A", myArray);
//  console.log(n1)                                                         
//  const myspli = myArray.splice(1, 3);                      
//  console.log("c", myArray);
//  console.log(myspli);


// one more example for better understanding..


 const one = new Array([7], 6,[5, 4], 3, [2, 1])

// const two = one.slice(4, 6)
// console.log("P", two);
//                                                     //   p; 3, 2    r: 3, 2, 1    i: 7,6,5,4
// const three = one.splice(4, 6)
// console.log("R", three);

// console.log("I", one)



// const two = one.flat(Infinity)
// console.log(two);









//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ merge ++++++++++++++++++++++++++++++++++++++++++++++++++++++


// const arrone =  [12, 23, 34, 45, 56, 67 ]
// const arrtwo =  ["priya", "archi", "tanu" ]
//  arrone.push(arrtwo)


// console.log(arrone);

//  const arr = arrone.concat(arrtwo)
// console.log(arr);


// const arr = [...arrone, ...arrtwo]
// console.log(arr);

 //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


console.log(Array.isArray("priya"));
console.log(Array.from("priya"));

console.log(Array.from({name : "priya"}));          // interview.



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) ;

