// 1.000.000.000.000.000 = 16 algarismos
//   999.998.990.000.099 = Se e somente se um dos primo estiver na escala de 7 algarismos (9.999.991), em velocidade baixa no momoento (~4 min). ### +170k posição ###
//     2.099.781.407.387
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
        if (Number.isInteger(p1)) {
            if (Number.isInteger(produto/p1)) p2 = produto/p1;
        } else break;  
    }

    return [p1, p2];
}

function proximoPrimo(prant){
    let divisivel = 0;

    if (prant < limite){
        console.log(prant);
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
    }else {
        limite = escalaPrimo((prant*2), 1);
        if (!confirm(`O menor primo está além de ${pontua(prant)}. Deseja continuar até ${pontua(limite)}?`)){
            return `+999.983`;
        }else return prant;
    }
    

}

function verificaPrimo(primo){
    let divisivel = 0;
    
    for (let i = 1; i <= primo; i++) {
        if (primo % i === 0) {
            divisivel++;
        }
    }
    // console.log(primo);
    return divisivel == 2;
}

function escalaPrimo(escala, sentido){
    while (!verificaPrimo(escala)) escala += sentido; 
    return escala;
}

function pontua(num){
    console.log(num);
    if (Number.isInteger(num)) {
        let temp = `${num}`.split("").reverse();
        let adicional = 0;
        if (temp.length > 3){
            for (let i = 1; i < temp.length-adicional; i++) {
                if (i % 3 == 0) {
                    temp.splice(i+adicional, 0, ".");
                    adicional++;
                }
            } 
            let saida = "";
            for (const element of temp.reverse()) saida += `${element}`;
            return saida;
        }
    }return num;
}

function verificaStorage(key, valor){
    return sessionStorage.getItem(key) == valor;
}

function clearStorage(){
    sessionStorage.clear();
}
