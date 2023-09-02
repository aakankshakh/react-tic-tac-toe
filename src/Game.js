import { useState } from "react";

function Square({ i, value, onSquareClick }) {
  const yBorder =
    i < 3 ? "border-y-2 md:border-y-4" : "border-b-2 md:border-b-4";
  const xBorder =
    i % 3 === 0 ? "border-x-2 md:border-x-4" : "border-r-2 md:border-r-4";
  const borderStyle = xBorder + " " + yBorder;

  const textColor =
    value === "X"
      ? "text-[#F5B251] dark:text-[#ffbe64]"
      : "text-[#D88C9A] dark:text-[#ffb0bf]";
  //trying to make X different color from O

  return (
    <button
      className={
        borderStyle +
        " " +
        textColor +
        " border-solid border-[#882f13] dark:border-[#f1f0ea] w-20 h-20 md:w-40 md:h-40 float-left text-6xl md:text-8xl font-bold -mt-1 -mr-1 p-0 text-center"
      }
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

function toggleThemeButton() {}

export default function Board({ playerOne }) {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    xIsNext ? (nextSquares[i] = "X") : (nextSquares[i] = "O");

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  function reset() {
    const nullSquares = Array(9).fill(null);
    setSquares(nullSquares);
    setXIsNext(true);
  }

  const winner = calculateWinner(squares);
  const tie = checkTie(squares);

  let status;
  if (winner) {
    status = "Winner: " + winner + "!";
  } else if (tie) {
    status = "It's a tie!";
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O") + "'s turn!";
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#f1f0ea] text-[#8e2a0c] dark:bg-[#5f210d] dark:text-[#f1f0ea]">
      <h1 className="text-5xl md:text-7xl font-bold underline underline-offset-4 mb-5">
        Tic Tac Toe
      </h1>
      <h1 className="text-l md:text-xl font-medium mb-10">
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
      <button
        className="text-xl font-semibold p-2 text-[#f1f0ea] dark:text-[#882f13] border-2 border-[#882f13] dark:border-[#f1f0ea] bg-[#882f13] dark:bg-[#f1f0ea] rounded-md mt-4"
        onClick={() => reset()}
      >
        {" "}
        Restart Game{" "}
      </button>
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

function checkTie(squares) {
  for (let i = 0; i < 9; i++) {
    let square = squares[i];
    if (!square) {
      return false;
    }
  }
  return true;
}
