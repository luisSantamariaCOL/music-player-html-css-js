// Song data
const songList = [
    {
        title: "Reptilia",
        artist: "The Strokes",
        file: "acousticbreeze.mp3",
        cover: "1.jpeg"
    },
    {
        title: "Shadow Lady",
        artist: "Portwave",
        file: "anewbeginning.mp3",
        cover: "2.jpeg"
    },
    {
        title: "Past Lives",
        artist: "Sapientdream",
        file: "creativeminds.mp3",
        cover: "3.jpeg"
    },
]

//  Capturar elementos del DOM para trabajar con JS
const songs = document.getElementById("songs")

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
    console.log(songIndex)
}



// GO!
loadSongs()