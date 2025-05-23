function quit(){
  document.getElementById("close").addEventListener("click", () => {
    window.electronAPI.closeWindow();
  });
}

function min() {
  document.getElementById("minimize").addEventListener("click", () => {
    window.electronAPI.minimizeWindow();
  });
}

function showMusicGIF(){
    document.getElementById("musicLeft").style.display = "block";
    document.getElementById("musicRight").style.display = "block";

    const alarm = new Audio('Objects/Music/hbd.mp3');
    alarm.play();
}

document.getElementById("blow").addEventListener("click", () => {
    let icon = document.getElementById("cake");
    const frames = [
       "Objects/CakeBlowCandle/sprite_0.png",
       "Objects/CakeBlowCandle/sprite_1.png",
       "Objects/CakeBlowCandle/sprite_2.png",
       "Objects/CakeBlowCandle/sprite_3.png",
       "Objects/CakeBlowCandle/sprite_4.png",
       "Objects/CakeBlowCandle/sprite_5.png",
       "Objects/CakeBlowCandle/sprite_6.png",
       "Objects/CakeBlowCandle/sprite_7.png"
    ];

    frames.forEach((frame, index) => {
        setTimeout(() => {
                icon.src = frame;
            }, index * 100); 
    });

    let hbd = document.getElementById("blow");
    const frames2 = [
        "Objects/Happy Birthday!.png"
    ];

    showMusicGIF();
    changeHbd();

})


function changeHbd() {
    const elmntHBD = document.getElementById("blow");
    elmntHBD.src = "Objects/Happy Birthday!.png";
    elmntHBD.style.width = "220px";
    elmntHBD.style.height = "30px";
    elmntHBD.style.position = "absolute";
    elmntHBD.style.bottom = "80px";
    elmntHBD.style.left = "80px";
  }

   
