function Dice(props) {
    const handleClickDice = () => {
        props.clickRollDice(randomNumber);
        console.log(prop)
    }

  return (
    <>
    <button className="dice" onClick={handleClickDice}>
      Lanzar Dado
    </button>
    </>
  );
}

export default Dice;


