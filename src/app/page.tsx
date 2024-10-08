import Filter from "@/components/features/Filter";
import { Vehicles } from "@/car.types";
import "./globals.css";

async function getVehicles() {
  const res = await fetch(
    "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json",
    { next: { revalidate: 200 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data: Vehicles = await getVehicles();

  return (
    <main>
      <Filter data={data.Results} />
    </main>
  );
}
