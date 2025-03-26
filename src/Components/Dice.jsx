function Dice(props) {
  const handleClickDice = () => {
    // console.log("Ha hecho click");
    props.rollDiceClick();
  };

  return (
    <>
      <button className="dice" onClick={handleClickDice}>
        Lanzar Dado
      </button>
    </>
  );
}

export default Dice;
