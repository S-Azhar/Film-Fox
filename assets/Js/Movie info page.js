
// Add click event listener to each song item image
MovieItems.forEach((element, i) => {
  let img = element.querySelector("img");
  img.src = songs[i].coverPath;
  img.addEventListener('click', () => {
    playSong(i);
  });
});