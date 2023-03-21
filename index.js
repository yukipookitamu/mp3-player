let player = document.getElementById('sound');
let playButton = document.querySelector('.play-button');
let stopButton = document.querySelector('.stop-button');

let backButton = document.querySelector('.backward-button');
let forwardButton = document.querySelector('.forward-button');

let song_title = document.querySelector('.title');

let song_index = 0;

// let songs_src = [
//     'songs/heroesTonight-Janji.mp3',
//     'songs/mortals-Warriyo.mp3',
//     'songs/onAndOn-Cartoon.mp3',
//     'songs/weAre-JoCohen.mp3',
//     'songs/whyWeLose-Cartoon.mp3'
// ];

let pause = true;


let songs = [
    {
        "title": 'Heroes Tonight (feat. Johnning)',
        "artist": 'Janji',
        "source": 'songs/heroesTonight-Janji.mp3'
    },
    {
        "title": 'Mortals (feat. Laura Brehm)',
        "artist": 'Warriyo',
        "source": 'songs/mortals-Warriyo.mp3'
    },
    {
        "title": 'On & On (feat. Daniel Levi',
        "artist": 'Cartoon',
        "source": 'songs/onAndOn-Cartoon.mp3'
    },
    {
        "title": 'We Are',
        "artist": 'Jo Cohen & Sex Whales',
        "source": 'songs/weAre-JoCohen.mp3'
    },
    {
        "title": 'Why We Lose (feat. Coleman Trapp',
        "artist": 'Cartoon',
        "source": 'songs/whyWeLose-Cartoon.mp3'
    }
];

// console.log(songs[0].title)
// console.log(songs[0].artist)
// console.log(songs[0].source)

// song_title.innerHTML = songs[song_index].title + " by " + songs[song_index].artist;

// change icon
function changeToPause() {
    document.querySelector('.play-image').src='images/pause-button.png'
}

function changeToPlay() {
    document.querySelector('.play-image').src='images/play-button.png'
}

// when loading, set song to first in arr
window.onload=function() {
    player.src = songs[song_index].source;
}

playButton.addEventListener("click", function() {

    song_title.innerHTML = songs[song_index].title + " by " + songs[song_index].artist;

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
    if (song_index + 1 >= songs.length) {
        // console.log("bound hit")
        song_index = -1;
    }

    if (pause) {
        player.src = songs[++song_index].source;
    } else {
        player.pause();
        player.src = songs[++song_index].source;
        player.play();
    }

    song_title.innerHTML = songs[song_index].title + " by " + songs[song_index].artist;

    console.log(song_index);

})

backButton.addEventListener("click", function() {

    // bounds check
    if (song_index - 1 < 0) {
        song_index = songs.length;
    }

    if (pause) {
        player.src = songs[--song_index].source;
    } else {
        player.pause();
        player.src = songs[--song_index].source;
        player.play();
    }

    song_title.innerHTML = songs[song_index].title + " by " + songs[song_index].artist;

    console.log(song_index);
       
})

stopButton.addEventListener("click", function() {
    console.log("Stopped!")
    player.pause();
    player.currentTime=0;
})