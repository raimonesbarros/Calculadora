export class View{

  constructor(data){
    this.displayUp   = document.querySelector('#displayUp')
    this.displayDown = document.querySelector('#displayDown')

    this.data = data
  }

  viewNumber(){
    if(this.data.currentValue.slice(-1) == '.'){
      this.display(Number(this.data.currentValue).toLocaleString('pt-BR', {style: 'decimal'}) + ',')
    } else{
      this.display(Number(this.data.currentValue).toLocaleString('pt-BR', {style: 'decimal'}))
    }
  }

  viewResult(){
    this.display(Number(this.data.result).toLocaleString('pt-BR', {style: 'decimal'}))
  }

  display(local){
    this.displayDown.innerHTML = local
    this.displayUp.innerHTML   = this.data.operation
  }
}
