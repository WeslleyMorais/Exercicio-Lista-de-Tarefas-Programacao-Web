let tempo

function ativarContagem(){

   tempo = setInterval(function(){
    var cronometro = document.getElementById('tempo').innerHTML;
    var soma = parseInt(cronometro) +1;
        document.getElementById('tempo').innerHTML = soma
       
        if(soma >= 1){
            const botao = document.getElementById('start')
            botao.textContent = "Continuar"
            botao.style.backgroundColor = 'blue'
        
        }
    }, 1000)
    
}

function pararContagem(){
    clearInterval(tempo);
}