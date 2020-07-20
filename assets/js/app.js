function play() {
    var audio = document.getElementById("audio");
    audio.play();
  }

  

  function openForm(){
    let btn = document.getElementById('btn');
    let click = document.getElementById('overlay');
    if(click.style.display=="none"){
      click.style.display = "block";
    }
    else{
      click.style.display = 'none';
    }
    if (btn.textContent === "LOGIN") {
      btn.textContent = "X";
    } else {
      btn.textContent = "LOGIN";
    }
  }



  
  