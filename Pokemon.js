function buscaPokemon(){
            
            var namePokemon = document.getElementById("namePokemon").value
            var xhr = new XMLHttpRequest();
            
            var apiPokemon = "https://pokeapi.co/api/v2/pokemon/" + namePokemon;
            

            xhr.addEventListener("readystatechange", function(){
                
                if (this.readyState === this.DONE) {
                var infoPokemon = (JSON.parse(this.responseText));
                console.log(infoPokemon)
                
                var result = document.createElement("div")
                result.innerHTML = infoPokemon.name.toUpperCase();
                document.getElementById("pokemonName").appendChild(result);
               
                var height = document.createElement("div")
                height.innerHTML = "HT: " + infoPokemon.height + " cm.";
                document.getElementById("pokemonHeight").appendChild(height);

                var weight = document.createElement("div")
                weight.innerHTML = "WT: " + infoPokemon.weight + " Kg.";
                document.getElementById("pokemonWeight").appendChild(weight);

                var id = document.createElement("div")
                id.innerHTML = "Num: " + infoPokemon.id;
                document.getElementById("pokemonId").appendChild(id);

                var type = document.createElement("div")
                type.innerHTML = "Type: " + infoPokemon.types[0].type.name;
                document.getElementById("pokemonType").appendChild(type);
                
                var image = document.createElement("img")
                image.setAttribute("src",infoPokemon.sprites.front_default)
                document.getElementById("pokemonImage").appendChild(image);
                
                // var abilities = document.createElement("div");
                
                // abilities.innerHTML = "Ability: " + infoPokemon.abilities[0].ability.name;
                // document.getElementById("pokemonAbility").appendChild(abilities);
               

                }

            });
            xhr.open("GET", apiPokemon);
            console.log(apiPokemon);
            xhr.send();
}


function reset(){
    document.getElementById("namePokemon").value = "";    
}

