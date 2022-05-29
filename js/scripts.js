window.onload = function() {
    let pokemons = new Pokemons();
    pokemons.init();

    let searchBar = new SearchBar();
    searchBar.init();

    let filter = new Filter();
    filter.init();
};