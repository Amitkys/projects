let timer;
let isRunning = false;
let isMusicPlaying = false;
let currentAudioIndex = 0;
let minutes, seconds;

const audioFiles = [
    "music/videoplayback.webm",
    "music/After Hours (320 kbps).mp3",
    "music/Alone Pt. II ✘ Faded [Remix Mashup] - Alan Walker & Ava Max (320 kbps)",
    "music/charlie_puth.mp3",
    "music/Collide (sped up + pitched) (320 kbps).mp3",
    "music/die for you [bass boosted + slow + reverb] - the weeknd (320 kbps).mp3",
    "music/Infinity (320 kbps).mp3",
    "music/Intro (Infected) (320 kbps).mp3",
    "music/katy perry - harleys in hawaii (s l o w e d) (320 kbps).mp3",
    "music/Love Nwantiti (Chill Version) (320 kbps).mp3",
    "music/Mind Games (320 kbps).mp3",
    "music/People (320 kbps).mp3",
    "music/Rauf & Faik — детство (Official video) (320 kbps).mp3",
    "music/Renegade x Under The Influence x I Was Never There (320 kbps).mp3",
    "music/SAD GIRLZ LUV MONEY (Remix) (320 kbps).mp3",
    "music/shawn mendes & camila cabello - señorita ( slowed and reverb ) (320 kbps).mp3",
    "music/Sickick Infected - Slowed+Reverb (320 kbps).mp3",
    "music/Sip (Alcohol) (320 kbps).mp3",
    "music/Starboy (TikTok Edit) (320 kbps).mp3",
    "music/The Hills X Where Have You Been (Slowed) (320 kbps).mp3",
    "music/Trevor Daniel - Falling (Official Music Video) (320 kbps).mp3",
    "music/Under The Influence (320 kbps).mp3",
    "music/Under The Influence x Renegade (slowed to perfection) (320 kbps).mp3",
    "music/Unholy (320 kbps).mp3",
    // "music/",
    // "path/to/your/music2.mp3",
    // Add more music files as needed
];

let currentAudio;

function startTimer(durationInMinutes) {
    let timerElement = document.querySelector("#timer");
    timer = setInterval(function () {
        if (minutes === 0 && seconds === 0) {
            clearInterval(timer);
            isRunning = false;
            // alert("Pomodoro Completed!");
            playRandomAudio();
        } else {
            if (seconds === 0) {
                minutes--;
                seconds = 59;
            } else {
                seconds--;
            }

            timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            timerElement.style.color = "yellow";
        }
    }, 1000);

    // Set initial values
    minutes = parseInt(durationInMinutes, 10);
    seconds = 0;
}

function startPomodoro() {
    if (!isRunning) {
        const selectedDuration = document.getElementById("duration").value;
        startTimer(selectedDuration);
        isRunning = true;
    }
}

function resetTimer() {
    clearInterval(timer);
    document.getElementById("timer").textContent = "00:00";
    isRunning = false;
}

function playRandomAudio() {
    const randomIndex = Math.floor(Math.random() * audioFiles.length);
    currentAudioIndex = randomIndex;
    playAudioAtIndex(currentAudioIndex);
}

function playAudioAtIndex(index) {
    const audioFile = audioFiles[index];
    currentAudio = new Audio(audioFile);
    currentAudio.play();
    isMusicPlaying = true;

    // Show the music control buttons
    document.getElementById("musicControl").style.display = "inline-block";
    document.getElementById("nextBtn").style.display = "inline-block";
    document.getElementById("prevBtn").style.display = "inline-block";
}

function toggleMusic() {
    if (isMusicPlaying) {
        currentAudio.pause();
    } else {
        currentAudio.play();
    }
    isMusicPlaying = !isMusicPlaying;
}

function nextMusic() {
    currentAudio.pause();
    currentAudioIndex = (currentAudioIndex + 1) % audioFiles.length;
    playAudioAtIndex(currentAudioIndex);
}

function prevMusic() {
    currentAudio.pause();
    currentAudioIndex = (currentAudioIndex - 1 + audioFiles.length) % audioFiles.length;
    playAudioAtIndex(currentAudioIndex);
}

document.getElementById("startBtn").addEventListener("click", startPomodoro);
document.getElementById("resetBtn").addEventListener("click", resetTimer);
document.getElementById("musicControl").addEventListener("click", toggleMusic);
document.getElementById("nextBtn").addEventListener("click", nextMusic);
document.getElementById("prevBtn").addEventListener("click", prevMusic);
