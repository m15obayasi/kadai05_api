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

// image-0用の関数
async function getPokemonA(){
    const randomA = Math.floor(Math.random() * 99) + 1;
    const urlA = `https://pokeapi.co/api/v2/pokemon/${randomA}`;
    const resA = await fetch(urlA);
    const pokemonA = await resA.json();
    console.log(pokemonA);
    createPokemonA(pokemonA);
    getPokemonB();
};

// image-1用の関数
async function getPokemonB(){
    const randomB = Math.floor(Math.random() * 199) + 100;
    const urlB = `https://pokeapi.co/api/v2/pokemon/${randomB}`;
    const resB = await fetch(urlB);
    const pokemonB = await resB.json();
    console.log(pokemonB);
    createPokemonB(pokemonB);
};

// pokemonAをimage-0に掲載、身長を格納
function createPokemonA(pokemonA) {
    $(".image-0").html(`<img src="${pokemonA.sprites.front_default}">`);
    let heightA = pokemonA.height;
    numbers.unshift(heightA);
};

// pokemonBをimage-1に掲載、身長を格納
function createPokemonB(pokemonB) {
    $(".image-1").html(`<img src="${pokemonB.sprites.front_default}">`);
    $(".image-2").html(`<img src="./img/dedo.png"></img>`);
    let heightB = pokemonB.height;
    numbers.splice(1, 0, heightB);
    console.log(numbers);
};

// 高 → 中 → 低
$(".check-0").on("click", function () {
    clickCount++;
    const index = clickCount % states.length;
    $(".check-0").html(states[index]);
});

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


// 回答アクション
$(".answer").on("click", function () {
    var $check0 = $(".check-0");
    var $check1 = $(".check-1");
    var $check2 = $(".check-2");
    var text0 = $check0.text();
    var text1 = $check1.text();
    var text2 = $check2.text();
    // 0 > 1 > 2 の順番
    if (numbers[0] == Math.max.apply(null, numbers)
        && text0.indexOf("高") == 0
        && text1.indexOf("中") == 0
        && numbers[2] == Math.min.apply(null, numbers)
        && text2.indexOf("低") == 0
    ){
        alert("正解！");
        // 0 > > 2 > 1 の順番
    } else if (numbers[0] == Math.max.apply(null, numbers)
        && text0.indexOf("高") == 0
        && text2.indexOf("中") == 0
        && numbers[1] == Math.min.apply(null, numbers)
        && text1.indexOf("低") == 0
    ) {
        alert("正解！");
        // 1 > > 0 > 2 の順番
    } else if (numbers[1] == Math.max.apply(null, numbers)
        && text1.indexOf("高") == 0
        && text0.indexOf("中") == 0
        && numbers[2] == Math.min.apply(null, numbers)
        && text2.indexOf("低") == 0
    ) {
        alert("正解！");
        // 1 > > 2 > 0 の順番
    }else if (numbers[1] == Math.max.apply(null, numbers)
        && text1.indexOf("高") == 0
        && text2.indexOf("中") == 0
        && numbers[0] == Math.min.apply(null, numbers)
        && text0.indexOf("低") == 0
    ) {
        alert("正解！");
        // 2 > > 0 > 1 の順番
    }else if (numbers[2] == Math.max.apply(null, numbers)
        && text2.indexOf("高") == 0
        && text0.indexOf("中") == 0
        && numbers[1] == Math.min.apply(null, numbers)
        && text1.indexOf("低") == 0
    ) {
        alert("正解！");
        // 2 > > 1 > 0 の順番
    }else if (numbers[2] == Math.max.apply(null, numbers)
        && text2.indexOf("高") == 0
        && text1.indexOf("中") == 0
        && numbers[0] == Math.min.apply(null, numbers)
        && text0.indexOf("低") == 0
    ) {
        alert("正解！");
        // 不正解
    } else {
        alert("違います、、");
    }
});
