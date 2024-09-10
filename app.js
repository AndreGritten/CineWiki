function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if(!campoPesquisa) {
        section.innerHTML = "<p2> Nenhum filme foi encontrado. Insira o nome de algum filme ou palavras chaves remetentes à ele</p2>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = '';
    let titulo = '';
    let descricao = '';
    let tags = '';


    // Itera sobre cada dado na lista de dados (assumindo que 'dados' seja um array de objetos)
    for (let dado of dados) {
        // se titulo includes campoPesquisa
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {        
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Wiki do filme</a>
            </div>
            `;
            
        }
    }

    if (!resultados) {
        resultados = '<p2> Nenhum filme foi encontrado</p2>'

    }

    // Atribui o HTML construído à seção de resultados, substituindo o conteúdo anterior
    section.innerHTML = resultados;
}



