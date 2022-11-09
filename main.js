import "./style.scss";


executar()

async function executar() {

    const valoresEncontrados = await buscarValoresNaAPI()

    let linhasTabela = `
        <tr>
            <td>Nome do Curso</td>
            <td>Descrição do Curso</td>
        </tr>
    `
    valoresEncontrados.forEach(curso => {
        linhasTabela += `
            <tr>
                <td>${curso.title}</td>
                <td>${curso.description}</td>
            </tr>
        `
    });

    document.querySelector("#tabelaCurso").innerHTML = linhasTabela


}

async function buscarValoresNaAPI() {
    const response = await fetch("https://api-dwi.herokuapp.com/api/tutorials")
    const responseJson = await response.json()

    return responseJson
}