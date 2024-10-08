import Image from "next/image";
import Filter from "@/components/features/filter/Filter";
import { Vehicles } from "@/car.types";
import car from "@/assets/car.png";
import "./globals.css";

async function getVehicles() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/GetMakesForVehicleType/car?format=json`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data: Vehicles = await getVehicles();

  return (
    <main className="home-page">
      <Filter data={data.Results} />
      <Image src={car} alt="car" width={300} height={300} />
    </main>
  );
}
