let http = new XMLHttpRequest();

http.open('get' , 'pokemon.json' ,true);


http.send();

http.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let product = JSON.parse(this.responseText);
        let output = "";
        
       console.log(product)

        for(let item of product){
            output += `
            
            <div class="products  mx-5 mt-5">
            <div class="pokemon shadow  ">
            <div class="img-container px-3">
            <img src = ${item.image} alt="${item.image}" >
            </div>
            <div class="details d-flex justify-content-center align-items-center">
            <p class="title px-1">${item.title}</p>
            <p class='description px-1'>${item.ability}</p>
            <p class='price px-1'>${item.type}</p>
            </div>
            </div>
            </div>
    
           
            
            `;
           
        }
        document.getElementById('pokemonContainer').innerHTML = output
    }
   
}


