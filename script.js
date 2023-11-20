let actN = 16;
let dbClickActived = false;
let color = 'black';
let buttonUserGrid = document.querySelector('.user-grid-button');
let clearButton = document.querySelector('.clear');
let buttonUserColor = document.querySelector('.user-color-button');

let makeDivGrid = (n) => {
    actN = n;
    let grid = document.querySelector('.sketch');
    grid.textContent = '';
    for(let i = 0; i < n; i++) {
        let line = document.createElement('div');
        line.classList.add('sketch-line');
        for(let j = 0; j < n; j++) {
            let item = document.createElement('div');
            item.classList.add('sketch-item');
            item.style.width = '100%';
            line.appendChild(item);
        }

        grid.appendChild(line);
    }
}

makeDivGrid(actN);

let changeItemColor = (e) => e.target.style.backgroundColor = color;
let activeHoverPainting = (e) => {
    dbClickActived = true;
    console.log(dbClickActived);
    changeItemColor(e, color);
};
let checkPaintingPoss = (e) => {
    if (dbClickActived)
        changeItemColor(e, color)
};


let setItemActions = () => {
    const gridItems = document.querySelectorAll('.sketch-item');

    gridItems.forEach((item) => {
        item.addEventListener('dblclick', e => activeHoverPainting(e, color));
        item.addEventListener('mouseover', e => checkPaintingPoss(e, color));
        item.addEventListener('mouseup', () => dbClickActived = false)
        item.addEventListener('click', e => changeItemColor(e, color));
    });
}

setItemActions();

buttonUserGrid.addEventListener('click', () => {
    let input = document.querySelector('.user-grid-size');
    let sizeGrid = parseInt(input.value);
    makeDivGrid(Math.min(sizeGrid, 100));
    input.value = '';
    setItemActions();
});

clearButton.addEventListener('click', () => {
    makeDivGrid(actN);
    setItemActions();
});

buttonUserColor.addEventListener('click', () => {
    let input = document.querySelector('.user-color-option');
    color = input.value;
    setItemActions();
})