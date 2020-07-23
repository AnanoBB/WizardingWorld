let url = 'http://hp-api.herokuapp.com/api/characters';

fetch(url).then(result => result.json()).then(data => {
   
    for(i = 0; i < data.length - 1; i++){
      
        let div = document.createElement('div');
        div.id = "characters";

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

    


        img.style = "width: 300px; height: 300px;";

        

        for(j = 0; j < data.length - 1; j++){
         
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
    alert('Password has been successfuly chosen ')
  }
}
