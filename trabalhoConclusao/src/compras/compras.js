function calcularTotal(ferramentas,comprar) {

    const quantidadeDeFerramentas = ferramentas.length;
    const quantidadeCompras = comprar.length;

    for(let indice = 0; indice < quantidadeDeFerramentas; indice ++ ) {
        console.log(`${ferramentas[indice]} ferramentas`)
    }


    for(let indice = 0; indice < quantidadeCompras; indice ++ ) {
        console.log(`${comprar[indice]} ferramentas a comprar`)
        let ferramentasAComprar = comprar[indice];


        console.log(`${ferramentasAComprar} teste`);


    }




module.exports = {
    calcularTotal
}