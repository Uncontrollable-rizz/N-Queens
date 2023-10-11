function solveQueens() {
    let n = parseInt(document.getElementById('sideLength').value);

    if (n <= 0 || n >= 20) {
        alert(n <= 0 ? "Please enter a positive integer." : "N is too large. Please choose a smaller value.");
        return;
    }


    
    

    let board = new Array(n).fill(0);
    let solutionDiv = document.getElementById('solution');
    solutionDiv.innerHTML = '';

    if (!placeQueens(0)) {
        solutionDiv.innerHTML = "<h2>No solution found.</h2>";
    }

    function canPlace(row, col) {
        for (let i = 0; i < row; ++i) {
            if (board[i] == col || board[i] - i == col - row || board[i] + i == col + row) {
                return false;
            }
        }
        return true;
    }

    function printSolution() {
        let tableHTML = "<table>";
        for (let i = 0; i < n; ++i) {
            tableHTML += "<tr>";
            for (let j = 0; j < n; ++j) {
                tableHTML += `<td>${board[i] == j ? 'Q' : ''}</td>`;
            }
            tableHTML += "</tr>";
        }
        tableHTML += "</table>";
        solutionDiv.innerHTML = `<h2>Solution:</h2>${tableHTML}`;
    }

    function placeQueens(row) {
        if (row === n) {
            printSolution();
            return true;
        }
        for (let j = 0; j < n; ++j) {
            if (canPlace(row, j)) {
                board[row] = j;
                if (placeQueens(row + 1)) {
                    return true;
                }
            }
        }
        return false;
    }

    
}


