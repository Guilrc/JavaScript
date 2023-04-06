//let opcao =1
/*
let opcao=parseInt(prompt("digite uma opção"))

switch(opcao){
    case 1:
        document.write("Home")
        break;
    case 2:
        document.write("Empresa")
        break;
    case 3:
        document.write("Contato")
        break;
    default:
        document.write("Opção inválida")
        break;
}
*/

// incremento e decremento

let valor = 7
/*
 document.write(valor)
 document.write("<br><br>")
 valor = valor+3
 valor ++
 document.write(valor)

 let valor2 = 7
 document.write(valor2)
 document.write("<br><br>")
valor2--
document.write(valor2)
*/
// usando o for

for (let i=0; i<10; i++){
    document.write("O valor é", i)
    document.write("<br><br>")
}

// usando for com array

let carros=["Gol", "Fusca", "Brasilia", "BMW"]

for(let i=0; i <carros.length;i++){
    document.write(carros[i])
    document.write("<br><br>")
}