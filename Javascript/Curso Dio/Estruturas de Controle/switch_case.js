let fruta = "cereja"

switch (fruta) {
    case "laranja":
    case 'uva':
        console.log("suco de " + fruta)
        break

    case 'banana':
    case 'abacate':
        console.log('vitamina de ' + fruta)
        break

    case 'maçã':
    case 'cereja':
        console.log('torta de ' + fruta)
        break
    
    default:
        console.log('Não temos essa fruta em nossos registros')
}

