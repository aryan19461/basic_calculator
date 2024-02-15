import styles from "./ButtonContainer.module.css";
const ButtonsContainer = ({ onButtonCLick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "-",
    "/",
    "*",
    "=",
  ]; //button array
  return (
    <>
      <div className={styles.buttonsContainer}>
        {buttonNames.map((buttonName) => (
          <button
            className={styles.button}
            onClick={() => onButtonCLick(buttonName)} //oncclick is calling the onbuttonclick using the anonymous funcction
          >
            {buttonName}
          </button>
        ))}
      </div>
    </>
  );
};
export default ButtonsContainer;
