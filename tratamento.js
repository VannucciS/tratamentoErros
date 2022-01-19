/*
Atividade: validação de erros por tipo
O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

Crie uma função que recebe um array e um número
Realize as seguintes validações
Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
Se o array não for do tipo 'object', lance um erro do tipo TypeError
Se o número não for do tipo 'number', lance um erro do tipo TypeError
Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
Utilize a declaração try...catch
Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof

*/

function validaArray (arr, tamanho){
    if (!arr || !tamanho){
        const refError = new ReferenceError('Parametros não enviados');
        throw refError;
    }
    if (typeof(arr)!== "object" || typeof(tamanho)!== "number") {
        const tipoError = new TypeError("Tipo inválido");
        throw tipoError;
    }
    try {
        return arr.length == tamanho
    } catch (error) {
        const tamanhoError = new RangeError("Tamanho difere do informado!");
        throw tamanhoError;
                    }        
}
meuArray = [10,11,12]
//console.log(validaArray(meuArray ))

function validaArray2 (arr, num){
    try {
        if (!arr && !num) throw new ReferenceError("envie os parametros");

        if (typeof arr !== 'object') throw new TypeError("array precisa ser do tipo object");
    
        if (typeof arr !== 'number') throw new TypeError("array precisa ser do tipo number");
        
        if (arr.length !== tamanho) throw new RangeError("Tamanho inválido");

        return arr;

        
    } catch (e) {
        if (e instanceof ReferenceError){
            console.log( "Este é um ReferenceError!")
            console.log(e.message)
            //console.log(e.name)
            //console.log(e.stack)
        } else if (e instanceof TypeError){
            console.log( "Este é um TypeError!")
            console.log(e.name)
            console.log(e.stack)
        }else if (e instanceof RangeError){
            console.log( "Este é um RangeError!")
            console.log(e.name)
            console.log(e.stack)
        }else {
            console.log( "Erro desconhecido:" + e)
        }
    }
}    
console.log(validaArray2())