"use client";
import { ChangeEvent, useEffect, useState } from "react";
import Button from "../../ui/button/Button";
import { Car } from "@/car.types";
import styles from "./Filter.module.css";

const Filter = ({ data }: { data: Car[] }) => {
  const [selectedCar, setSelectedCar] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [years, setYears] = useState<number[]>([]);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const yearsArray = Array.from(
      { length: currentYear - 2014 + 1 },
      (_, i) => currentYear - i
    );
    setYears(yearsArray);
    setSelectedYear("");
  }, [selectedCar]);

  return (
    <div className={styles.filterDiv}>
      <h1>Car Filter</h1>
      <div className={styles.selectors}>
        <div className={styles.makeSelector}>
          <label htmlFor="make">Car Make</label>
          <select
            className={styles.select}
            id="make"
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              setSelectedCar(e.target.value);
              setSelectedYear("");
            }}
            value={selectedCar}
          >
            <option value="">Make</option>
            {data?.map((car: Car) => (
              <option key={car.MakeId} value={car.MakeId}>
                {car.MakeName}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.yearSelector}>
          <label htmlFor="year">Model Year</label>
          <select
            className={styles.select}
            id="year"
            onChange={(e) => setSelectedYear(e.target.value)}
            value={selectedYear}
          >
            <option value="">Year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <Button car={selectedCar} year={selectedYear} />
      </div>
    </div>
  );
};

export default Filter;
