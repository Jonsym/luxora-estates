import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PropertyAmenities } from "@/components/properties/property-amenities";
import { PropertyDescription } from "@/components/properties/property-description";
import { PropertyHero } from "@/components/properties/property-hero";
import { PropertyLifestyle } from "@/components/properties/property-lifestyle";
import { PropertyLocation } from "@/components/properties/property-location";
import { PropertySpecs } from "@/components/properties/property-specs";
import { PropertyStickyInfo } from "@/components/properties/property-sticky-info";
import { InquiryForm } from "@/components/properties/inquiry-form";
import { RelatedProperties } from "@/components/properties/related-properties";
import {
  allProperties,
  getProperty,
  getRelatedProperties,
} from "@/lib/data";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return allProperties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const property = getProperty(slug);
  if (!property) {
    return { title: "Residencia no encontrada" };
  }
  return {
    title: property.name,
    description: property.blurb,
    openGraph: {
      title: property.name,
      description: property.blurb,
      images: [{ url: property.image }],
      type: "article",
      locale: "es_ES",
    },
  };
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const property = getProperty(slug);
  if (!property) notFound();

  const related = getRelatedProperties(slug, 3);
  const lifestyleStart = 5;

  return (
    <main className="flex flex-1 flex-col">
      <PropertyHero property={property} />

      <Section className="relative">
        <Container size="wide">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-0">
            {/* Sticky aside — first on mobile so price/CTA is visible */}
            <aside className="order-first lg:order-last lg:col-span-5 lg:col-start-8">
              <PropertyStickyInfo property={property} />
            </aside>

            {/* Long-form content */}
            <div className="order-last lg:order-first lg:col-span-7 lg:col-start-1 lg:row-start-1">
              <div className="space-y-24 sm:space-y-32 lg:space-y-36">
                <PropertyDescription property={property} />
                <PropertySpecs property={property} />
                <PropertyAmenities property={property} />
                <PropertyLocation property={property} />
                <PropertyLifestyle
                  blocks={property.lifestyle}
                  startNumber={lifestyleStart}
                />
                <InquiryForm property={property} />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <RelatedProperties properties={related} />
    </main>
  );
}
