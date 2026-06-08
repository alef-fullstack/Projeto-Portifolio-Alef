 /*(Aqui cadastra os links das fotos de cada álbum)*/
const bancoDeFotos = {
    projeto1: {
        link: "https://alef-fullstack.github.io/CSS-Gerador-com-IA/",
    fotos: [
        "./assets/img-projets/project-generator-ia/Desktop.png",
        "./assets/img-projets/project-generator-ia/Funcionando.png",
    ]},
    projeto2: {
        link: "https://alef-fullstack.github.io/Projeto-Conversor-de-Moedas/",
    fotos:[
        "./assets/img-projets/projet-convert-currency/desktop.png",
        "./assets/img-projets/projet-convert-currency/funcionando.png", 
    ]},
    projeto3: {
        link: "https://alef-fullstack.github.io/Projeto-JOCKENPO/",
    fotos:[
        "./assets/img-projets/project-joken-po/desktop.png",
        "./assets/img-projets/project-joken-po/funcionando.png",   
    ]},
    projeto4: {
        link: "https://alef-fullstack.github.io/Projeto-WE-CARE/",
    fotos: [
        "./assets/img-projets/project-we-care/monitor.png",
        "./assets/img-projets/project-we-care/celular.png",   
    ]},
    projeto5: {
        link: "https://alef-fullstack.github.io/Projeto-Wide-Coverage-Location/",
    fotos: [
        "./assets/img-projets/project-wide-coverage-location/desktop.png",
        "./assets/img-projets/project-wide-coverage-location/mobile.png",    
    ]},
    projeto6: {
        link: "https://alef-fullstack.github.io/Projeto-Easy-Shopping/",
    fotos: [
        "./assets/img-projets/project-easy-shopping/desktop.png",
        "./assets/img-projets/project-easy-shopping/mobile.png",
    ]}
};

// 2. Elementos do HTML
const secaoAlbuns = document.getElementById('secao-albuns');
const secaoFotos = document.getElementById('secao-fotos');
const gridFotosDinamico = document.getElementById('grid-fotos-dinamico');
const nomeAlbumAtivo = document.getElementById('nome-album-ativo');
const btnVoltarAlbuns = document.getElementById('btn-voltar-albuns');
const cardsAlbuns = document.querySelectorAll('.card-album');
const btnAcessarSite = document.getElementById('btn-acessar-site')

const fotoModal = document.getElementById('foto-modal');
const fotoAmpliada = document.getElementById('foto-ampliada');
const btnFecharModal = document.getElementById('btn-fechar-modal');


// 3. Abrir o Álbum
cardsAlbuns.forEach(card => {
    card.addEventListener('click', () => {
        const idDoAlbum = card.getAttribute('data-album');
        const tituloDoAlbum = card.querySelector('h3').innerText;
        
        gridFotosDinamico.innerHTML = "";

        const dadosDoAlbum = bancoDeFotos[idDoAlbum];

        if (dadosDoAlbum) {
            btnAcessarSite.href = dadosDoAlbum.link;
            dadosDoAlbum.fotos.forEach(linkDaFoto => {
                const divItem = document.createElement('div');
                divItem.classList.add('foto-item');
                
                // Criando a tag img isolada como texto puro para não confundir o editor
                const imagemHTML = '<img src="' + linkDaFoto + '" alt="Foto do álbum" style="cursor: pointer;">';
                divItem.innerHTML = imagemHTML;
                
                gridFotosDinamico.appendChild(divItem);
            });
        }

nomeAlbumAtivo.innerText = tituloDoAlbum;
        secaoAlbuns.classList.add('hidden');
        secaoFotos.classList.remove('hidden');
    });


// 4. CORREÇÃO CRÍTICA: Evento de clique Global para a foto ampliada
// Em vez de colocar o clique na foto na hora de criar, ouvimos o grid inteiro.
gridFotosDinamico.addEventListener('click', (e) => {
    // Verifica se o que foi clicado foi realmente uma imagem
    if (e.target.tagName === 'IMG') {
        fotoAmpliada.src = e.target.src; // Copia o link exato da foto que já está aparecendo na tela
        fotoModal.classList.remove('hidden'); // Abre a modal
    }
});

// 5. Voltar para os álbuns
btnVoltarAlbuns.addEventListener('click', () => {
    secaoFotos.classList.add('hidden');
    secaoAlbuns.classList.remove('hidden');
});

// 6. Fechar a Modal (Garantindo que funcione por clique no X ou no fundo)
btnFecharModal.addEventListener('click', (e) => {
    e.stopPropagation(); // Impede que o clique "vaze" para o fundo
    fotoModal.classList.add('hidden');
});

fotoModal.addEventListener('click', (e) => {
    // Se clicar no fundo preto (fora da imagem), fecha
    if (e.target === fotoModal) {
        fotoModal.classList.add('hidden');
    }
});
})