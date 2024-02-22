function criaCalculadora() {

    return {
        display: document.querySelector('#display'),
        btClear: document.querySelector('.btn-clear'),

        inicia() {
            document.addEventListener(('click'),(e) => {
                console.log(e.target)
                const el = e.target
                this.display.focus();
                this.direcionador(el)
            })
            this.pressionaEnter()
            this.pressionaTecla()
 
        },

        direcionador(el){
            if(el.classList.contains('btn-num')){
                this.cliqueBotao(el.innerText)
            }else if(el.classList.contains('btn-clear')){
                this.btClear()
            }else if(el.classList.contains('btn-eq')){
            this.btEq()
            }else if(el.classList.contains('btn-del')){
                this.btDel(-1)
            }
        },

        pressionaEnter(){
            addEventListener(('keyup'), (e)=>{
                console.log(e.key)
                if(e.key === 'Enter')this.btEq();
            })  
        },
        pressionaTecla(){
            document.addEventListener(('keyup'),(e)=>{
                if(isNaN(e.key) && e.key != "+" && e.key != "-" && e.key != "/" && e.key != "*" && e.key != "**"){
                    this.btDel(-1)
                }
            })
        },

        cliqueBotao(el) {
            this.display.value += el;
           },

        btClear(){
            this.display.value = "";
            },

        btEq(){
            let conta = this.display.value
            try{
                conta = eval(conta);
                if(!conta){
                    alert('Conta inválida')
                    return
                }
                this.display.value = conta;
            }catch{
                alert('Conta inválida');
            }

            },

        btDel(numero){
            this.display.value = this.display.value.slice(0, numero)
        }
        }

    }
const calculadora = criaCalculadora()
calculadora.inicia()