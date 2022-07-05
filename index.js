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
            
            <div class="products  shadow mx-5">
            <div class="pokemon">
            <div class="img-container">
            <img src = ${item.image} alt="${item.image}" >
            </div>
            <div class="details d-flex justify-content-between align-items-center p-4">
            <p class="title">${item.title}</p>
            <p class='description'>${item.ability}</p>
            <p class='price'>${item.type}</p>
            </div>
            </div>
            </div>
            
            `;
           
        }
        document.getElementById('pokemonContainer').innerHTML = output
    }
   
}


