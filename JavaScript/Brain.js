/*function x(){
    console.log("Caiu na funcao")
}
var nun = 1;

if (!nun > 0){
    x();
}else {
    console.log("Nao caiu na funcao");
}

//ft.push / unshift = ADICIONA
//ft.pop / shift = REMOVE

var arrayteste = ['Matias','carlos','Pedro','Henrique','Igor'];
console.log(arrayteste[1]);
arrayteste.unshift('Pedro')
console.log(arrayteste[0]);
arrayteste.push('Pedro');
console.log(arrayteste[3]);
arrayteste.shift();
console.log(arrayteste);

var array1 = ['Henrique','Mathias','Eduardo']

var Array2 = ['marcos','julia','Luan']

var array3 = array1.concat(Array2);
console.log(array3);*/


//TESTANDO LOGICAS...

/*var ar = [1,2,3,4];
console.log(ar);*/

var arr1 = [1,2,4,10,15];
for (let i = 0; i < arr1.length; i++){
    if (arr1[i] % 2 == 0) {
        arr1.splice(i, 1);
        i--;
    } else if (arr1[i] % 2 != 0){
        arr1[i] = arr1[i] + 1;
    }
}
console.log(arr1);

// OBJETOS NO JAVASCRIPT

var teste1 = {
    nome : 'Gustavo',
    email : 'gutogustavogu@gmail.com',
    idade : '16'
}
console.log(teste1)
console.log(JSON.stringify(obj));



//FORMAS SEPARADAS

/*var arr2 = [2,4,6,8,10,12];
for (var i = 0; i < arr.length; i++){
    if (arr2[i] % 2 == 0) {
        arr2[i] = arr[i] + 1;
        console.log(arr);
    }
}

var arr3 = [1,3,5,7,9,11];
for (var i = 0; i < arr.length; i++){
    if (arr3[i] % 2 != 0) {
        arr3.splice(i, 1);
        i--;
        console.log(arr);
    }
}*/





