$(".pokeTable, .answer, .checkTable").hide();

$(".contents").on("click", function () {
    $(".pokeTable, .checkTable").show();
    $(".contents").hide();
    $(".answer").fadeIn(1000);
    getPokemonA();
});

// image-1用の関数
async function getPokemonA(){
    const randomA = Math.floor(Math.random() * 99) + 1;
    const urlA = `https://pokeapi.co/api/v2/pokemon/${randomA}`;
    const resA = await fetch(urlA);
    const pokemonA = await resA.json();
    console.log(pokemonA);
    createPokemonA(pokemonA);
    getPokemonB();
};

// image-2用の関数
async function getPokemonB(){
    const randomB = Math.floor(Math.random() * 199) + 100;
    const urlB = `https://pokeapi.co/api/v2/pokemon/${randomB}`;
    const resB = await fetch(urlB);
    const pokemonB = await resB.json();
    console.log(pokemonB);
    createPokemonB(pokemonB);
};

// pokemonAをimage-1に掲載
function createPokemonA(pokemonA) {
    $(".image-1").html(`<img src="${pokemonA.sprites.front_default}">`);
};

// pokemonBをimage-2に掲載
function createPokemonB(pokemonB) {
    $(".image-2").html(`<img src="${pokemonB.sprites.front_default}">`);
    $(".image-3").html(`<img src="./img/dedo.png"></img>`);
};

$(".check-1").on("click", function () {
    $(".check-1").html("高");
});
