const btnPesquisar = document.getElementById('btnPesquisar');
const img = document.getElementById('imagem');


function mudarImagem() {
    extensao = '.jpg'
    const campoPesquisa = document.getElementById('campoPesquisa').value;
    img.src = "img/" + campoPesquisa + extensao;
    console.clear();

    img.onerror = function() {
            extensao = '.jpeg'
            const campoPesquisa = document.getElementById('campoPesquisa').value;
            img.src = "img/" + campoPesquisa + extensao;
                console.clear();
            img.onerror = function() {
                extensao = '.webp'
                const campoPesquisa = document.getElementById('campoPesquisa').value;
                img.src = "img/" + campoPesquisa + extensao;

                img.onerror = function() {
                    extensao = '.svg'
                    img.src = "img/" + 'Placeholder' + extensao;
                    console.clear();
                }
                console.clear();

                
            }
        
    }
    
}

btnPesquisar.addEventListener('click', mudarImagem);