console.log("WELCOME TO SPOTIFY")


//Initialize the variables
let songindex = 0;
let audioElement = new Audio ('1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar= document.getElementById('myprogressbar');
let forward= document.getElementById('forward');
let backward= document.getElementById('backward');
let gift= document.getElementById('gift');
let masterSong = document.getElementById('masterSong')
let songItem = document.getElementsByClassName('songItem');
// let songname = document.getElementsByClassName('songName');
let songItems =Array.from(document.getElementsByClassName('songItem'))




let songs =[
    {songName: "new korean mix", filePath:"song/2.mp3", coverPath:"covers/02.jpg",duration:"2:54"},
    {songName: "banke hawa main", filePath:"song/1.mp3", coverPath:"covers/01.jpg"},
    {songName: "ni kude", filePath:"song/3.mp3", coverPath:"covers/03.jpg"},
    {songName: "meri zindgi se jane ka", filePath:"song/4.mp3", coverPath:"covers/04.jpg"},
    {songName: "Uska ki banana", filePath:"song/5.mp3", coverPath:"covers/05.jpg"},
    {songName: "barat ka bacha bacha", filePath:"song/6.mp3", coverPath:"covers/06.jpg"},
    {songName: "zihaal e miskin", filePath:"song/.mp3", coverPath:"covers/07.jpg"},
    {songName: "antidote", filePath:"song/6.mp3", coverPath:"covers/08.jpg"},
    {songName: "jaav pani main", filePath:"song/6.mp3", coverPath:"covers/09.jpg"},
    {songName: "machi machi tane aakho main", filePath:"song/6.mp3", coverPath:"covers/10.jpg"},  
]
songItems.forEach((element,i)=>{
    // console.log(element,i);
    element.getElementsByClassName("songlistimg")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML= songs[i].songName;
})

// audioElement.play();


// Handle play/pause music
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        gift.style.opacity= 1;
        masterplay.src = "circle-pause-regular.svg";
    }
    else{
        audioElement.pause();
        masterplay.src="circle-play-regular (1).svg";
        gift.style.opacity= 0;
    }
})



// listen to events
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value = progress;
})
//change in seekbar
myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = (myprogressbar.value*audioElement.duration)/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        masterSong.innerText = songs[songindex].songName;
        audioElement.src = `song/${songindex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gift.style.opacity = 1;

    })
})

document.getElementById('forward').addEventListener('click',()=>{
    if(songindex>8){
        songindex = 0;
    }
    else{
        songindex +=1;
    }
    // makeAllPlays();
    console.log(songindex)
    masterSong.innerText = songs[songindex].songName;     

    audioElement.src = `song/${songindex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();

})
document.getElementById('backward').addEventListener('click',()=>{
    if(songindex<1){
        songindex = 9;
    }
    else{
        songindex -=1;
    }
    // makeAllPlays();
    console.log(songindex)
    masterSong.innerText = songs[songindex].songName;     
    audioElement.src = `song/${songindex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
})
songItem.addEventListener("hover", ()=>{
    songItem.style.backgroundColor = "blue";

})