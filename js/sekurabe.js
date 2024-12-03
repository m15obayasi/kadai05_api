$(".pokeTable, .answer, .checkTable,.restart").hide();

let clickCount = 0;
const states = ["大", "中", "小"];
const dydoHeight = 18.3;

// ここにポケモンの身長を格納
let numbers = [];

// スタート！！
$(".contents").on("click", function () {
    $(".pokeTable, .checkTable").show();
    $(".contents").hide();
    $(".answer").fadeIn(1000);
    numbers.unshift(dydoHeight);
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

// 大 → 中 → 小
$(".image-0").on("click", function () {
    clickCount++;
    const index = clickCount % states.length;
    $(".check-0").html(states[index]);
});

$(".image-1").on("click", function () {
    clickCount++;
    const index = clickCount % states.length;
    $(".check-1").html(states[index]);
});

$(".image-2").on("click", function () {
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
    $(".answer").hide();
    $(".loadTable").show();
    setTimeout(function () {
    // 0 > 1 > 2 の順番
        if (numbers[0] == Math.max.apply(null, numbers)
            && text0.indexOf("大") == 0
            && text1.indexOf("中") == 0
            && numbers[2] == Math.min.apply(null, numbers)
            && text2.indexOf("小") == 0
        ) {
            resultPokemon();
            // 0 > > 2 > 1 の順番
        } else if (numbers[0] == Math.max.apply(null, numbers)
            && text0.indexOf("大") == 0
            && text2.indexOf("中") == 0
            && numbers[1] == Math.min.apply(null, numbers)
            && text1.indexOf("小") == 0
        ) {
            resultPokemon();
            // 1 > > 0 > 2 の順番
        } else if (numbers[1] == Math.max.apply(null, numbers)
            && text1.indexOf("大") == 0
            && text0.indexOf("中") == 0
            && numbers[2] == Math.min.apply(null, numbers)
            && text2.indexOf("小") == 0
        ) {
            resultPokemon();
            // 1 > > 2 > 0 の順番
        }else if (numbers[1] == Math.max.apply(null, numbers)
            && text1.indexOf("大") == 0
            && text2.indexOf("中") == 0
            && numbers[0] == Math.min.apply(null, numbers)
            && text0.indexOf("小") == 0
        ) {
            resultPokemon();
            // 2 > > 0 > 1 の順番
        }else if (numbers[2] == Math.max.apply(null, numbers)
            && text2.indexOf("大") == 0
            && text0.indexOf("中") == 0
            && numbers[1] == Math.min.apply(null, numbers)
            && text1.indexOf("小") == 0
        ) {
            resultPokemon();
            // 2 > > 1 > 0 の順番
        }else if (numbers[2] == Math.max.apply(null, numbers)
            && text2.indexOf("大") == 0
            && text1.indexOf("中") == 0
            && numbers[0] == Math.min.apply(null, numbers)
            && text0.indexOf("小") == 0
        ) {
            resultPokemon();
            // 不正解
        } else {
            $(".loadTable").hide();
            $(".check-0").html("不");
            setTimeout(function () {
                $(".check-1").html("正");
            }, 500);
            setTimeout(function () {
                $(".check-2").html("解");
            }, 1000);
            setTimeout(function () {
                $(".answer").show();
                $(".loadTable").hide();
                $(".check-0,.check-1,.check-2").html("ー");
            }, 5000);
            }
    }, 3000);
});

// 正解時のアクション
function resultPokemon() {
    $(".loadTable").hide();
    $(".check-0").html("大");
    setTimeout(function () {
        $(".check-1").html("正");
    }, 500);
    setTimeout(function () {
        $(".check-2").html("解");
    }, 1000);
    setTimeout(function () {
    $(".check-0").html(numbers[0]/10 + "m");
    $(".check-1").html(numbers[1]/10 + "m");
    $(".check-2").html(numbers[2]/10 + "m");
    }, 5000);
    setTimeout(function () {
    $(".restart").show();
    }, 7000);
};

// もう1回！！
$(".restart").on("click", function () {
    numbers = [];
    $(".answer").show();
    $(".restart").hide();
    $(".check-0,.check-1,.check-2").html("ー");
    numbers.unshift(dydoHeight);
    getPokemonA();
});
