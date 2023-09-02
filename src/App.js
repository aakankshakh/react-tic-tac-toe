import { useState, onSquareClick } from "react";

function Square({ i, value, onSquareClick }) {
  const yBorder = i < 3 ? "border-y-2" : "border-b-2";
  const xBorder = i % 3 == 0 ? "border-x-2" : "border-r-2";

  borderStyle = xBorder + " " + yBorder;

  return (
    <button
      className={
        borderStyle +
        "border-solid border-[#882f13] w-40 h-40 float-left text-8xl font-bold -mt-1 -mr-1 p-0 text-center"
      }
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
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
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O") + "'s turn!";
  }
  return (
    <div className="min-h-screen min-w-screen bg-[#f1f0ea] text-[#882f13]">
      <h1 className="flex flex-col items-center text-7xl font-bold underline underline-offset-4 mb-5">
        Tic Tac Toe
      </h1>
      <a
        className="flex flex-col items-center text-l mb-10 hover:underline underline-offset-4"
        href="https://aakanksha.ca"
      >
        Made by Aakanksha
      </a>
      <div className="grid grid-cols-3 gap-0">
        {squares.map((square, index) => (
          <Square
            key={index}
            i={index}
            value={square}
            onSquareClick={() => handleClick(0)}
          />
        ))}
      </div>
      <h1 className="flex flex-col items-center mt-10 text-2xl font-semibold">
        {status}
      </h1>
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
