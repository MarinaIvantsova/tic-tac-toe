import { useState } from "react";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    const newSquares = [...squares];
    if (newSquares[i]) {
      return;
    }
    if (xIsNext) {
      newSquares[i] = "X";
    } else {
      newSquares[i] = "O";
    }
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };
  return (
    <>
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
