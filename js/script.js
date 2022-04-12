let musicas = [
    {titulo: 'TVA', artista: 'Natalie Holt', src:'/musik/Loki Theme.mp3', img:'img/loki.jpeg'},
    {titulo: 'Time', artista: 'Hans Zimmer', src:'/musik/time-hans-zimmer.mp3', img:'img/hans-zimmer.jpeg'},
    {titulo: 'The Rains of Castamere', artista: 'The National', src:'/musik/lannister.mp3', img:'img/lannister.jpeg'}
];

let musica = document.querySelector('audio');
let duracaoMusica = document.querySelector('.fim', window.onload = duracao);
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('descricao i');


// Eventos 


document.querySelector('.btn-play').addEventListener('click', tocarMusica);
document.querySelector('.btn-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);


//funções
function duracao (){
    duracaoMusica.textContent = segundoParaMinuto(Math.floor(musica.duration));
}
function tocarMusica(){
    musica.play();
    document.querySelector('.btn-pause').style.display = 'block';
    document.querySelector('.btn-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.btn-pause').style.display = 'none';
    document.querySelector('.btn-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundoParaMinuto (Math.floor(musica.currentTime));
}

function segundoParaMinuto (segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if(campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos + ':' + campoSegundos;
}




