function calcularTotal(ferramentas,comprar) {

    const quantidadeDeFerramentas = ferramentas.length;
    
    const quantidadeCompras = comprar.length;

    if (ferramentas.length === 0 || comprar.length === 0) {
        throw new Error("Ambas as listas precisam ter ao menos um item.");
    }

    let total = 0;
    let ferramentasCompradas = "";
    let primeiraFerramenta = true;

    for (let i = 0; i < ferramentas.length; i++) {
        for (let j = 0; j < comprar.length; j++) {
            if (ferramentas[i].nome === comprar[j]) {
                total += ferramentas[i].preco;
                if (!primeiraFerramenta) {
                    ferramentasCompradas += ", ";
                } else {
                    primeiraFerramenta = false;
                }
                ferramentasCompradas += ferramentas[i].nome;
                break; // Para a busca nesta ferramenta
            }
        }
    }

    if (ferramentasCompradas.length === 0) {
        throw new Error("Nenhuma ferramenta desejada encontrada.");
    }

    return `O valor a pagar pelas ferramentas (${ferramentasCompradas}) é R$ ${total.toFixed(2)}`;
}





module.exports = {
    calcularTotal
}