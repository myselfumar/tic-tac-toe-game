import React from 'react';
import Square from './square';

interface BoardProps {
  squares: (string | null)[];
  onSquareClick: (index: number) => void;
}

const Board: React.FC<BoardProps> = ({ squares, onSquareClick }) => {
  return (
    <div className="grid grid-cols-3 gap-4 w-64">
      {squares.map((value, index) => (
        <Square key={index} value={value} onClick={() => onSquareClick(index)} />
      ))}
    </div>
  );
};

export default Board;
