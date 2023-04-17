import { useState } from "react";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);


  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const newSquares = [...squares];
    if (xIsNext) {
      newSquares[i] = "X";
    } else {
      newSquares[i] = "O";
    }
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `The winner is ${winner}`
  }
   else {
    status = 'The next player:' + (xIsNext ? 'X': 'O')
  }

  return (
    <>
    <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onCLickHandler={() => handleClick(0)} />
        <Square value={squares[1]} onCLickHandler={() => handleClick(1)} />
        <Square value={squares[2]} onCLickHandler={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onCLickHandler={() => handleClick(3)} />
        <Square value={squares[4]} onCLickHandler={() => handleClick(4)} />
        <Square value={squares[5]} onCLickHandler={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onCLickHandler={() => handleClick(6)} />
        <Square value={squares[7]} onCLickHandler={() => handleClick(7)} />
        <Square value={squares[8]} onCLickHandler={() => handleClick(8)} />
      </div>
    </>
  );
}

function Square({ value, onCLickHandler }) {
  return (
    <button className="square" onClick={onCLickHandler}>
      {value}
    </button>
  );
}

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]; 
    if (squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
