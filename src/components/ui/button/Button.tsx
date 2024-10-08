import { Link } from "@mui/material";
import styles from "./Button.module.css";

const Button = ({ car, year }: { car: string; year: string }) => {
  const isNextEnabled = car && year;

  return (
    <>
      <Link href={isNextEnabled ? `/result/${car}/${year}` : "#"}>
        <button
          className={!isNextEnabled ? styles.btn : styles.activeBtn}
          disabled={!isNextEnabled}
        >
          Next
        </button>
      </Link>
    </>
  );
};

export default Button;
