
//the documents take the audio from the chosen keys and the if
// check if the audio is being played when the times run out the class is being removed
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return null;
  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
  setTimeout(function() {
    key.classList.remove("playing");
  }, 100);
}
// when the property name is different from transform  playng is being removed from the class
 function removeTransition(e) {
   if (e.propertyName !== "tansform") return;
   e.target.classList.remove("playing");
 }
//we use the constant to take all the elements from all class keys and we use foreach
// to lisen when a key is  pressed
 const keys = Array.from(document.querySelectorAll(".key"));
 keys.forEach(key => key.addEventListener("transitionend", removeTransition));
//when the event is happening the sound si being played
window.addEventListener("keydown", playSound);
