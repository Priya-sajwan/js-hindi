// filter maps

// const mynum = [1, 2, 3, ,4 ,5, 6, 7, 8 ]
// const num = mynum.filter( (item) => {
//     return num > 4
// } )
// console.log(num);


// const mybook= [
//     {
//         bookname: "b1",  publish: 1981 , genre: "f" 
      
//     },
//     {
//         bookname: "b2",  publish: 1983, genre: "non-f" 
      
//     },
//     {
//         bookname: "b3",  publish: 1984, genre: "f" 
      
//     },
//     {
//         bookname: "b4",  publish:1985 , genre: "non-f" 
      
//     },
// ]
//  const record = mybook.filter( (bk) => bk.genre == "f" )
//  console.log(record);


 const mynum = [1, 2, 3, 4 ,5, 6, 7, 8 ]
 const newNum = mynum
        .map( (num) => num * 10 )
        .map( (num) => num + 10 )
        .filter((num) => num > 6 )
 console.log(newNum);