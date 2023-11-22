
// Una computadora inicia su proceso imprimiendo las cifras 2023, 2024 y 2025. A continuación, no se detiene y prosigue imprimiendo la suma de los tres números más recientes que ha impreso: 6072, 10121, 18218, etc. ¿Podrías decir cuáles son las últimas cuatro cifras del número impreso en el puesto 2023202320232023? Para ilustrar, en la posición 50, el número impreso es 8188013234823360, que concluye en 3360.


//El resultado es "3363". Solo considero los 4 últimos dígitos de cada numero. Averiguo cuantos resultados de 4 dígitos hay hasta que se vuelvan a aparecer 2023, 2024, 2025 y da 124000. La serie entera se repite cada 124000 posiciones. Divido la posicion pedida 2023202320232023 por 124000 y el resto que queda es 100023 (es decir el la posicion que busco dentro de los primero 124000 numeros. Lo calculo y da el resultado anterior. 


function lapsus (iteraciones) {
    let a=2023;
    let b=2024;
    let c=2025;
    let resultString;
    let x=4;
    let response=0;
    while (x<=iteraciones && response==0) {
        let result = a+b+c;
        if (a==2023 && b==2024 && c==2025 && x>5) {
            response=x-4;
        }
        resultString= result.toString().slice(-4);
        a=b;
        b=c;
        c=Number(resultString);
        x++
    }
    return response;
}



function sumador (iteraciones, lapso) {
    let positionToSearch = iteraciones % lapso
    let a=2023;
    let b=2024;
    let c=2025;
    let resultString;
    if (positionToSearch==1) return '2023'
    if (positionToSearch==2) return '2024'
    if (positionToSearch==3) return '2025'
    let x=4;
    while (x<=positionToSearch) {
            let result = a+b+c;
            resultString= result.toString().slice(-4);
            a=b;
            b=c;
            c=Number(resultString);
            x++
    }
    return resultString
}

let a= 2023202320232023;
console.log(sumador(a, lapsus(a)))
