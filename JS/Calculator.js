export class Calculator{
  
  constructor(dDown, dUp){
    this._dUp       = dUp
    this._dDown     = dDown
    this._current   = ''
    this._operator  = ''
    this._operation = ''
    this._result    = ''
  }

  // Adciona o valor do número recebido
  addNumber(num){
    this._current += num
    // Pede atualização do display
    this.updateDisplay(this._current)
  }

  // Manipula o operador recebido
  addOperator(op){
    let last = this._operation.slice(-1)
    // Controla o uso do ponto no fim do valor
    if(this._current.slice(-1) == '.'){
      this._current = this._current.slice(0, -1)
    }
    // Controla a alteração de operador
    if(!this._current && last == '+'
    || !this._current && last == '-'
    || !this._current && last == 'x'
    || !this._current && last == '÷'){
      this._operation = this._operation.slice(0,-1)
    // Impede o uso do operador
    } else if(!this._result && !this._current){
      return
    // Recebe o primeiro operador
    } else if(!this._result && this._current){
      this._result = this._current
    // Libera a operação dos valores
    } else if(this._result  && this._current){
      this.toOperate()
    }

    this._operator   = op
    this._operation += this._current + op
    this._current    = ''
    // Pede atualização do display
    this.updateDisplay(this._result)
  }

  // Opera os valores recebidos e retorna o resultado
  toOperate(){
    switch (this._operator) {
      case '+':
        this._result = Number(this._result) + Number(this._current)
        break;
      case '-':
        this._result -= this._current
        break;
      case 'x':
        this._result *= this._current
        break;
      case '÷':
        this._result /= this._current
        break;
      default: ''
    break;
    }
  }

  // Retorna o resultado
  equal(){
    // Controla o uso do ponto no fim do valor
    if(this._current.slice(-1) == '.'){
      this._current = this._current.slice(0, -1)
    }
    // Libera a operação dos valores
    if(this._result && this._current){
      this.toOperate()
    // Impede o uso sem um resultado
    } else {
      return
    }
    this._operation += this._current
    // Pede atualização do display
    this.updateDisplay(this._result)
    this._current    = ''
    this._operator   = ''
    this._result     = ''
    this._operation  = ''
  }

  // Apaga o ultimo número digitado
  delete(){
    if(this._current > 0){
      this._current  = this._current.slice(0, -1)
      // Pede atualização do display
      this.updateDisplay(this._current)
    }
  }

  // Limpa todo o valor digitado
  clear(){
    this._current    = ''
    // Pede atualização do display
    this.updateDisplay(this._current)
  }

  // Limpa todas as informações e reinicia
  clearAll(){
    this._current    = ''
    this._operator   = ''
    this._operation  = ''
    this._result     = ''
    
    // Pede atualização do display
    this.updateDisplay(this._current)
  }

  // Atualiza o display
  updateDisplay(dDown){
    this._dDown.innerHTML = dDown
    this._dUp.innerHTML   = this._operation
  }
}