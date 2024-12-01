let display = document.getElementById("display")
let buttons = document.querySelectorAll(".btn")

let expression = "";



function displayanser(value) {
   if (value === "AC") {
      expression = ""
      display.textContent = "0"
   } else if (value === "DEL") {
      expression = expression.slice(0, - 1)
      display.textContent = expression || "0"
   } else if (value === "=") {
      try {
         expression = Function(`return (${expression})`)().toString();
         display.textContent = expression
      } catch (error) {
         display.textContent = "error"
         expression = ""
      }
   }else{
      expression += value
      display.textContent = expression
   }
}



buttons.forEach((button) => {
   button.addEventListener("click", function () {
      const value = button.getAttribute("data-value")
      displayanser(value)
   })

});