const playlist = [
    { title: "Wanapasa Male", src: "Wanapasa Male - Lakshitha Mihiran [SONG.LK].mp3", img: "wanapasamale.png" },
    { title: "Mulawe", src: "Mulawe-Lakshitha-Mihiran-www.song.lk.mp3", img: "mulawe.png" },
    { title: "Nohithunata", src: "Nohithunata - Yuki Navaratne [SONG.LK].mp3", img: "7.png" },
    { title: "Ruu chaya", src: "ruu-chaya-adare-sanda-ma-mage-sitha-shashika-l-gunsekra-chathumi.mp3", img: "roochaya.jpg" },
    { title: "Visekari", src: "visekari-bachi-susan-rude-bwoy-shiraz.mp3", img: "3.jpg" },
    { title: "Ape Kathandare", src: "ape-kathandare-dhyan-hewage.mp3", img: "4.png" },
    { title: "Mandire Hade", src: "mandire-hade-dulan-arx.mp3", img: "5.png" },
    { title: "Ill Mahe Kurullo", src: "ill-mahe-kurullo-yuki-navaratne-nisala-kavinda-akiiy.mp3", img: "6.png" },
    { title: "Shape of You Mashup", src: "shape-of-you-mashup-dashmi-wijerathne-panchala-fernando.mp3", img: "10.png" }
];

const audio = document.getElementById('audio');
const songTitle = document.getElementById('song-title');
const songImage = document.getElementById('song-image'); 
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const playlistElement = document.getElementById('playlist');
const playlistContainer = document.getElementById('playlist-container');
const playlistButton = document.getElementById('playlist-button');

let currentSongIndex = 0;

// Load the playlist
function loadPlaylist() {
    playlist.forEach((song, index) => {
        const li = document.createElement('li');
        li.textContent = song.title;
        li.addEventListener('click', () => loadSong(index));
        playlistElement.appendChild(li);
    });
}

// Load a song
function loadSong(index) {
    currentSongIndex = index;
    audio.src = playlist[index].src;
    songTitle.textContent = playlist[index].title;
    songImage.src = playlist[index].img;
    playSong();
}

// Play the current song
function playSong() {
    audio.play();
}

// Pause the current song
function pauseSong() {
    audio.pause();
}

// Play the next song
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    loadSong(currentSongIndex);
}

// Play the previous song
function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    loadSong(currentSongIndex);
}

// Automatically play the next song when the current song ends
audio.addEventListener('ended', nextSong);

// Toggle playlist visibility
playlistButton.addEventListener('click', () => {
    playlistContainer.classList.toggle('hidden');
});

// Event listeners
playButton.addEventListener('click', playSong);
pauseButton.addEventListener('click', pauseSong);
nextButton.addEventListener('click', nextSong);
prevButton.addEventListener('click', prevSong);

// Initialize the player
loadPlaylist();
