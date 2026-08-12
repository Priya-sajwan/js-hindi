// const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descripter);

const chaii = {
    name: "ginger chaii",
    price: "250",
    isAvailable:"true"
}
// console.log(Object.getOwnPropertyDescriptor(chaii, "name"));

Object.defineProperty(chaii, "name",{enumerable: true,
  configurable: false
})



for (let [key, value] of Object.entries(chaii)) {
    console.log(`${key} -> ${value}`)

    
}