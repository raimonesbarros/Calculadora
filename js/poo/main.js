import { Calculator } from './model/Calculator.js'
import { View } from './view/View.js'

let calculator = new Calculator()

const inputs = document.querySelectorAll('li')

inputs.forEach(input => {
  input.addEventListener('click', ()=>{
    input.className=='number'   ? calculator.numbers(input.textContent):''
    input.className=='operator' ? calculator.operators(input.textContent):''
    input.className=='equal'    ? calculator.equal():''
    input.className=='del'      ? calculator.delete():''
    input.className=='c'        ? calculator.clear():''
    input.className=='clear'    ? calculator.clearAll():''
    
    let view = new View(calculator.info())

    if(input.className=='number' || input.className=='del' || input.className=='c'){
      view.viewNumber()
    }

    if(input.className=='operator' || input.className=='equal' || input.className=='clear'){
      view.viewResult()
    }

  })
});
