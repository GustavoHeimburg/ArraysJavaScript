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

var arrayteste = ['Matias','carlos','Pedro','Henrique','Igor'];
console.log(arrayteste[1]);
arrayteste.unshift('Pedro')
console.log(arrayteste[0]);
arrayteste.push('Pedro');
console.log(arrayteste[3]);
arrayteste.shift();
console.log(arrayteste);
