import { Link } from "@mui/material";
import styles from "./Button.module.css";

const Button = ({ car, year }: { car: string; year: string }) => {
  const isNextEnabled = car && year;

  return (
    <>
      {isNextEnabled ? (
        <Link href={`/result/${car}/${year}`}>
          <button className={styles.activeBtn}>Next</button>
        </Link>
      ) : (
        <button className={styles.btn} disabled>
          Next
        </button>
      )}
    </>
  );
};

export default Button;
