import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className="Start">
      <img src="/logo_secret.png" alt="" />
      <p>Clique no botão abaixo para começar o jogo</p>
      <button onClick={startGame}>Play</button>
    </div>
  );
};

export default StartScreen;
