let resposta = document.getElementById("resposta")

function calcular(){
    let numero1 = Number(document.getElementById("numero1").value)
    let numero2 = Number(document.getElementById("numero2").value)

    let resultado = numero1 + numero2
    
    if(resultado == 0){
    
        resposta.innerHTML = "Dois ZEROS da porra nenhuma" + "<br>" + "<br>"
        resposta.innerHTML += "<img src='socialcredit.png'>"

    }else{
        resposta.innerHTML = "resultado foda = " + resultado + "<br>" + "<br>"
        resposta.innerHTML += "<img src='brabo.png'>"
    }

}