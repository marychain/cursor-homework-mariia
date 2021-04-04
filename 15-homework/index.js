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
            text.style.fontSize = font + 'px';
        } else if (result === "down") {
            font -= 2;
            text.style.fontSize = font + 'px';
        } else {
            const fontNow = document.createElement('p');
            fontNow.classList.add('fontNow');
            fontNow.textContent = 'Поточний шрифт:' + font;
            document.body.appendChild(fontNow);
        }
        result = yield;
    }
}
const fontGenerator = newFontGenerator(14);
const upFont = document.querySelector('.up');
const downFont = document.querySelector('.down');
const nowStateFont = document.querySelector('.now');
upFont.addEventListener('click', ()=>{
    fontGenerator.next("up").value;
})
downFont.addEventListener('click', ()=>{
    fontGenerator.next("down").value;
})
nowStateFont.addEventListener('click', ()=>{
    fontGenerator.next().value;
})

//fontGenerator.next("up").value;
// fontGenerator.next("up").value;
// fontGenerator.next("up").value;
// fontGenerator.next().value;
// fontGenerator.next("down").value;
// fontGenerator.next("down").value;
// fontGenerator.next("down").value;
// fontGenerator.next().value;