function validateCPF(inputCPF) {
    if (inputCPF.length != 11) {
        return false;
    } else {
        //
        //Constante number pega do caractere de index 0 até o de índice 9.
        let number = inputCPF.substring(0, 9);
        //
        //Constante digits pega caractere à partir do index 9
        let digits = inputCPF.substring(9);
        let sum = 0;
        for (var i = 10; i > 1; i--) {
            sum += number.charAt(10 - i) * i;
        }
        //
        //(Operador Ternário) Se o módulo de sum %11 for menor que 2, result = 0. Se não, result é igual ao módulo de sum %11.
        let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
        //
        //Validação do primeiro dígito: Verifica se result é diferente do indice 0 de digits
        if (result != digits.charAt(0)) {
            return false;
        }
        console.log(sum);

        sum = 0;
        number = inputCPF.substring(0, 10);

        for (var k = 11; k > 1; k--) {
            sum += number.charAt(11 - k) * k;
        }
        console.log(sum);

        result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
        if (result != digits.charAt(1)) {
            return false;
        }
        return true;
    }
}

function validation() {
    document.getElementById("success").style.display = "none";
    document.getElementById("error").style.display = "none";
    const inputCPF = document.getElementById("inputCPF").value;
    const validationResult = validateCPF(inputCPF);
    if (validationResult) {
        document.getElementById("success").style.display = "block";
    } else {
        document.getElementById("error").style.display = "block";
    }
}
