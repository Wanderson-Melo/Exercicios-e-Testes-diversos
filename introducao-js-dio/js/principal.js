/*
//Aula 01 - primeiros comandos

var nome = "Wanderson Melo";
var idade = 32;
var idade2 = 10;
var frase = "Palmeiras é o melhor time do mundo"
var n1 = 5;
var n2 = 7;

//alert("meu primeiro JS");
//alert("Bem vindo " + nome)
//alert(nome + " tem " + idade + " anos")
//alert(idade + idade2)

console.log(idade+idade2);
console.log(frase)
console.log(frase.replace("Palmeiras", "Brasil"))
//alert(frase)
//alert(frase.replace("Palmeiras", "Belgica"))
//alert(frase.toUpperCase())
alert(frase.toLowerCase())
console.log(n1*n2)

//Fim da aula
*/

/*
//Aula 02 - array e dicionário

//var lista = ['maçã', 'pêra', 'laranja'] //criando lista de itens
//var fruta = {nome:"maçã", cor:"vermelha"} //criando um dicionário *a variável deve receber valor utilizando ":"
var fruta = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa "}] //criando lista[] de dicionários{}

//lista.push('uva') //PUSH para adicionar item na lista
//lista.pop() //POP para retirar item da lista () vazio referencia o último item
//console.log(lista) //exibe lista no console
//console.log(lista[0]) //exibe item 0(maçã) da lista no console
//alert(lista[1]) //exibe item 1(pêra) da lista no alert
//console.log(lista) //exibe lista no console
//console.log(lista.length) //lista.length mostra o número de itens na lista "comprimento" *lista,length não usa ()
//console.log(lista.reverse()) //exibe lista de maneira reversa no console
//console.log(lista.toString()) //exibe lista como string(tira a característica de elemento) no console
//console.log(lista[0]) //exibir em console item 0(maçã)
//console.log(lista.toString()[0]) //exibe em console o item 0 da string, neste caso a letra "m"
//console.log(lista.join(" | ")) //exibe a separação entre itens da STRING de maneira diferentes, no caso com pipeline
//console.log(fruta); //exibe dicinário em console
//console.log(fruta.nome); //exibe item "nome" do dicionário "frunta" em console
//console.log(fruta.cor) //exibe item "cor" do dicionário "fruta" em console
console.log(fruta[1].cor) //exibe o valor da varia cor para a fruta[1](uva), conforme lista de dicionários [{}, {}]

//Fim da aula
*/

//Aula 03 - condicionais, laços de repetição e date

/*
var idade = prompt("Qual sua idade?") //pergunda a idade do usuária em formato de alert(pop-up)
//var idade = 18; //variável idade recebe valor 18
if(idade >= 18) { //se idade maior ou igual(>=) alert "maior de idade"
    alert("maior de idade")
}
else{ //Se idade < que 18, alert "menor de idade"
    alert("menor de idade")
}
*/

/*
var count = 0; //count recebe 0
while(count < 5){ //enquanto count < 5 faça
    console.log(count); //exiba count em console
    alert(count);
    count++; //soma count+1 (count++ é igual a count = count + 1)
}
*/

/*
var count;
for(count = 0; count <= 5; count++){ //Para count entre igual a 0 e <= 5, count++, e faça um alert de count, repete.
    alert(count);
}
*/

/*
var d = new Date();
//alert(d)
alert(d.getUTCDate()) //alert dia do mês, hoje 7.
alert(d.getMonth()+1) //alert do mês corrente, mostra em formato de número, hoje no caso mês 12.
alert(d.getUTCFullYear()) //alert do ano, hoje 2020.

//Fim da aula
*/

//Aula 04 - funções

/*
function soma(n1, n2){
    return n1 + n2;
}
console.log(soma(5, 34))//exibo em console o resutaldo da função f(n1,n2) = n1 + n2; para n1 = 5 e n2 = 34.

function setReplace(frase, nome, novo_nome){ //cria função f(frase, nome, novo_nome)
    return frase.replace(nome, novo_nome) // retorna valor de frase, e troca nome por novo_nome dentro do valor de frase.
}
console.log(setReplace("Vai Palmeiras", "Palmeiras", "França")) //exibir em console função setReplace(Vai Palmeiras, Palmeiras, França)=frase com a variável nome trocada.
//resultado esperado: Vai França, pois Palmeiras foi replace por França em frase.

function validaIdade(idade){ //função validaIdade(idade) = var validar
    var validar; //variável trabalhada dentro da função
    if (idade >= 18){validar = true}
    else {validar = false}
    return validar //retorna valor de validar
}
var idade = prompt("Qual a sua idade?") //solicitação de valor de idade ao usuário.
console.log(validaIdade(idade)) //exibir valor da função validaIdade(idade)
*/

//Fim da aula

//Aula 05 - 

function botao(){
    //alert("Obrigado por clicar")
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"))
}
function redirecionar() {
    //window.open("https://www.saopaulo.sp.gov.br/")
    window.location.href = "https://www.saopaulo.sp.gov.br/"
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse"
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse ;)"
    //alert("Trocar texto")
}

function voltar(elemento){
    elemento.innerHTML = "Passe novamente"
    //document.getElementById("mousemove").innerHTML = "Passe o mouse novamente"
}

function load() {
    alert("Pagina carregada")
}

function funcaoChange(elemento) {
    console.log(elemento.value)
}