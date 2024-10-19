const table = document.querySelector('table');

for (let i = 0; i < 8; i++) {
    const tablerow = document.createElement('tr');
    table.appendChild(tablerow);

    for (let i = 0; i < 8; i++) {
        const square = document.createElement('div');
        tablerow.appendChild(square);
    }
    
}