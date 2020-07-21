let url = 'http://hp-api.herokuapp.com/api/characters';

fetch(url).then(res => res.json()).then(data => {
    for(i = 0; i < 24; i++){

        let div = document.createElement('div');
        div.id = "characters";

        // div.style = "background: red; width: 600px; height: 500px; margin-top: 10px;";

        document.getElementsByClassName('divSection')[0].appendChild(div);

        let name = document.createElement('h2');
        let img = document.createElement('img');
        let spc = document.createElement('p');
        let gend = document.createElement('p');
        let hous = document.createElement('p');
        let anc = document.createElement('p');
        let wandwood = document.createElement('p');
        let wandcore = document.createElement('p');
        let pat = document.createElement('p');

    


        // anc.style = "margin-left: 300px; margin-top: -500px";
        // wandwood.style = "margin-left: 300px;";
        // wandcore.style = "margin-left: 300px;";
        // pat.style = "margin-left: 300px;";
        img.style = "width: 300px; height: 300px;";

        

        for(j = 0; j < 24; j++){
            if(j == 0){
                name.innerHTML = data[i].name;
                img.src = data[i].image;
                spc.innerHTML = data[i].species;
                gend.innerHTML = data[i].gender;
                hous.innerHTML = data[i].house;
                anc.innerHTML = data[i].ancestry;
                wandwood.innerHTML = data[i].wand.wood;
                wandcore.innerHTML = data[i].wand.core;
                pat.innerHTML = data[i].patronus;
            }  
        }
        div.append(name);
        div.append(img);
        div.append(spc);
        div.append(gend);
        div.append(hous);
        div.append(anc);
        div.append(wandwood);
        div.append(wandcore);
        div.append(pat);
    };
});


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



// const canvas = document.getElementById('canvas1');

// console.log(canvas);

// const ctx = canvas.getContext('2d');

// ctx.canvas.width = window.innerWidth;
// ctx.canvas.height = window.innerHeight;

// let particleArray;

// function Particle(x, y, directionX,directionY, size, color){
//   this.x = x;
//   this.y = y;
//   this.directionX = directionX;
//   this.directionY = directionY;
//   this.size = size;
//   this.color = color;
// }


// Particle.prototype.draw = function(){
//   ctx.beginPath();
//   ctx.arc(this.x, this.y , this.size ,0 , Math.PI * 2, false)
//     ctx.fillStyle = this.color;
//     ctx.fill();
  
// }

// // const particle1 = new Particle(10,10,1,1,20,'white');
// // particle1.draw();

// Particle.prototype.update = function(){
//   if(this.x + this.size > canvas.width  || this.x - this.size < 0){
//     this.directionX = -this.directionX;
//   }
//   if(this.y + this.size  > canvas.height || this.y - this.size < 0 ){
//     this.directionY = -this.directionY;
//   }
//   this.x += this.directionX;
//   this.y += this.directionY;
//   this.draw();
// };


// function init(){
// particleArray = [];
// for(let i=0; i<500;i++){
//   let size = Math.random() * 10;
//   let x = Math.random() * (innerWidth - size * 2);
//   let y = Math.random() * (innerHeight - size * 2) ;
//   let directionX = (Math.random() * .4 ) - .2 ;
//   let directionY = (Math.random() * .4) - .2;
//   let color = 'white';

//   particleArray.push(new Particle(x, y , directionX, directionY,size,color) )
//  }
// }


// function animate(){
// requestAnimationFrame(animate);
// ctx.clearRect(0,0, innerHeight ,innerWidth);

// for(let i=0; i < particleArray.length;i++ ){
//   particleArray[i].update()
// }
// }

// init();
// animate();

// window.addEventListener('resize',
// function(){
//   canvas.width = innerWidth;
//   canvas.height = innerHeight;
//   init()
// }
// )


function validateForm() {
  var x = document.forms["login"]["email"].value;
  let password = document.forms['login']['password'].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }

  if(password.length < 6) {
    alert('Password must be at least 6 charchters long')
  }
  if(password === ''){
    alert('Field must be filled out')
  }
  if(password == password.toLowerCase()){
    alert('There must be at least one upperCase')
  }
  else{
    alert('Password has been successfulyy chosen ')
  }
}
