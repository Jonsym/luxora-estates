import type { Metadata } from "next";

import { ListingHeader } from "@/components/properties/listing-header";
import { PropertiesExplorer } from "@/components/properties/properties-explorer";
import { allProperties } from "@/lib/data";

export const metadata: Metadata = {
  title: "Catálogo",
  description:
    "La cartera viva de Luxora Estates. Una selección reducida y curada de las residencias representadas en estos momentos por la casa.",
};

export default function PropertiesPage() {
  return (
    <main className="flex flex-1 flex-col">
      <ListingHeader total={allProperties.length} />
      <div className="mt-16 sm:mt-20 lg:mt-24">
        <PropertiesExplorer properties={allProperties} />
      </div>
    </main>
  );
}
