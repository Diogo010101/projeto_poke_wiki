let audio = document.querySelectorAll('.pokeaudio');
let pokedex = document.querySelectorAll('.pokedex');


function ativarPokedex(dex, music) {  
    console.log(dex)
    console.log(music)
    console.log(ativarPokedex)
    var status;
    if(dex.style.display == 'flex'){
        status = true
        dex.style.display = 'none'
        music.pause()
    }else{
        status = false
        dex.style.display = 'flex';
        music.play()
        music.volume = 0.1
        window.scroll(0, 0);
    }
    console.log(status)


}


function fechar(dex, music){
    if(dex.style.display == 'flex'){
        music.pause()
        dex.style.display = 'none'
    }else{
        
    }
}






