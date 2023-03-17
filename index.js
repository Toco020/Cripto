// 1.000.000.000.000.000
//    99.999.820.000.081
// 9.754.391.154.146.016.630.121 = 98.764.321.261 ** 2

function buscaPrimo(pos) {
    let divisivel = 0, count = 0, primo = 0;
    while (count < pos){
        primo++;
        for (let i = 1; i <= primo; i++) {
            if (primo % i === 0) {
                divisivel++;
            }
        }
        if (divisivel == 2) count++;
        divisivel = 0;
    }
    return primo;
}

function produto(num1, num2){
    return num1*num2;
}

function doisTermosProduto(produto){
    let p1 = 1, p2;

    while (!verificaPrimo(p2)) {
        p1 = proximoPrimo(p1);
        if (Number.isInteger(produto/p1)) p2 = produto/p1;
    }

    return [p1, p2];
}

function proximoPrimo(prant){
    let divisivel = 0;

    while (true){
        prant++;
        for (let i = 1; i <= prant; i++) {
            if (prant % i === 0) {
                divisivel++;
            }
        }
        if (divisivel == 2) return prant;
        divisivel = 0;
    }

}

function verificaPrimo(primo){
    let divisivel = 0;
    
    for (let i = 1; i <= primo; i++) {
        if (primo % i === 0) {
            divisivel++;
        }
        // console.log(primo);
    }
    return divisivel == 2;
}

function escalaPrimo(escala, sentido){
    while (!verificaPrimo(escala)) escala += sentido;
    return escala;
}

