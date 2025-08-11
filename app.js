const btnPesquisar = document.getElementById('btnPesquisar');
const btnAutomatico = document.getElementById('btnAutomatico');

let automatico = false;

const extensoes = ['jpg', 'jpeg', 'webp'];

function tentaMudarImagem(nomeArquivo, index) {
    if (index >= extensoes.length) {
        document.documentElement.style.setProperty('--background', 'url(img/Placeholder.svg)');
        alert('Não encontrei sua imagem :(');
        return;
    }

    let extensaoAtual = extensoes[index];
    let url = `img/${nomeArquivo}.${extensaoAtual}`;

    let tempImg = new Image();

    tempImg.onload = function () {
        document.documentElement.style.setProperty('--background', `url(${url})`);
    };

    tempImg.onerror = function () {
        tentaMudarImagem(nomeArquivo, index + 1);
    };

    tempImg.src = url;
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
        btnAutomatico.innerText = 'Parar';
        automatico = true;
        mudarImagemAutomatico(0);
    } else {
        document.documentElement.style.setProperty('--background', 'url(img/Placeholder.svg)');
        btnAutomatico.innerText = 'Automático';
        automatico = false;
    }
});