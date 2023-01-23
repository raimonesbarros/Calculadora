export class Controller{
  
  constructor(dDown, dUp){
    this.dUp        = dUp
    this.dDown      = dDown
    this._current   = ''
    this._operator  = ''
    this._operation = ''
    this._result    = ''
  }

  addNumber(value){
    if(value == '.' && this._current.includes('.')){
      return
    } else if(value == '.' && !this._current){
      this._current = 0 + value
    }else if(this._current){
      this._current += value
    } else if(!this._current){
      this._current = value
    }
    this.updateDisplay(this._current, this._operation)
  }

  addOperator(value){
    
    let last = this._operation.slice(-1)
    if(last == '+' || last == '-' || last == 'x' || last == '÷'){
      this._operation = this._operation.slice(0, -1)
    } else if(!this._result && !this._current){
      return
    } else if(this._result && !this._current){
      this._current = this._result
    } else if(!this._result && this._current){
      this._result = this._current
    } else if(this._result && this._current){
      this.toOperate()
    }
    this._operator = value
    this._current = ''
    this._operation += this._current + value
    this.updateDisplay(this._result, this._operation)
  }

  toOperate(){
    switch (this._operator) {
      case '+':
        this._result = Number(this._result) + Number(this._current)
        break;
      case '-':
        this._result -= this._current 
        break
      case 'x':
        this._result *= this._current
        break
      case '÷':
        this._result /= this._current
        break
      default:
        break;
    }
    this.updateDisplay(this._result, this._operation)
    this._current = ''
  }

  //problema com operation
  delete(){
    this._current = this._current.slice(0,-1)
    if(this._current.length > 0){
      this.dDown.innerHTML = this._current
    } else if(this._current.length==0){
      this.updateDisplay(0, this._operation)
    }
  }

  clear(){
    this._current = ''
 
    this.updateDisplay(0, this._operation)
  }

  clearAll(){
    this._current   = ''
    this._operation = ''
    this._result    = ''

    this.updateDisplay('', '')
  }

  equal(){
    if(!this._current){
      return
    } else if(!this._result){
      this._result = this._current
      this.updateDisplay(this._result, this._operation)
    }
    this.toOperate()
  }

  updateDisplay(dDown, dUp){
    this.dDown.innerHTML = dDown
    this.dUp.innerHTML = dUp
  }
}