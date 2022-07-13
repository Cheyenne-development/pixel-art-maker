// Default color
let color = document.getElementById('colorPicker').value
//Event listener to change selected color
document.getElementById('colorPicker').addEventListener('change', (e) => {
    color = document.getElementById('colorPicker').value
})
// event listener to change color
document.getElementById('pixelCanvas').addEventListener('click', function () {
    let cell = event.target
    // if square is default color or different from selected color it will be changed
    if (cell.className == 'gridSquare' || cell.className != color) {
        cell.style.backgroundColor = color;
        cell.className = color;
        // if the color of the cell is equal to the current color it will be cleared
    } else {
        cell.style.backgroundColor = '#ffffff'
        cell.className = 'gridSquare'
    }

})

// When size is submitted by the user, call makeGrid()
document.getElementById('sizePicker').addEventListener('submit', makeGrid)

function makeGrid(e) {
    e.preventDefault();
    let table = document.getElementById('pixelCanvas')
    // clears table on submit
    table.innerHTML = ''
    const rows = document.getElementById('inputHeight').value;
    const cols = document.getElementById('inputWidth').value;
    // Your code goes here!
    //creates one row then adds cells to the row.
    for (let i = 0; i < rows; i++) {
        row = table.insertRow(i)
        row.className = 'row'
        for (let x = 0; x < cols; x++) {
            cell = row.insertCell(x)
            cell.className = "gridSquare"
            cell.innerHTML = ""
        }
        // after all cells are added added to row, row is added to table and proceeds to the next
        table.appendChild(row);
    }
}


