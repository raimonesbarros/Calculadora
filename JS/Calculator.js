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
      // Controla o uso único do ponto 'vírgula'
    if(num == '.' && this._current.includes('.')){
      return
    } else if(this._current.length >= 14){
      // Impede o uso de mais de 14 caracteres
      this._current = this._current.slice(0, 14)
    } else if(num == '.' && !this._current){
      this._current = 0 + num
    } else{
      this._current += num
    }
    // Pede atualização do display
    if(this._current.includes('.')){
      this.updateDisplay(this._current.replace('.', ','))  
    } else {
      
      this.updateDisplay(Number(this._current).toLocaleString('pt-br', {style: 'decimal', maximumFractionDigits: 2}))
    }
  }

  // Manipula o operador recebido
  addOperator(op){

    let last = this._operation.slice(-1)
    // Controla o uso do ponto no fim do valor, retirando-o caso não tenha casas decimais
    if(this._current.slice(-1) == '.'){
      this._current = this._current.slice(0, -1)
    }
    // Controla a mudança de operador sem prejuíjo para a operação
    if(!this._current && last == '+'
    || !this._current && last == '-'
    || !this._current && last == 'x'
    || !this._current && last == '÷'){
      this._operation = this._operation.slice(0,-1)
    // Impede o uso do operador quando não pode ser usado.
    } else if(!this._result && !this._current){
      return
    // Recebe o primeiro operador para começar as operações
    } else if(!this._result && this._current){
      this._result = this._current
    // Libera a operação dos valores
    } else if(this._result && !this._current){
      this._current = this._result
    } else if(this._result  && this._current){
      this.toOperate()
    }

    this._operator   = op
    this._operation += this._current + ' ' + op + ' '
    this._current    = ''
    // Pede atualização do display
    this.updateDisplay(Number(this._result).toLocaleString('pt-br', {style: 'decimal', maximumFractionDigits: 2}))
  }

  // Opera os valores recebidos e retorna o resultado
  toOperate(){
    switch (this._operator) {
      case '+':
        // Operação de soma
        this._result = Number(this._result) + Number(this._current)
        break;
      case '-':
        // Operação de subtração
        this._result -= this._current
        break;
      case 'x':
        // Operação de multiplicação
        this._result *= this._current
        break;
      case '÷':
        // Operação de divisão ou quociente
        this._result /= this._current
        break;
      default: ''
    break;
    }
  }

  // Retorna o resultado
  equal(){
    // Controla o uso do ponto no fim do valor, retirando-o caso não tenha casas decimais
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
    this._operation += Number(this._current).toLocaleString('pt-br', {style: 'decimal', maximumFractionDigits: 2})
    // Pede atualização do display
    this.updateDisplay(this._result)
    
    this._current    = ''
    this._operation  = this._result.toLocaleString('pt-br', {style: 'decimal', maximumFractionDigits: 2}) + this._operator
  }

  // Apaga o ultimo número digitado
  delete(){
    if(this._current.length > 0){
      this._current  = this._current.slice(0, -1)
      // Pede atualização do display
      this.updateDisplay(this._current)
    }
  }

  // Limpa todo o valor digitado
  clear(){
    this._current    = ''
    // Pede atualização do display
    this.updateDisplay(0)
  }

  // Limpa todas as informações e reinicia
  clearAll(){
    this._current    = ''
    this._operator   = ''
    this._operation  = ''
    this._result     = ''
    
    // Pede atualização do display
    this.updateDisplay(0)
  }

  // Atualiza o display
  updateDisplay(dDown){
 
    // Mostra o resultado no padrão brasileiro ex: 9821.23 => 9.821,23   
    this._dDown.innerHTML = dDown.toLocaleString('pt-br', {style: 'decimal', maximumFractionDigits: 2})
    this._dUp.innerHTML   = this._operation

  }
}