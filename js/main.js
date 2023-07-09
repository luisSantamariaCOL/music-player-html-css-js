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
        audio.play()
        changeCover(songIndex)
        changeTitle(songIndex)
        // console.log(songIndex)
    }
    
}

// Cambiar clase activa
function changeActiveClass(lastIndex, newIndex) {
    const links = document.querySelectorAll("a")
    if (lastIndex != null) {
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

// GO!
loadSongs()