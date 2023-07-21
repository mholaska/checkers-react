let black = "\uD83D\uDFE0"
let red = "\uD83D\uDD34"
let possible = "\u25CF"

// Definition of the initial position
export const initialPosition = [
    [
        {
            content: "",
            
        },
        {
            content: black,
            queen: false,
            color: 1,
            possible: false
        },
        {
            content: "",
            
        },
        {
            content: black,
            queen: false,
            color: 1,
            possible: false
        },
        {
            content: "",
            
        },
        {
            content: black,
            queen: false,
            color: 1,
            possible: false
        },
        {
            content: "",
            
        },
        {
            content: black,
            queen: false,
            color: 1,
            possible: false
        },
    ],
    [
        {
            content: black,
            queen: false,
            color: 1,
            possible: false
        },
        {
            content: "",
            
        },
        {
            content: black,
            queen: false,
            color: 1,
            possible: false
        },
        {
            content: "",
            
        },
        {
            content: black,
            queen: false,
            color: 1,
            possible: false
        },
        {
            content: "",
            
        },
        {
            content: black,
            queen: false,
            color: 1,
            possible: false
        },
        {
            content: "",
            
        },
    ],
    [
        {
            content: "",
            
        },
        {
            content: "",
            queen: false,
            color: 1,
            possible: false
        },
        {
            content: "",
            
        },
        {
            content: "",
            queen: false,
            color: 1,
            possible: false
        },
        {
            content: "",
            
        },
        {
            content: "",
            queen: false,
            color: 1,
            possible: false
        },
        {
            content: "",
            
        },
        {
            content: "",
            queen: false,
            color: 1,
            possible: false
        }
    ],
    [

        {
            content: "",
            queen: false,
            color: 1,
            possible: false
        },
        {
            content: "",
            
        },
        {
            content: "",
            queen: false,
            color: 1,
            possible: false
        },
        {
            content: "",
            
        },
        {
            content: "",
            queen: false,
            color: 1,
            possible: false
        },
        {
            content: "",
            
        },
        {
            content: "",
            queen: false,
            color: 1,
            possible: false
        },
        {
            content: "",
            
        },
    ],
    [
        {
            content: "",
            
        },
        {
            content: "",
            queen: false,
            color: 1,
            possible: false
        },
        {
            content: "",
            
        },
        {
            content: "",
            queen: false,
            color: 1,
            possible: false
        },
        {
            content: "",
            
        },
        {
            content: "",
            queen: false,
            color: 1,
            possible: false
        },
        {
            content: "",
            
        },
        {
            content: "",
            queen: false,
            color: 1,
            possible: false
        }
    ],
    [

        {
            content: "",
            queen: false,
            color: 1,
            possible: false
        },
        {
            content: "",
            
        },
        {
            content: "",
            queen: false,
            color: 1,
            possible: false
        },
        {
            content: "",
            
        },
        {
            content: "",
            queen: false,
            color: 1,
            possible: false
        },
        {
            content: "",
            
        },
        {
            content: "",
            queen: false,
            color: 1,
            possible: false
        },
        {
            content: "",
            
        },
    ],
    [
        {
            content: "",
            
        },
        {
            content: red,
            queen: false,
            color: 1,
            possible: false
        },
        {
            content: "",
            
        },
        {
            content: red,
            queen: false,
            color: 1,
            possible: false
        },
        {
            content: "",
            
        },
        {
            content: red,
            queen: false,
            color: 1,
            possible: false
        },
        {
            content: "",
            
        },
        {
            content: red,
            queen: false,
            color: 1,
            possible: false
        }
    ],
    [

        {
            content: red,
            queen: false,
            color: 1,
            possible: false
        },
        {
            content: "",
            
        },
        {
            content: red,
            queen: false,
            color: 1,
            possible: false
        },
        {
            content: "",
            
        },
        {
            content: red,
            queen: false,
            color: 1,
            possible: false
        },
        {
            content: "",
            
        },
        {
            content: red,
            queen: false,
            color: 1,
            possible: false
        },
        {
            content: "",
            
        },
    ],


]

// Definition of the initial game variables
export const initialGameState = {
    turn: red,
    selectedSquare: null,
    gameOver: false,
}