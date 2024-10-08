import { Car } from "@/car.types";
import styles from "./CarCard.module.scss";

const CarCard = ({ data }: { data: Car }) => {
  return (
    <div className={styles.carCard}>
      <h1>{data.Make_Name}</h1>
      <h2>{data.Model_Name}</h2>
    </div>
  );
};

export default CarCard;
