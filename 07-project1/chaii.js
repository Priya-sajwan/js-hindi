const buttons = document.querySelectorAll(".button")

// console.log(button)

const body = document.querySelector("body")

buttons.forEach(function(but){

// console.log(buttons);

but.addEventListener("click", function(chaii){

//   console.log(chaii);
  console.log(chaii.target);


if(chaii.target.id === "grey"){
    body.style.backgroundColor = chaii.target.id
}
if(chaii.target.id === "white"){
    body.style.backgroundColor = chaii.target.id
}
if(chaii.target.id === "blue"){
    body.style.backgroundColor = chaii.target.id
}
if(chaii.target.id === "yellow"){
    body.style.backgroundColor = chaii.target.id
}



});
});