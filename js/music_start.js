let audio = document.querySelector('.pokeaudio')
let pokedex = document.querySelector('.pokedex')
let video = document.querySelector('.video')


function playPokemon(){
    if (pokedex.style.display = 'none'){
        pokedex.style.display = 'flex'
        audio.volume = 0.2
        audio.play();
        video.play();
    }else{
        pokedex.style.display = 'none'

    }
}

function stopPokemon(){
    if(pokedex.style.display = 'flex'){
        pokedex.style.display = 'none'
        audio.pause()
        video.pause()
    }else{
        pokedex.style.display = 'block'
    }
}




