function getColour(length = 6){
    let result = '';
    const symbols = '0123456789ABCDEF';
    for (let i = 0; i < length; i++){
        result += symbols.charAt(Math.floor(Math.random() * symbols.length));     
    }
    return result = '#' + result;
}
function generateBlocks() {
    for (let i = 0; i < 5; i++){
        const squareParent = document.createElement('div');
        document.body.append(squareParent);
        squareParent.style.display = 'flex';
        for (let j = 0; j < 5; j++){
            const squareChild = document.createElement('div');
            squareChild.classList.add("colour");
            squareParent.insertAdjacentElement("afterbegin", squareChild);
            squareChild.style.width = '50px';
            squareChild.style.height = '50px';
            squareChild.style.backgroundColor = getColour();   
        }
    }
}
function generateBlocksInterval() {
    const squareList = document.querySelectorAll('.colour');
    const colorArray = [...squareList];
    setInterval(() => {
        colorArray.forEach((item) => {
            item.style.backgroundColor = getColour();
        })
    }, 1000);
}