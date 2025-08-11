const btnPesquisar = document.getElementById('btnPesquisar');
const btnAutomatico = document.getElementById('btnAutomatico');

const img = document.getElementById('imagem');
let automatico = false;

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

    img.onerror = function () {
        tentaMudarImagem(nomeArquivo, index + 1);
    }

    img.src = url;
}

function mudarImagem() {
    let nomeArquivo = document.getElementById('campoPesquisa').value;
    tentaMudarImagem(nomeArquivo, 0);
    automatico = false;
    btnAutomatico.innerText = 'Automático';
}

btnPesquisar.addEventListener('click', mudarImagem);

const imgs = [
    'img1',
    'img2',
    'img3',
    'img4',
    'img5',
];

function mudarImagemAutomatico(index) {
    if (!automatico) {
        return;
    }

    if (index >= imgs.length) {
        index = 0;
    }

    tentaMudarImagem(imgs[index], 0);

    setTimeout(() => {
        mudarImagemAutomatico(index + 1);
    }, 2000);
}

btnAutomatico.addEventListener('click', () => {
    if (!automatico) {
        mudarImagemAutomatico(0);
        btnAutomatico.innerText = 'Parar';
        automatico = true;
    } else {
        img.src = 'img/Placeholder.svg';
        btnAutomatico.innerText = 'Automático';
        automatico = false;
    }

    mudarImagemAutomatico(0);
});