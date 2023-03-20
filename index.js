let player = document.getElementById('sound');
let playButton = document.querySelector('.play-button');
let stopButton = document.querySelector('.stop-button');

let backButton = document.querySelector('.backward-button');
let forwardButton = document.querySelector('.forward-button');

let song_index = 0;

let songs_src = [
    'songs/heroesTonight-Janji.mp3',
    'songs/mortals-Warriyo.mp3',
    'songs/onAndOn-Cartoon.mp3',
    'songs/weAre-JoCohen.mp3',
    'songs/whyWeLose-Cartoon.mp3'
];

let pause = true;

// change icon
function changeToPause() {
    document.querySelector('.play-image').src='images/pause-button.png'
}

function changeToPlay() {
    document.querySelector('.play-image').src='images/play-button.png'
}

// when loading, set song to first in arr
window.onload=function() {
    player.src = songs_src[song_index];
}

playButton.addEventListener("click", function() {

    if (pause) {
        console.log("play");
        player.play();
        changeToPause();
        pause = false;
    } else {
        console.log("pause");
        player.pause();
        changeToPlay();
        pause = true;
    }

    console.log(song_index);

})


// need to handle if already paused or already playing
forwardButton.addEventListener("click", function() {

    // bounds check
    if (song_index + 1 >= songs_src.length) {
        // console.log("bound hit")
        song_index = -1;
    }

    if (pause) {
        player.src = songs_src[++song_index];
    } else {
        player.pause();
        player.src = songs_src[++song_index];
        player.play();
    }

    console.log(song_index);

})

backButton.addEventListener("click", function() {

    // bounds check
    if (song_index - 1 < 0) {
        song_index = songs_src.length;
    }

    if (pause) {
        player.src = songs_src[--song_index];
    } else {
        player.pause();
        player.src = songs_src[--song_index];
        player.play();
    }

    console.log(song_index);
       

})

stopButton.addEventListener("click", function() {
    console.log("Stopped!")
    player.pause();
    player.currentTime=0;
})