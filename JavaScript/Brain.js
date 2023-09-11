function x(){
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

/*var arrayteste = ['Matias','carlos','Pedro','Henrique','Igor'];
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

var ar = [1,2,3,4];
console.log(ar);

var arr = [1,2,3,4,5,6,7,8,9,10];
for (var i = 0; i < arr.length; i++){
    if (arr[i]) {
        console.log(arr[i]);
    }
}

var arr = [2,4,6,8,10,12];
for (var i = 0; i < arr.length; i++){
    if (arr[i] % 2 == 0) {
        arr[i] = arr[i] + 1;
        console.log(arr);
    }
}

var arr = [1,3,5,7,9,11];
for (var i = 0; i < arr.length; i++){
    if (arr[i] % 2 != 0) {
        arr.splice(i, 1);
        i--;
        console.log(arr);
    }
}





