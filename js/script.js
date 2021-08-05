        const CalculoQ = function () {

    let valorU = parseFloat(document.getElementById('valorU').value)
    let valorT = parseFloat(document.getElementById('valorT').value)

    let resultadoQ = valorU+valorT
    console.log (valorU);
    console.log(valorT);
    console.log(resultadoQ);

    document.getElementById('resultadoQ').innerHTML = "A quantidade de calor é " +resultadoQ.toFixed(2)
}
        

        const CalculoRendimento = function() {
    
    let Qq = parseFloat(document.getElementById('valorQq').value)
    let Qf = parseFloat(document.getElementById('valorQf').value)
    let resultado = (Qq-Qf)/Qq
    console.log(Qq);
    console.log(Qf);
    console.log(resultado)
    document.getElementById('resultado').innerHTML = "O resultado é " +resultado.toFixed(2) + "%"
}    