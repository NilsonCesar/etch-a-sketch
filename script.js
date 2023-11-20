let makeDivGrid = (n, m) => {
    let grid = document.querySelector('.sketch');
    for(let i = 0; i < n; i++) {
        let line = document.createElement('div');
        line.classList.add('sketch-line');
        for(let j = 0; j < m; j++) {
            let item = document.createElement('div');
            item.textContent = 'teste';
            item.classList.add('sketch-item');
            line.appendChild(item);
        }

        grid.appendChild(line);
    }
}

makeDivGrid(16, 16);