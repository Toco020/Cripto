// let n1 = Math.floor(Math.random(1000)*1000)+1;
// let n2 = Math.floor(Math.random(1000)*1000)+1;

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

// let primo1 = buscaPrimo(n1);
// let primo2 = buscaPrimo(n2);

// document.write(`${pos1}  ${primo1}</br>`);
// document.write(`${pos2}  ${primo2}</br>`);


function produto(num1, num2){
    return num1*num2;
}

// let produtoPrimo = produto(primo1,primo2);

// document.write(`${primo1} * ${primo2} = ${produtoPrimo}</br>`);


function doisTermosProduto(produto){
    let teste = 0, p1 = 1, p2;

    while (verificaPrimo(p2) == false) {
        teste++;

        p1 = buscaPrimo(teste);

        if (Number.isInteger(produto/p1)) p2 = produto/p1;

        // console.log(p1);
        // console.log(p2);
        // console.log(Number.isInteger(produto/p1));
    }

    return [p1, p2];
}

// function proximoPrimo(pos, primo){

//     let divisivel = 0, count = 0, primo = 0;
//     while (count < pos){
//         primo++;
//         for (let i = 1; i <= primo; i++) {
//             if (primo % i === 0) {
//                 divisivel++;
//             }
//         }
//         if (divisivel == 2) count++;
//         divisivel = 0;
//     }
//     return primo;

// }

function verificaPrimo(primo){
    if (primo != false){
        let divisivel = 0;
        for (let i = 1; i <= primo; i++) {
            if (primo % i === 0) {
                divisivel++;
            }
        }
        if (divisivel == 2) return true;
        else return false;
    }
}

// doisTermosProduto(produtoPrimo);

// let [p1, p2] = doisTermosProduto(produtoPrimo);

// document.write(`</br>primo 1 ${p1}</br> primo 2 ${p2}</br> produto ${(p1*p2)}`);

