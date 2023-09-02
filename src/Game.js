import { useState, onSquareClick } from "react";

function Square({ i, value, onSquareClick }) {
  const yBorder = i < 3 ? "border-y-4" : "border-b-4";
  const xBorder = i % 3 === 0 ? "border-x-4" : "border-r-4";

  const borderStyle = xBorder + " " + yBorder;

  return (
    <button
      className={
        borderStyle +
        " border-solid border-[#882f13] dark:border-[#f1f0ea] w-40 h-40 float-left text-8xl font-bold -mt-1 -mr-1 p-0 text-center"
      }
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default function Board({ playerOne }) {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    xIsNext ? (nextSquares[i] = "X") : (nextSquares[i] = "O");

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let tie = false;
  for (let i = 0; i < 9; i++) {
    let square = squares[i];
    if (!square) {
      tie = false;
      break;
    } else {
      tie = true;
    }
  }
  // tie = squares.map((square, index) => !(tie && !square));
  let status;
  if (tie) {
    status = "It's a tie!";
  } else if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O") + "'s turn!";
  }
  return (
    <div className="flex flex-col items-center min-h-screen bg-[#f1f0ea] text-[#8e2a0c] dark:bg-[#8e2a0c] dark:text-[#f1f0ea]">
      <h1 className="text-7xl font-bold underline underline-offset-4 mb-5">
        Tic Tac Toe
      </h1>
      <h1 className="text-xl font-medium mb-10">
        Made by{" "}
        <a
          className="hover:underline decoration-dotted underline-offset-4"
          href="https://aakanksha.ca"
        >
          Aakanksha
        </a>
      </h1>
      <div className="grid grid-cols-3 gap-0">
        {squares.map((square, index) => (
          <Square
            key={index}
            i={index}
            value={square}
            onSquareClick={() => handleClick(index)}
          />
        ))}
      </div>
      <h1 className="mt-10 text-2xl font-semibold">{status}</h1>
      <h1 className="mt-10 text-2xl font-semibold">{playerOne}</h1>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
