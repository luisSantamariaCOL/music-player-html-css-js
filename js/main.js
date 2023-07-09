// Song data
const songList = [
    {
        title: "Reptilia",
        artist: "The Strokes",
        file: "thestrokes_reptilia.mp3",
        cover: "reptilia.jpg"
    },
    {
        title: "Shadow Lady",
        artist: "Portwave",
        file: "shadowlady_portwave.mp3",
        cover: "shadow_lady.jpg"
    },
    {
        title: "Past Lives",
        artist: "Sapientdream",
        file: "pastlives_sapientdream.mp3",
        cover: "past_lives.jpg"
    },
]

let actualSong = null

//  Capturar elementos del DOM para trabajar con JS
const songs = document.getElementById("songs")
const audio = document.getElementById("audio")

const cover = document.getElementById("cover")
const title = document.getElementById("title")

const play = document.getElementById("play")
const prev = document.getElementById("prev")
const next = document.getElementById("next")

const progress = document.getElementById("progress")

// Escuchar el elemento audio
audio.addEventListener("timeupdate", updateProgress)

// Escuchar clicks en los controles
prev.addEventListener("click", () => prevSong())

play.addEventListener("click", () =>  {
    if (audio.paused) {
        playSong()
    } else {
        pauseSong()
    }
})

next.addEventListener("click", () => nextSong())

// Cargar canciones y mostrar el listado
function loadSongs() {  
    songList.forEach((song, index) => {
        // console.log(index)
        // Crear li
        const li = document.createElement("li")
        // Crear a
        const link = document.createElement("a")
        // Intresar contenido en a
        link.textContent = song.title + " - " + song.artist
        link.href = "#"
        // Escuchar clicks
        link.addEventListener("click", () => loadSong(index)) // función anónima
        // Agregar a li
        li.appendChild(link)
        // Agregar li a ul
        songs.appendChild(li)

    })
}

// Cargar canción seleccionada
function loadSong(songIndex) {
    if (songIndex !== actualSong) {
        changeActiveClass(actualSong, songIndex)
        actualSong = songIndex
        audio.src = "./audio/" + songList[songIndex].file
        playSong()
        changeCover(songIndex)
        changeTitle(songIndex)
        // console.log(songIndex)
    }
    
}

// Actualizar barra de progreso de la canción
function updateProgress(event) {
    // Total y el actual
    const {duration, currentTime} = event.srcElement
    const percent = (currentTime / duration) * 100
    if (percent !== NaN) {
        progress.style.width = percent + "%"
    } else {
        progress.style.width = 0
    }
}

//Actualizar controles
function updateControls() {
    if (audio.paused) {
        play.classList.remove("fa-pause")
        play.classList.add("fa-play")
    } else {
        play.classList.add("fa-pause")
        play.classList.remove("fa-play")
    }
}

// Reproducir canción
function playSong() {
    if (actualSong !== null) {
        audio.play()
        updateControls()
    }

}


// Pausar canción
function pauseSong() {
    audio.pause()
    updateControls()
}


// Cambiar clase activa
function changeActiveClass(lastIndex, newIndex) {
    const links = document.querySelectorAll("a")
    if (lastIndex !== null) {
        links[lastIndex].classList.remove("active")
    }
    links[newIndex].classList.add("active")
    
}

// Cambiar el cover de la canción
function changeCover(songIndex) {
    cover.src = "./img/" + songList[songIndex].cover
} 

// Cambiar el titulo de la canción
function changeTitle(songIndex) {
    title.innerText = songList[songIndex].title
}

// Anterior canción
function prevSong() {
    if (actualSong > 0) {
        loadSong(actualSong - 1)
    } else {
        loadSong(songList.length - 1)
    }
}

// Siguiente canción
function nextSong() {
    if (actualSong < songList.length -1) {
        loadSong(actualSong+1)
    } else {
        loadSong(0)
    }
}

// GO!
loadSongs()