// Import da classe Claculator
import { Calculator } from "./Calculator.js"

// Acesso ao DOM 
const dDown    = document.querySelector('#displayDown')
const dUp      = document.querySelector('#displayUp')
const number   = document.querySelectorAll('.number')
const operator = document.querySelectorAll('.operator')
const equal    = document.querySelector('.equal')
const del      = document.querySelector('.del')
const c        = document.querySelector('.c')
const clear    = document.querySelector('.clear')

// Nova instancia da class importada calculator
const calculator = new Calculator(dDown, dUp)

// Recebe o número ou o ponto quando clicado
number.forEach(n=>{
  n.addEventListener('click', evt=>{
    let num = evt.target.textContent
    // Envia a informação recebida para o classe
    calculator.addNumber(num)
  })
})

// Recebe o operador clicado
operator.forEach(o=>{
  o.addEventListener('click', evt=>{
    let op = evt.target.textContent
    // Envia a informação recebida para o classe
    calculator.addOperator(op)
  })
})

// Recebe as informações das funções extras
del  .addEventListener('click',()=>calculator.delete  ())
c    .addEventListener('click',()=>calculator.clear   ())
clear.addEventListener('click',()=>calculator.clearAll())
equal.addEventListener('click',()=>calculator.equal   ())

// Recebe entradas do teclado
document.addEventListener('keyup', evt=>{

  // Entradas numéricas
  if(evt.key >=0){
    calculator.addNumber(evt.key)
  }
  // Outras entradas
  switch (evt.key) {
    case        '.' : calculator.addNumber(evt.key)
      break;
    case        ',' : calculator.addNumber('.')
      break;
    case        '+' : calculator.addOperator(evt.key)
    break;
    case        '-' : calculator.addOperator(evt.key)
      break;
    case        '*' : calculator.addOperator('x')
      break;
    case        '/' : calculator.addOperator('÷')
      break;
    case    'Enter' : calculator.equal()
      break;
    case 'Backspace': calculator.delete()
      break;
    case   'Delete' : calculator.clear()
      break;
    case   'Escape' : calculator.clearAll()
      break;
    default         : ''
      break;
  }
})