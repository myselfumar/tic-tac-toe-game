import React from 'react';

interface SquareProps {
  value: string | null;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <button
      className="w-20 h-20 text-2xl font-bold bg-blue-300 border border-black-400 hover:bg-pink-200"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
