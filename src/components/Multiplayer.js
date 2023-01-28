import React, { useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";

const Multiplayer = () => {
  const [game, setGame] = useState(new Chess());

  function safeGameMutate(modify) {
    setGame((g) => {
      const update = { ...g };
      modify(update);
      return update;
    });
  }

  function onDrop(sourceSquare, targetSquare) {
    const gameCopy = { ...game };
    const move = gameCopy.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    });
    if (gameCopy.in_checkmate()) {
      alert("Game over");
    }
    setGame(gameCopy);
    return move;
  }

  return (
    <div>
      <h1 className="text-white text-center font-['Cinzel']">
        Play With A Friend in Your Local Computer 🤝
      </h1>

      <div className="flex flex-wrap justify-center mt-20 ">
        <Chessboard
          id="ClickToMove"
          position={game.fen()}
          onPieceDrop={onDrop}
          boardWidth={400}
          customBoardStyle={{
            borderRadius: "4px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
          }}
        />
      </div>
      <div className=" flex justify-center mt-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded   "
          onClick={() => {
            safeGameMutate((game) => {
              game.reset();
            });
          }}
        >
          Reset
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded  ml-10 "
          onClick={() => {
            safeGameMutate((game) => {
              game.undo();
            });
          }}
        >
          Undo
        </button>
      </div>
    </div>
  );
};

export default Multiplayer;
