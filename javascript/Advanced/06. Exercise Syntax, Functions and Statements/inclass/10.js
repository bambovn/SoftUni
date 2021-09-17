/**
 * 
 * @param {Array} arr; 
 * @param {Array} coordinates
 */

function solve(arr) {
    function hasWin(field, coordinates) {

        const [x, y] = coordinates;
        if (field[0][y] == field[1][y] == field[2][y]) {
            return true
        } else if (field[x][0] == field[x][1] == field[x][2]) {
            return false
        } else if ((field[0, 0] == field[1, 1] == field[2, 2]) || (field[0, 2] == field[1, 1] == field[2, 0])) {
            return true
        } else {
            return false
        }



    }

    function printResult(field) {
        field.for((el) => {
            console.log(el.join('\t'))
        })
    }

    let gameWon = false
    const playField = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ]


    let currentPlayerSing = 'X';

    for (let i = 0; i < arr.length; i += 1) {
        const [x, y] = arr[i].split(' ');

        if (playField[x][y]) {
            console.log("This place is already taken. Please choose another!")
        } else {
            playField[x][y] = currentPlayerSing



            if (hasWin(playField, coordinates[x, y])) {
                console.log(`Player ${currentPlayerSing} wins!`)
                gameWon = true
                printResult(playField)
                break
            }
            currentPlayerSing = currentPlayerSing == 'X' ? 'O' : 'X';
        }
    }
    if (!gameWon) {
        console.log('The game ended! Nobody wins :(')
        printResult(playField)
    }
}


solve(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]
)

solve(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"]
)

solve(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]
)