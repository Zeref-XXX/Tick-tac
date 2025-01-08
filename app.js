let board = document.querySelector('.board')
let turn = 'O'
const board_array = new Array(9).fill('E');

let tot_turn = 0;

let winner = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
[0, 3, 6], [1, 4, 7], [2, 5, 8],
[0, 4, 8], [2, 4, 6]];



function checkWinner() {
    // console.log("CHECKING")
    for (let [in0, in1, in2] of winner) {
        // console.log("inside for")
        if (board_array[in0] != "E" && board_array[in1] == board_array[in2] && board_array[in2] == board_array[in0]) {
            // console.log("inside if")
            board.removeEventListener('click', printer);
            return 1;
        }
    }
    return 0;
}

const player_o = document.getElementById("oturn")
const player_x = document.getElementById("xturn")

player_o.innerText = "YOUR TURN"

const printer = (event) => {

    // console.log(event.target)
    const element = event.target;

    if (board_array[element.id] == "E") {
        tot_turn++;
        board_array[element.id] = "O";
        if (turn == 'O') {

            player_x.innerText = "YOUR TURN"
            player_o.innerText = " "
            element.innerHTML = 'O'
            turn = "X"
            if (checkWinner()) {
                document.getElementById('winning').innerText = "Winner is O";
                  player_o.innerText = " ";
                  player_x.innerText = " ";
                return;
            }
        }
        else {
            player_o.innerText = "YOUR TURN"
            player_x.innerText = ""

            element.innerHTML = "X"
            board_array[element.id] = "X"
            turn = "O"
            if (checkWinner()) {
                document.getElementById('winning').innerText = "Winner is X";
                   player_o.innerText = " ";
                  player_x.innerText = " ";
                return;

            }
        }
        if (tot_turn == 9) {
            document.getElementById('winning').innerText = "Draw";
        }

    }
}

board.addEventListener('click', printer)

const restart = document.getElementById('restart')

restart.addEventListener('click', (event) => {
    const cell = document.getElementsByClassName('cell');

    Array.from(cell).forEach((value) => {
        value.innerHTML = ""
    })

    tot_turn = 0;
    document.getElementById('winning').innerText = "";
    board_array.fill('E'); // Reset the global board_array
    board.addEventListener('click', printer)
})


