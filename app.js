const numeroSorteado = document.querySelector('.numeroSorteado');
const gerados = document.querySelector('.gerados');
const gerado = document.querySelector('.gerado');
const btn = document.querySelector('.btn');
const btnEstilo = document.querySelector('.btn-estilo');
const titulo = document.querySelector('.titulo');


const num1 = document.querySelector('.num1');
const num2 = document.querySelector('.num2');
const num3 = document.querySelector('.num3');
const num4 = document.querySelector('.num4');
const num5 = document.querySelector('.num5');
const num6 = document.querySelector('.num6');



function Sortear() {

    const armazenar = Sorteado();

    if (numeroSorteado !== undefined) {
        
        
        animacao();
        
    }
    

    function animacao() {
        gerado.style.display = 'none';
        
        let pontos = '';
         
    
        const interval = setInterval(() => {
            if (pontos.length < 3) {
                pontos += '●'; 
            } else {
                pontos = ''; 
            }
            btnEstilo.innerHTML = '' + pontos; 
        }, 500); 
    
       
        setTimeout(() => {
            clearInterval(interval); 
            btnEstilo.innerHTML = 'Gerar mais um número da sorte!';
            titulo.innerHTML = 'Seu número especial é:';
            gerado.style.display = 'none';
            mostrarnumero(); 
        }, 4000);
    }
    



    function mostrarnumero() {
        num1.innerHTML = armazenar.at(0);
        num2.innerHTML = armazenar.at(1);
        num3.innerHTML = armazenar.at(2);
        num4.innerHTML = armazenar.at(3);
        num5.innerHTML = armazenar.at(4);
        num6.innerHTML = armazenar.at(5);
        btn.style.visibility = 'visible';

        gerado.style.display = 'block';
    }

}

function Sorteado() {
    const numero = new Set();

    while (numero.size < quant) {
        const numerosSelect = gerarNumero(max, min);
        numero.add(numerosSelect);
    }
    return Array.from(numero).sort((a, b) => a - b);
}

const gerarNumero = (max, min) => Math.floor(Math.random() * (max - min + 1) + min);

const min = 1;
const max = 60;
const quant = 6;


function copiarNumeros() {

    var numeros = document.querySelectorAll('.numeroSorteado .circulo');
    var texto = '';

   
    numeros.forEach(function (span) {
        texto += span.textContent + ' ';
    });

    
    texto = texto.trim();

    
    navigator.clipboard.writeText(texto).then(() => {
        
        btn.style.backgroundColor = '#3D8E4F'; 
        btn.style.color = 'aliceblue';

    
        setTimeout(() => {
            btn.style.backgroundColor = ''; 
            btn.style.color = '';
        }, 800);


    }).catch(err => {
        console.error('Erro ao copiar texto: ', err);
    });
}


