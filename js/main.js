const displayValorAnterior = document.getElementById('valor-anterior');
const botones = document.querySelectorAll('.calculadora button');
const calculadora = new Calculadora(); 


calculadora.oprimirTecla(botones);
