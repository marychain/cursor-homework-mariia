
function* createIdGenerator() {
  for (let index = 1; index < Infinity; index++) {
      yield index;
  }
}
const idGenerator = createIdGenerator();
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

function* newFontGenerator(start) {
    const text = document.querySelector('.text');
    text.style.fontSize = start + 'px';
    let font = Number.parseInt(text.style.fontSize);
    let result = null;
    for (let index = 1; index < Infinity; index++) { 
        if (result === "up") {
            font += 2;
        } else if (result === "down") {
            font -= 2;
        }
        console.log(font);
        result = yield;
    }
}
const fontGenerator = newFontGenerator(14);
//fontGenerator.next("up").value;
// fontGenerator.next("up").value;
// fontGenerator.next("up").value;
// fontGenerator.next().value;
// fontGenerator.next("down").value;
// fontGenerator.next("down").value;
// fontGenerator.next("down").value;
// fontGenerator.next().value;