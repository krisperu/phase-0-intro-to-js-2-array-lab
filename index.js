const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push('Ralph');
}

function destructivelyPrependCat() {
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat() {
    let moreCats = [...cats, 'Broom'];
    return moreCats;
}

function prependCat() {
    let moreCats = ['Arnold', ...cats];
    return moreCats;
}

function removeLastCat() {
    let moreCats = cats.slice(0, -1);
    return moreCats;
}

function removeFirstCat() {
    let moreCats = cats.slice(1);
    return moreCats;
}