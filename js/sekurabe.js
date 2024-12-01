$(".contents-2, .answer").hide();

$(".contents-1").on("click", function () {
    $(".contents-1").hide();
    $(".contents-2, .answer").show();
    getPokemon();
});


function getPokemon(){
    const random = Math.floor(Math.random() * 151) + 1;
    console.log(random);
    const url = `https://pokeapi.co/api/v2/pokemon/${random}`;
    console.log(url);
    const res = fetch(url);
    console.log(res);
    const pokemon = res.json();
    console.log(pokemon);
    const randomId = random.sprites.front_default;
    console.log(randomId);
    createPokemon(pokemon);
};


function createPokemon(pokemon,) {
    $(".image-1").html(`<img src="${randomId}">`);
    $(".image-2").html(`<img src="${pokemon.sprites.front_default}">`);
    $(".image-3").html(`<img src="${pokemon.sprites.front_default}">`);
};
