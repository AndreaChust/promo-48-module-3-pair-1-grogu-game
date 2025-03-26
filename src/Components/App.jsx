import "../scss/App.scss";
import { useState } from "react";
import Header from "./Header";
import Board from "./Board";
import Dice from "./Dice";

function App() {
  const [groguPosition, setGroguPosition] = useState(0);
  const [goodsCookies, setGoodsCookies] = useState(["🍪", "🍪", "🍪"]);
  const [goodsEggs, setGoodsEggs] = useState(["🥚", "🥚", "🥚"]);
  const [goodsFrog, setGoodsFrog] = useState(["🐸", "🐸", "🐸"]);
  const [diceValue, setDiceValue] = useState(null);
  const [gameStatus, setGameStatus] = useState("En curso");

  /*Cuando hagamos click en Lanzar el dado,
  -se ejecuta la función de lanzar el dado,
  -recoger el resultado:
    Si es 4 --> Grogu debe de avanzar en el tablero y actualizar su posición,
    Si es 1, 2 o 3 -> una mercancía se eliminará de la lista,
      -actualizar la lista
   
  */

  function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }
 

  function rollDice() {
    const randomNumber = getRandomNumber(4);
    console.log(randomNumber);
  }

  return (
    <>
    <div className="page">
      <Header />
      <main className="page">
        <Board />
        <section>
          <Dice />
          <div className="game-status">En curso</div>
        </section>

        <section className="goods-container">
          <div className="goods-item">🍪</div>
          <div className="goods-item">🍪</div>
          <div className="goods-item">🍪</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">🥚</div>
          <div className="goods-item">🥚</div>
          <div className="goods-item">🥚</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">🐸</div>
          <div className="goods-item">🐸</div>
          <div className="goods-item">🐸</div>
        </section>
        <section>
          <button className="restart-button">Reiniciar Juego</button>
        </section>
      </main>
    </div>
    </>
  );
}

export default App;
