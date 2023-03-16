// 1.000.000.000.000.000

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
    let teste = 0, p1 = 1, p2;

    while (verificaPrimo(p2) == false) {
        teste++;
        p1 = proximoPrimo(p1);
        if (Number.isInteger(produto/p1)) p2 = produto/p1;

        // console.log(p1);
        // console.log(p2);
        // console.log(Number.isInteger(produto/p1));
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
    if (primo != false){
        let divisivel = 0;
        for (let i = 1; i <= primo; i++) {
            if (primo % i === 0) {
                divisivel++;
            }
        }
        return divisivel == 2;
    }
}

