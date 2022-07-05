import React from "react";

import "./GameOver.css";

const GameOver = ({ retry, score }) => {
  return (
    <div>
      <h1>Fim do jogo!</h1>
      <h2>
        A sua Pontuação foi: <span>{score}</span>{" "}
      </h2>
      <button onClick={retry}>Reiniciar o jogo</button>;
    </div>
  );
};

export default GameOver;