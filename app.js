const btnPesquisar = document.getElementById('btnPesquisar');
const img = document.getElementById('imagem');
const campoPesquisa = document.getElementById('campoPesquisa').value;

const extensoes = ['jpg', 'jpeg', 'webp'];

function tentaMudarImagem(nomeArquivo, index) {

    //Tratamento caso a imagem não seja encontrada
    if (index >= extensoes.length) {
        img.src = 'img/Placeholder.svg';
        alert('Não encontrei sua imagem :(');
        return;
    }

    let extensaoAtual = extensoes[index];
    let url = `img/${nomeArquivo}.${extensaoAtual}`;

    img.onerror = function() {
        tentaMudarImagem(nomeArquivo, index + 1);
    }
    
    img.src = url;
}

function mudarImagem() {
    let nomeArquivo = document.getElementById('campoPesquisa').value;
    tentaMudarImagem(nomeArquivo, 0);
}

btnPesquisar.addEventListener('click', mudarImagem);