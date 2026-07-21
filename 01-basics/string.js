// various type of string's output 
  const name = "priya"
 const count = 50

console.log(`hello my name is ${name} and my repo count is ${count}`);

const  gamename = new String('  priya sajwan  ')
  console.log(gamename[0]);
  console.log(gamename[1]);

  console.log(gamename.length);
  console.log(gamename.toUpperCase());   // it is primitive datatype therefore it doesn't changes their origin value ..
console.log(gamename.charAt(6));  
console.log(gamename.substring(0, 6));  // here the 6th index letter not show.
console.log(gamename.slice(0, -3));      // in slice() we can provide negative values but
//                                          if we provide any negative in  substring then by default it starts with 0.  
console.log(gamename.trim()); 
console.log(gamename.replace('p', ' ')); 
