$(".pokeTable, .answer, .checkTable").hide();

let clickCount = 0;
const states = ["高", "中", "低"];
const dydoHeight = 18.3;

// ここにポケモンの身長を格納
let numbers = [
    dydoHeight
];


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

// pokemonAをimage-1に掲載、身長を格納
function createPokemonA(pokemonA) {
    $(".image-1").html(`<img src="${pokemonA.sprites.front_default}">`);
    let heightA = pokemonA.height;
    numbers.push(heightA);
};

// pokemonBをimage-2に掲載、身長を格納
function createPokemonB(pokemonB) {
    $(".image-2").html(`<img src="${pokemonB.sprites.front_default}">`);
    $(".image-3").html(`<img src="./img/dedo.png"></img>`);
    let heightB = pokemonB.height;
    numbers.push(heightB);
    console.log(numbers);
    // 高い順に並び替え
    numbers.sort(function(a, b) {
        return b - a;
    });
    console.log(numbers);
};

// 高 → 中 → 低
$(".check-1").on("click", function () {
    clickCount++;
    const index = clickCount % states.length;
    $(".check-1").html(states[index]);
});

$(".check-2").on("click", function () {
    clickCount++;
    const index = clickCount % states.length;
    $(".check-2").html(states[index]);
});

$(".check-3").on("click", function () {
    clickCount++;
    const index = clickCount % states.length;
    $(".check-3").html(states[index]);
});

// 回答アクション
$(".answer").on("click", function () {
    
});