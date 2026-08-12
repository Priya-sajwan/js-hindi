


// here we learn that how the child (ARRAY, STRING, FUNCTION) do not have an access to retrieve their parent(OBJECT) key-value pair values but (parent)object have an access to retrieve their child's(ARRAY, STRING, FUNCTION) value .

const myArray = ['p', 'r','i']
let heropower = {name : "priya",
    age: 20
}
Object.prototype.hitesh = function(){
    console.log('hitesh is present');

}
Array.prototype.hiteshsir = function(){
    console.log("hii ");
}

myArray.hitesh()
myArray.hiteshsir()
 heropower.hitesh()
 heropower.hiteshsir()  // why we get an error=> heropower is an object and hiteshsir is an array -> read top most line :


