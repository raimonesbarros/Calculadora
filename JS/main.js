import { Controller } from "./Controller.js"

// Acessar o DOM 
const dDown     = document.querySelector('#displayDown')
const dUp       = document.querySelector('#displayUp')
const number    = [...document.querySelectorAll('.number')]
const operator  = [...document.querySelectorAll('.operator')]
const equal     = document.querySelector('.equal')
const del       = document.querySelector('.del')
const c         = document.querySelector('.c')
const clear     = document.querySelector('.clear')

// Nova instancia da class importada Controller
const controller = new Controller(dDown, dUp)

// Recebe o numero clicado
number.map(n=>{
  n.addEventListener('click', evt=>{
    let num = evt.target.textContent
    controller.addNumber(num)
  })
})

// Recebe o operador clicado
operator.map(o=>{
  o.addEventListener('click', evt=>{
    let op = evt.target.textContent
    controller.addOperator(op)
  })
})

del.addEventListener('click', ()=>controller.delete())
c.addEventListener('click', ()=>controller.clear())
clear.addEventListener('click', ()=>controller.clearAll())
equal.addEventListener('click', ()=>controller.equal())