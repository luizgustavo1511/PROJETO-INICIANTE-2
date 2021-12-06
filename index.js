var cont=0
var lista=[]
var soma=0
var contador=document.getElementById('conta')
var spamTotal=document.getElementById("soma")
var input=document.getElementById('exInput')

function adicionarValor(){
    if(input.value.length!==0){
        cont++
        lista.push(parseFloat(input.value))
        contador.innerHTML = cont
        input.value=''
        
    }
}

function somaTotal(){
    var controleDoLaço=0
    if(cont!==0){
        while(controleDoLaço<lista.length){
         soma+=lista[controleDoLaço]
         controleDoLaço++
        }
        spamTotal.innerHTML= soma.toFixed(2)

    }

}