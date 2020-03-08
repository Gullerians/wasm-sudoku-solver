import {Sudoku} from "wasm-sudoku-solver";

let grid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
];
// ==============================================================================

function getMousePos(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    }
}

// ==============================================================================
const sudoku_numbers = document.getElementById("sudoku-numbers");
const ctx_sudoku_numbers = sudoku_numbers.getContext('2d');

function handleInput(e) {

    let pos = getMousePos(sudoku_numbers, e);
    let posx = pos.x;
    let posy = pos.y;
}

sudoku_numbers.addEventListener('click', handleInput);

function draw_sudoku_numbers(){

}
// ==============================================================================
const sudoku_grid_canvas = document.getElementById("sudoku-canvas");
const sudoku_grid_ctx = sudoku_grid_canvas.getContext('2d');
function handleClick(e) {
    let pos = getMousePos(sudoku_grid_canvas, e);
    let posx = pos.x;
    let posy = pos.y;

    alert(posx + " " + posy);
}
sudoku_grid_canvas.addEventListener('click', handleClick);

function draw() {
    for (let x = 0; x < 9; x++) {
        for (let y = 0; y < 9; y++) {
            if (x % 2 === y % 2) {
                sudoku_grid_ctx.fillStyle = "black";
                sudoku_grid_ctx.fillRect(63 * x, 63 * y, 63, 63);

            } else {
                sudoku_grid_ctx.fillStyle = "white";
                sudoku_grid_ctx.fillRect(63 * x, 63 * y, 63, 63);
            }
        }
    }
}

draw();