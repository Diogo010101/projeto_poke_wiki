let audio = document.querySelectorAll('.pokeaudio');
let pokedex = document.querySelectorAll('.pokedex');


function ativarPokedex(dex, music) {  

    if (dex.style.display == 'none') {
        dex.style.display = 'flex';
        music.play()
        music.volume = 0.1
        window.scroll(0, 0);
    } else {
        dex.style.display = 'none'
    }
}


function fechar(dex, music){
    if(dex.style.display == 'flex'){
        music.pause()
        dex.style.display = 'none'
    }else{
        
    }
}






