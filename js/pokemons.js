function PokemonsAbstract() {
    this.pokemonId;
    this.url;
    this.pokemonsMax = 20;
    this.pokemonsContainer = document.querySelector('.pokemons-container-js');
    this.loadingContainer = document.querySelector('.loading-container');
}

PokemonsAbstract.prototype = {
    init: function () {
        var _this = this;
        _this.getPokemonsArr();
        console.log(CONFIG.pokemonsArray);
        
    },
    show: function () {
        var _this = this;
    },
    listeners: function () {
        var _this = this;
    },

    getPokemon: async function (pokemonId) {
        var _this = this;
        
        _this.url = `https://pokeapi.co/api/v2/pokemon/${_this.pokemonId}`;
        const res = await fetch(_this.url);
        const pokemon = await res.json();

        CONFIG.pokemonsArray.push(pokemon);
    },

    getPokemonsArr: async function () {
        var _this = this;
        for (_this.pokemonId = 1; _this.pokemonId <= _this.pokemonsMax; _this.pokemonId++) {
            await _this.getPokemon(_this.pokemonId);
        }

        Utils.generatePokemons(CONFIG.pokemonsArray, _this.pokemonsContainer);
        Utils.hide(_this.loadingContainer);
        
    }
      
};

let Pokemons = function () {
    PokemonsAbstract.call(this);
};

Pokemons.prototype = Object.create(PokemonsAbstract.prototype);
Pokemons.prototype.constructor = PokemonsAbstract;
