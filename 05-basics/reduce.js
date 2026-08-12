//reduce

// const mynum = [1,2,3,4,5,6]

// const mytotal = mynum.reduce(function (acc, currval){
//   console.log(`acc: ${acc} currval: ${currval} `);
//     return acc + currval
// }, 0)

// console.log(mytotal);



// +++++++++++++ or +++++++++++++++++++++



// const mytotal =  mynum.reduce( (acc, currval) => {
// console.log(`acc: ${acc} currval: ${currval}`);
// return acc + currval}, 0)
// console.log(mytotal);



const shoppingCart = [
  {
    itemName: "js course",
    price: 3456
  },
  {
    itemName: "mobile dev course",
    price: 2345
  },
  {
    itemName: "web dev course",
    price: 5678
  },
  {
    itemName: "py course",
    price: 6789
  }
]

const add = shoppingCart.reduce(  (acc, curr) => {return acc + curr.price }, 0)
console.log(add);
