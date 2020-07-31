console.log (" === BLOG.JS ====");

//var char = "valor"; --> variavel armazena um unico valor
//var char = ["valor", "valor"]; --> variavel armazena varios valores

var fotos = [ "foto1.jpg", "foto2.jpeg","foto3.jpg", "foto4.png", "foto5.jpeg"];
var posicao = 0;


function proximaFoto() {

    if(posicao == fotos.length-1){
        posicao = 0;
    } 
    
    else {
        posicao++;
    }
    
    return fotos[posicao];
}