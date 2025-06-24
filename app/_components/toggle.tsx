"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HouseModel from "./Example"; // Assuming this is your 3D model viewer
import sawir1 from "@/public/Guryo.png";
import sawir2 from "@/public/Guryo.png";
import sawir3 from "@/public/Guryo.png";
import sawir4 from "@/public/Guryo.png";

interface Property {
  id: number;
  name: string;
  images2d: string[];
  features: {
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    parking: number;
  };
}

const sampleProperties: Property[] = [
  {
    id: 1,
    name: "Modern Villa",
    images2d: [sawir1, sawir2, sawir3, sawir4],
    features: { bedrooms: 4, bathrooms: 3, sqft: 2500, parking: 2 },
  },
  {
    id: 2,
    name: "Downtown Apartment",
    images2d: ["/Guryo.png"],
    features: { bedrooms: 2, bathrooms: 2, sqft: 1200, parking: 1 },
  },
];

export default function PropertyGallery() {
  const [selectedProperty, setSelectedProperty] = useState(0);
  const [is3D, setIs3D] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentProperty = sampleProperties[selectedProperty];
  const currentImages = currentProperty.images2d;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + currentImages.length) % currentImages.length
    );
  };

  const switchProperty = (index: number) => {
    setSelectedProperty(index);
    setCurrentImageIndex(0);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      {/* Property Selector */}
      <div className="flex justify-center gap-4 mb-6">
        {sampleProperties.map((property, index) => (
          <Button
            key={property.id}
            onClick={() => switchProperty(index)}
            variant={selectedProperty === index ? "default" : "ghost"}
          >
            {property.name}
          </Button>
        ))}
      </div>

      {/* View Toggle */}
      <div className="flex justify-center mb-6">
        <div className="bg-gray-100 p-1 rounded-lg flex">
          <Button
            variant={!is3D ? "default" : "ghost"}
            onClick={() => {
              setIs3D(false);
              setCurrentImageIndex(0);
            }}
            className={`px-8 py-2 rounded-md transition-all ${
              !is3D
                ? "bg-white shadow-sm text-gray-900"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            📐 2D Plans
          </Button>
          <Button
            variant={is3D ? "default" : "ghost"}
            onClick={() => {
              setIs3D(true);
              setCurrentImageIndex(0);
            }}
            className={`px-8 py-2 rounded-md transition-all ${
              is3D
                ? "bg-white shadow-sm text-gray-900"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            🏠 3D Model
          </Button>
        </div>
      </div>

      {/* Main Gallery */}
      <Card className="overflow-hidden mb-6">
        <CardContent className="p-0">
          <div className="relative">
            {/* View Type Badge */}
            <div
              className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium text-white ${
                is3D ? "bg-purple-600" : "bg-blue-600"
              }`}
            >
              {is3D ? "3D Model View" : "2D Floor Plan"} (
              {is3D ? 1 : currentImageIndex + 1}/
              {is3D ? 1 : currentImages.length})
            </div>

            {/* 2D View */}
            {!is3D && (
              <>
                <div className="h-[700px]">
                  <Image
                    src={currentImages[currentImageIndex]}
                    alt="2D plan"
                    width={300}
                    height={0}
                    className="w-full h-full object-cover"
                  />
                </div>
                {currentImages.length > 1 && (
                  <>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
                    >
                      ←
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
                    >
                      →
                    </Button>
                  </>
                )}
              </>
            )}

            {/* 3D View */}
            {is3D && <HouseModel />}
          </div>
        </CardContent>
      </Card>

      {/* Property Features (optional) */}
    </div>
  );
}
