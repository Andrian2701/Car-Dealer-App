import { Metadata } from "next/types";
import CarCard from "@/components/ui/card/CarCard";
import { Car, Vehicles } from "@/car.types";

export const metadata: Metadata = {
  title: "Result",
};

async function getVehicleModels(makeId: string, year: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch vehicle models");
  }

  return res.json();
}

const ResultPage = async ({
  params,
}: {
  params: { makeId: string; year: string };
}) => {
  const { makeId, year } = params;

  const data: Vehicles = await getVehicleModels(makeId, year);

  return (
    <main className="result-page">
      {data?.Results.map((car: Car) => (
        <CarCard key={car.Make_ID} data={car} />
      ))}
    </main>
  );
};

export default ResultPage;
