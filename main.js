
function tocaSom(idElementAudio) {
    
    const elemento = document.querySelector(idElementAudio)

    if (elemento == null) {
        console.log ('elemento nao encontrado')
    }

    if (elemento != null && elemento.localName == 'audio') {
        
        elemento.play();
         
    }
    else{
        console.log('elemento nao encontrado ou seletor invalido ')
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla'); 


//Usando for

for (contador = 0; contador < listaDeTeclas.length; contador++) {
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    console.log(instrumento)
    const idaudio = `#som_${instrumento}`// ou const idaudio = '#som_'+instrumento;
    
    //adcionan evento de click para chamar a função que tocara o som
    listaDeTeclas[contador].onclick = function () {
        tocaSom(idaudio);

    }

    //quando teclas do teclado for usado
    tecla.onkeydown = function (evento) {
        //adicionando class nova pelo javascript
        tecla.classList.add('ativa')

        if (evento.code =='Space' || evento.code =='Enter') {
            tecla.classList.add('ativa')
        }


    }

    //evento para quando a tecla for solta
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    }
    
}


//usando While 
/*let contador = 0;
 
while (contador <= listaDeTeclas.length) {

    //classList é uma propriedade em JavaScript que permite acessar a lista de classes CSS associadas a um elemento DOM específico. Ele fornece métodos para adicionar, remover, verificar a existência e alternar classes em um elemento HTML.

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    console.log(instrumento)
    const idaudio = `#som_${instrumento}`// ou const idaudio = '#som_'+instrumento;
    
    //adcionan evento de click para chamar a função que tocara o som
    listaDeTeclas[contador].onclick = function () {
        tocaSom(idaudio);

    }
    
    contador++;
} */