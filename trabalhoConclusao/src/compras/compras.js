
const calcularTotal = (ferramentas,comprar) => {

    const quantidadeDeFerramentas = ferramentas.length;
    
    const quantidadeCompras = comprar.length;

    if (quantidadeDeFerramentas === 0 || quantidadeCompras === 0) {
        throw new Error("Ambas as listas precisam ter ao menos um item.");
    }

    let total = 0;
    let ferramentasCompradas = "";

    for (let i = 0; i < quantidadeDeFerramentas; i++) {
        for (let j = 0; j <quantidadeCompras; j++) {
            if (ferramentas[i].nome === comprar[j]) {
                total += ferramentas[i].preco;
                if (ferramentasCompradas !== "") {
                    ferramentasCompradas += ", ";
                }
                ferramentasCompradas += ferramentas[i].nome;
                break; // Para a busca nesta ferramenta
            }
        }
    }

    if (ferramentasCompradas === "") {
        throw new Error("Nenhuma ferramenta desejada encontrada.");
    }

    return `O valor a pagar pelas ferramentas (${ferramentasCompradas}) é R$ ${total.toFixed(2)}`;
}





module.exports = {
    calcularTotal
}