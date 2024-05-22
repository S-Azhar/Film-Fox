console.log("Welcome to JioSaavn");

// Initialize the Variables
let songIndex = 0;
let movieElement = new Audio('/resource/Images/Movie Banners/Annabelle Creation (2017).jpg');
// let masterPlay = document.getElementById('masterPlay');
// let myProgressBar = document.getElementById('myProgressBar');
// let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let MovieItems = Array.from(document.getElementsByClassName('MovieItem'));

let songs = [
  { songName: "Tu hai kahan", filePath: "/resource/Images/Movie Banners/Annabelle Creation (2017).jpg", coverPath: "/resource/Images/Movie Banners/Annabelle Creation (2017).jpg" },
  { songName: "Pehle Bhi Main", filePath: "songs/2.mp3", coverPath: "/resource/Images/Movie Banners/Annabelle Creation (2017).jpg" },
  { songName: "Heartless", filePath: "songs/3.mp3", coverPath: "/resource/Images/Movie Banners/Annabelle Creation (2017).jpg" },
  { songName: "Blue Eyes", filePath: "songs/4.mp3", coverPath: "covers/4.jpeg" },
  { songName: "Heeriye", filePath: "songs/5.mp3", coverPath: "covers/5.jpeg" },
    { songName: "Kabhi Kabhi Aditi", filePath: "songs/6.mp3", coverPath: "covers/6.jpeg" },
  { songName: "Street Celebrity", filePath: "songs/7.mp3", coverPath: "covers/7.jpeg" },
  { songName: "Arabic Kuthu", filePath: "songs/8.mp3", coverPath: "covers/8.jpeg" },
  { songName: "Ik Tera", filePath: "songs/9.mp3", coverPath: "covers/9.jpeg" },
  { songName: "Gone Girl", filePath: "songs/6.mp3", coverPath: "covers/10.jpeg" },







  { songName: "Street Celebrity", filePath: "songs/7.mp3", coverPath: "covers/7.jpeg" },
  { songName: "Pehle Bhi Main", filePath: "songs/2.mp3", coverPath: "covers/2.jpeg" },
  { songName: "Sher Khul Gaye", filePath: "songs/9.mp3", coverPath: "covers/11.jpeg" },
  { songName: "Tu hai kahan", filePath: "songs/1.mp3", coverPath: "covers/1.jpeg" },
  { songName: "Pal", filePath: "songs/8.mp3", coverPath: "covers/15.jpeg" },
  { songName: "Nira Ishq", filePath: "songs/8.mp3", coverPath: "covers/13.jpeg" },
  { songName: "Badass (From Leo)", filePath: "songs/4.mp3", coverPath: "covers/12.jpeg" },
  { songName: "Sakhiyaan", filePath: "songs/5.mp3", coverPath: "covers/17.jpeg" },
  { songName: "Tu Aake Dekhle", filePath: "songs/10.mp3", coverPath: "covers/14.jpeg" },
  { songName: "Same Beef", filePath: "songs/3.mp3", coverPath: "covers/16.jpeg" },
]

MovieItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


// Handle play/pause click
// masterPlay.addEventListener('click', () => {
//   if (movieElement.paused || movieElement.currentTime <= 0) {
//     movieElement.play();
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');
//     gif.style.opacity = 1;
//   }
//   else {
//     movieElement.pause();
//     masterPlay.classList.remove('fa-pause-circle');
//     masterPlay.classList.add('fa-play-circle');
//     gif.style.opacity = 0;
//   }
// })
// Listen to Events
// movieElement.addEventListener('timeupdate', () => {
//   // Update Seekbar
//   progress = parseInt((movieElement.currentTime / movieElement.duration) * 100);
//   myProgressBar.value = progress;
// })

// myProgressBar.addEventListener('change', () => {
//   movieElement.currentTime = myProgressBar.value * movieElement.duration / 100;
// })

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName('MovieItemPlay')).forEach((element) => {
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
  })
}

Array.from(document.getElementsByClassName('MovieItemPlay')).forEach((element) => {
  element.addEventListener('click', (e) => {
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    movieElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    movieElement.currentTime = 0;
    movieElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
  })
})

document.getElementById('next').addEventListener('click', () => {
  if (songIndex >= 9) {
    songIndex = 0
  }
  else {
    songIndex += 1;
  }
  movieElement.src = `songs/${songIndex+1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  movieElement.currentTime = 0;
  movieElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {
  if (songIndex <= 0) {
    songIndex = 0
  }
  else {
    songIndex -= 1;
  }
  movieElement.src = `songs/${songIndex+1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  movieElement.currentTime = 0;
  movieElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
})

movieElement.addEventListener('ended', () => {
  // Automatically play the next song
  if (songIndex < songs.length - 1) {
    songIndex++;
    movieElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    movieElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
  } else {
    // If it's the last song, stop playback or do whatever you want
    movieElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
  }
});

// Function to play a specific song
const playSong = (index) => {
  // Update songIndex
  songIndex = index;
  
  // Set the audio source to the selected song
  movieElement.src = songs[songIndex].filePath;
  
  // Update the song name display
  masterSongName.innerText = songs[songIndex].songName;
  
  // Reset the audio playback time
  movieElement.currentTime = 0;
  
  // Play the selected song
  movieElement.play();
  
  // Update play/pause icon
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
  
  // Show GIF animation
  gif.style.opacity = 1;
};

// Add click event listener to each song item image
MovieItems.forEach((element, i) => {
  let img = element.querySelector("img");
  img.src = songs[i].coverPath;
  img.addEventListener('click', () => {
    playSong(i);
  });
});
