import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Square from '../../components/Square'
import { initialPosition, initialGameState } from '@/static/initialGame'
import { useState } from 'react'
import { useImmer } from 'use-immer'






export default function Game() {
  //State for each button on the board
  const [gamePosition, updateGamePosition] = useImmer(initialPosition)
  //State for several variable used withing the logic of the game
  const [gameState, setGameState] = useImmer(initialGameState)

  // unicode representations of the emojis I use as pieces 
  let black = "\uD83D\uDFE0"
  let red = "\uD83D\uDD34"
  let possible = "\u25CF"

  //Called when a piece is selected in order to determine all possible moves for the curent piece
  function getPossibleSquares(j, i) {
    
    //These arent used but were a visual for me to see each of teh possible moves for each piece
    let basicRedMoves = [
      [j - 1, i - 1],
      [j - 1, i + 1]
    ]
    let basicRedJumps = [
      [j - 2, i - 2],
      [j - 2, i + 2]
    ]
    let basicBlackMoves = [
      [j + 1, i - 1],
      [j + 1, i + 1]
    ]
    let basicBlackJumps = [
      [j + 2, i - 2],
      [j + 2, i + 2]
    ]

    //Arrays to store the squares that need to be changed when I update the gamePosition state
    let possibleSquares = []
    let notPossibleSquares = []
    let removedSquares = []

    // Loops through each of the squares and adds the ones that must change to their appropraite arrays
    for (let row = 0; row < 8; row++) {
      for (let square = 0; square < 8; square++) {
        // Basically all squares that don't have a piece on them are checked to see if a possible move is available on that square
        if (!(gamePosition[row][square].content === red || gamePosition[row][square].content === black) && gamePosition[row][square].color === 1) {

          // Determines the possible moves if it is red's turn
          if (gameState.turn === red) {

            // These first two are the basic one square forward moves
            if (j - 1 === row) {
              if (i - 1 === square) {
                possibleSquares.push([row, square])
              }
              if (i + 1 === square) {
                possibleSquares.push([row, square])
              }
            }
            // These are the moves that calculate single jumps
            if (j - 2 === row) {
              if (i - 2 === square && gamePosition[j - 1][i - 1].content === black) {
                possibleSquares.push([row, square])
              }
              if (i + 2 === square && gamePosition[j - 1][i + 1].content === black) {
                possibleSquares.push([row, square])
              }
            }
          }
          // Determines the possible moves for black
          if (gameState.turn === black) {
            // These first two are the basic one square forward moves
            if (j + 1 === row) {
              if (i - 1 === square) {
                possibleSquares.push([row, square])
              }
              if (i + 1 === square) {
                possibleSquares.push([row, square])
              }
            }
            if (j + 2 === row) {
              if (i - 2 === square && gamePosition[j + 1][i - 1].content === red) {
                possibleSquares.push([row, square])
              }
              if (i + 2 === square && gamePosition[j + 1][i + 1].content === red) {
                possibleSquares.push([row, square])
              }
            }
            //TODO These are the moves that calculate single jumps
          }


        }
        // Assembles the array of squares which previously were marked as possible, staged to be removed from possible array
        if (gamePosition[row][square].content === possible) {
          notPossibleSquares.push([row, square])
        }
      }
    }
    console.log(possibleSquares)
    // Updates the gamePosition state
    updateGamePosition(draft => {
      // Iterates throught the not possible list to set each of the previously possible squares to possible
      for (let k = 0; k < notPossibleSquares.length; k++) {
        draft[notPossibleSquares[k][0]][notPossibleSquares[k][1]].content = ''
      }
      // TODO
      for (let k = 0; k < removedSquares.length; k++) {
        draft[removedSquares[k][0]][removedSquares[k][1]].content = ''
      }
      // Updates the draft to set all the possible squares to be possible
      for (let k = 0; k < possibleSquares.length; k++) {
        draft[possibleSquares[k][0]][possibleSquares[k][1]].content = possible
      }

    })


  }

  function getJumpedSquares(j,i){
    for (let row = 0; row < 8; row++) {
      for (let square = 0; square < 8; square++) {
        
        if(gameState.turn === red){
          if(j + 2 === row && i - 2 === square && gamePosition[j+1][i-1].content === black ){
            if(gameState.selectedSquare[0][0] === j+2 && gameState.selectedSquare[1][0] == i-2){
            updateGamePosition(draft => {
              draft[j+1][i-1].content = ''
            })
            
          }
        }
          else if(j + 2 === row && i + 2 === square && gamePosition[j+1][i+1].content === black ){
            if(gameState.selectedSquare[0][0] === j+2 && gameState.selectedSquare[1][0] == i+2){
            updateGamePosition(draft => {
              draft[j+1][i+1].content = ''
            })
            
          }
        }
      }
        if(gameState.turn === black){
          if(j - 2 === row && i - 2 === square && gamePosition[j-1][i-1].content === red ){
            if(gameState.selectedSquare[0][0] === j-2 && gameState.selectedSquare[1][0] == i-2){
            updateGamePosition(draft => {
              draft[j-1][i-1].content = ''
            })
          }
          }
          else if(j - 2 === row && i + 2 === square && gamePosition[j-1][i+1].content === red ){
            if(gameState.selectedSquare[0][0] === j-2 && gameState.selectedSquare[1][0] == i+2){
              updateGamePosition(draft => {
                draft[j-1][i+1].content = ''
                
              })
            }
            
            
          }
        }
      }
    }
  }

  // This is the main logic of the game as the whole game is just clicking buttons
  function handleClick(square, i, j) {

    // First test to check if anything should happen on click
    if (!gameState.gameOver) {
      console.log(gameState)
      // Makes sure that the proper piece gets to move on their turn
      if (gameState.turn === square.content) {
        // Checks all possible squares, Also updates the gamePosition
        getPossibleSquares(j, i)

        // Simply updates the selected square to be used in the next call of getPossibleSquares
        setGameState(draft => {
          draft.selectedSquare = [[j], [i]]
          //draft.turn = (gameState.turn === "R"? "B": "R")
        })
      }
      // Handles when the player clicks on a possible square
      else if (square.content === possible) {
        // Changes turns & sets the selected square back to null
        setGameState(draft => {
          draft.turn = (gameState.turn === red ? black : red)
          draft.selectedSquare = null
        })
        // Calculates which square was jumped during the move
        getJumpedSquares(j,i)
        // Updates the position of the piece that moved & removed all of the possible indicators on the board
        updateGamePosition(draft => {
          draft[j][i].content = gameState.turn;
          draft[gameState.selectedSquare[0]][gameState.selectedSquare[1]].content = ''
          for (let row = 0; row < 8; row++) {
            for (let square = 0; square < 8; square++) {
              if (draft[row][square].content === possible) {
                draft[row][square].content = ''
              }
              if(gameState.turn === red){
                if(draft[row][square].content === black){
                  
                }
              }

            }
          }
        })
      }
    }


  }

  // Renders the grid of 8x8 sqaures by row
  return (
    <>
      <Head>
        <title>Checkers</title>
        <meta name="description" content="Checkers app developed using React + Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {gamePosition.map((row, j) =>
          <div key={j}>
            {j}
            {
              row.map((square, i) =>
                <Square key={i} content={square.content} color={square.color} handleClick={() => handleClick(square, i, j)}></Square>
              )
            }
          </div>

        )}
      </main>
    </>
  )
}


