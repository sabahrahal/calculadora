var cantidadSignos = 0;
var cantidadDecimal = false;
var resultado = false;
const displayValorActual = document.getElementById('valor-actual');

class Calculadora{ 

    oprimirTecla(botones){
            for(var i=0; i < botones.length; i++){

                botones[i].addEventListener("click", (e)=>{
                    var accion = e.target.getAttribute("class") 
                    var digito = e.target.innerHTML; 
                    
                    this.calcular(accion, digito); 
                })
            }
        }

    calcular(accion, digito){
            switch (accion) {
                case "numero":
                cantidadSignos = 0;     
                if(displayValorActual.innerHTML == 0){
                    displayValorActual.innerHTML = digito;
                }
                else{
                    if(resultado){
                        resultado = false
                        displayValorActual.innerHTML = digito;        
                    } 
                     else{                  
                        displayValorActual.innerHTML += digito;
                    }
                } 

                break;

                case "numero col-2":
                cantidadSignos = 0;     
                if(displayValorActual.innerHTML == 0){
                    displayValorActual.innerHTML = digito;
                }
                else{
                    displayValorActual.innerHTML += digito; 
                } 

                break;
                
                case "operador":
                cantidadSignos++;
                if(displayValorActual.innerHTML == 0 && digito == '-') {
                    displayValorActual.innerHTML = "-";
                }

                else if(cantidadSignos == 1) {
                    
                    displayValorActual.innerHTML += digito;
                    resultado = false
                    cantidadDecimal = false;
                }

                break; 

                case "decimal":
                    if(!cantidadDecimal && cantidadSignos != 1){
                        displayValorActual.innerHTML += digito;
                        cantidadDecimal = true;  
                        resultado = false; 
                    }

                break;

                case "borrar": 
                displayValorActual.innerHTML = displayValorActual.innerHTML.slice(0, -1);
                if(displayValorActual.innerHTML.includes('.')){
                    cantidadDecimal = true; 
                }
                else {
                    cantidadDecimal = false;
                }
                
                break; 

                case "borrarTodo col-2": 
                    if(digito == "C" ){
                        displayValorActual.innerHTML = 0;
                    }

                break; 

                case "igual": 
                    displayValorActual.innerHTML = eval(displayValorActual.innerHTML); 
                    var expresion = /./g;

				    if(!expresion.test(displayValorActual.innerHTML)){

					cantidadDecimal = true;
				}
                    resultado = true;
                break; 


            }
    }
}
