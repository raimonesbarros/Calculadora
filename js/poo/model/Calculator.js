export class Calculator{

  constructor(){

    this.currentValue = ''
    this.operator = ''
    this.operation = ''
    this.result = ''
  }
  
  numbers(number){
    if(number=='.' && this.currentValue.includes(number)){
      return
    } else if(number=='.' && !this.currentValue){
      this.currentValue = '0'
    } else{
      this.currentValue += number
    }
  }

  operators(operator){
    let last = this.operation.slice(-1)

    if(this.currentValue.slice(-1) == '.'){
      this.currentValue = this.currentValue.slice(0, -1)
    }

    if(!this.result && !this.currentValue){
      return
    }

    if(!this.currentValue && typeof(+last) != typeof(1)){
      this.operation = this.operation.slice(0,-1)
    } else if(!this.result && this.currentValue){
      this.result = this.currentValue
    } else if(this.result && !this.currentValue){
      this.operation = this.result
    }
    
    this.toOperate()

    if(this.currentValue){
      this.operation += Number(this.currentValue).toLocaleString('pt-BR', {style: 'decimal'}) + operator
    } else{
      this.operation += operator
    }
    this.operator = operator
    this.currentValue = ''

  }

  toOperate(){
    if(this.currentValue && this.operator){
      switch (this.operator) {
        case '+': this.result = Number(this.result) + Number(this.currentValue)
        break;
        case '-': this.result -= Number(this.currentValue)
        break;
        case 'x': this.result *= Number(this.currentValue)
        break;
        case '÷': this.result /= Number(this.currentValue)
        break;
        default:
        break;
      }
    }
  }
    
  equal(){
    if(this.currentValue.slice(-1) == '.'){
      this.currentValue = this.currentValue.slice(0, -1)
    }

    this.toOperate()

    this.operation += Number(this.currentValue).toLocaleString('pt-BR', {style: 'decimal'})
    this.currentValue = ''
  }

  delete(){
    this.currentValue ? this.currentValue = this.currentValue.slice(0,-1) : ''
  }

  clear(){
    this.currentValue = ''
  }

  clearAll(){
    this.currentValue = ''
    this.operator = ''
    this.operation = ''
    this.result = 0
  }

  info(){
   const info =
   {'currentValue' : this.currentValue,
    'operator'     : this.operator,
    'operation'    : this.operation,
    'result'       : this.result }
    return info
  }
}