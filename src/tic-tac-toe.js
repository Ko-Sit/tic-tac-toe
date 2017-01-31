class TicTacToe {
    constructor() {
        this.currentSymbol = 'x'
        this.winner = null
        this.board = []
        for (let i = 0; i < 9; i++)
            this.board[i] = null
        this.steps = 0
    }

    getCurrentPlayerSymbol() {
        return this.currentSymbol
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.board[3 * rowIndex + columnIndex]) {
            this.board[3 * rowIndex + columnIndex] = this.currentSymbol
            if (this.currentSymbol == 'x')
                this.currentSymbol = 'o'
            else
                this.currentSymbol = 'x'
            this.steps += 1
        }
    }

    isFinished() {
        return (this.noMoreTurns() || (this.getWinner() != null))
    }

    getWinner() {
            if ((this.board[0] && this.board[0] == this.board[1] && this.board[1] == this.board[2]) ||
                (this.board[3] && this.board[3] == this.board[4] && this.board[4] == this.board[5]) ||
                (this.board[6] && this.board[6] == this.board[7] && this.board[7] == this.board[8]) ||

                (this.board[0] && this.board[0] == this.board[3] && this.board[3] == this.board[6]) ||
                (this.board[1] && this.board[1] == this.board[4] && this.board[4] == this.board[7]) ||
                (this.board[2] && this.board[2] == this.board[5] && this.board[5] == this.board[8]) ||

                (this.board[0] && this.board[0] == this.board[4] && this.board[4] == this.board[8]) ||
                (this.board[2] && this.board[2] == this.board[4] && this.board[4] == this.board[6])) {
                    if (this.winner == null) {
                        if (this.currentSymbol == 'x')
                            this.winner = 'o'
                        else
                            this.winner = 'x'
                    }
                    return this.winner

            }
        return null
    }

    noMoreTurns() {
        return this.steps == 9
    }

    isDraw() {
        return (this.noMoreTurns() && this.getWinner() == null)
    }

    getFieldValue(rowIndex, colIndex) {
        return this.board[3 * rowIndex + colIndex]
    }

}

module.exports = TicTacToe;
