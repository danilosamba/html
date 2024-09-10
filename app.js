function mostrar(){
let n1 = document.getElementById('campo1').value
let n2 = document.getElementById('campo2').value
//let total = document.getElementById('resultado')
if (n1 == '' || n2 == ''){
    alert('Preencha algum número nos dois campos para continuar')
    return;
} else{
    let resultado = document.getElementById('resultado');
    let total = parseInt(n1) + parseInt(n2);
    resultado.innerHTML = `O Total da soma é ${total}`
    console.log(`Número n1 ${n1} número n2 ${n2} total ${total}`)
}
//alert(`O texto digitado é ${n1}`)
}

