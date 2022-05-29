function FilterAbstract() {
    this.filterButton = document.querySelector('.filter-button');
    this.buttonsContainer = document.querySelector('.filter__buttons-container');
    this.filterContainer = document.querySelector('.filter');
    this.type = '';
    this.pokemonTypes = [];
    this.buttonClicked = false;
};

FilterAbstract.prototype = {
    init: function () {
        var _this = this;
        console.log('iniciando');
        
        _this.listeners();
        
        console.log(CONFIG.pokemonsArray);
    },
    listeners: function () {
        var _this = this;
        
        _this.filterButton.addEventListener('click', function (event) {
            console.log('click');
            if (!_this.buttonClicked) {
                _this.getPokemonTypesArray();
                _this.generatePokemonTypes();
                _this.buttonClicked = true;
            }
            
            _this.filterContainer.style.top = '0';
        });
    },
    getPokemonTypesArray: function () {
        var _this = this;
        CONFIG.pokemonsArray.forEach(function (element) {
            _this.type = element.types[0].type.name;
            if (!_this.pokemonTypes.includes(_this.type)) {
                _this.pokemonTypes.push(_this.type);
            }
        });
    },
    generatePokemonTypes: function () {
        var _this = this;
        _this.pokemonTypes.forEach(function (element) {
            const button = document.createElement('button');
            const buttonText = document.createTextNode(element);
            button.appendChild(buttonText);
            _this.buttonsContainer.appendChild(button);
        })
    }
};

let Filter = function () {
    FilterAbstract.call(this);
};

Filter.prototype = Object.create(FilterAbstract.prototype);
Filter.prototype.constructor = FilterAbstract;