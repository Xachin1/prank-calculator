const button = document.querySelectorAll("button");
// console.log(button)
let texttoDisplay = ""

button.forEach(btn => {
 btn.addEventListener("click" , (e)=>{
   const val = btn.innerText;


   //on - clicked
   if (val === "="){
     return onTotal();
   }

   //on - reset
   if (val === "AC"){
    return reset();
  }


   //display all clicked button
   texttoDisplay += val;
   display(texttoDisplay);
  //  alert(texttoDisplay)
 });
  
});
// display text in the display area 
const display = value =>{
  document.getElementById("result").innerText = value;
};

//do total calculation
const onTotal = () =>{
  const total = eval(texttoDisplay);
  texttoDisplay=" ";
  display(total);

};

//
const reset = () =>{
  document.getElementById("result").innerText= "0.00"
}
