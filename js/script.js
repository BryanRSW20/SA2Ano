
        const CalculoRendimento = function() {
    
    let Qq = parseFloat(document.getElementById('ValorQq').value)
    let Qf = parseFloat(document.getElementById('ValorQf').value)
    let resultado = (Qq-Qf)/Qq
    console.log(resultado)
    document.getElementById("resultado").innerHTML = "O resultado é " +resultado
}