/* eslint-disable */

// Create a new instance of an audio object and adjust some of its properties
// var audio = new Audio();
// audio.src = '/audio/audio.mp3';
// audio.controls = true;
// audio.loop = true;
// audio.autoplay = true;
// var AudioPlaced = true;

// audio.onerror = function() {
//     AudioPlaced = false;
// }

// // add button to start audio if autoplay blocked
// audio.onloadeddata = function() {
//     console.log(audio.paused, AudioPlaced);
//     if (audio.paused && AudioPlaced == true){
//         document.getElementsByTagName('body')[0].innerHTML+= '<div class="audioButtonWrapper" style="z-index: 2; width: 100vw; height: 100vh; position: fixed; top: 0; left: 0; display: flex; justify-content: center; align-items: center; background-color: rgba(0,0,0,0.5);"> <div class="audioButton" onClick="activateSound()" style="width: auto; height: auto; background-color: white; font-size: 1.8rem; margin: 0; padding: 8px 25px 11px 25px; border-radius: 50px; margin-bottom: 8vh;"> <p style="margin: 0">start wallpaper</p></div></div>';
//     }
// }

// function activateSound (){
//     audio.play();
//     document.getElementsByClassName('audioButtonWrapper')[0].remove();
// }