"use client";

import Image from "next/image";
import Link from "next/link";
import HeartButton from "./ui/HeartButton";
import { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link href={`/services/${service.id}`} className="block">
      <div className="bg-white rounded-xl shadow hover:shadow-lg transition relative overflow-hidden cursor-pointer">
        {/* Image */}
        <div className="relative w-full h-48">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
          />
          <HeartButton
            itemId={service.id}
            itemType="service"
            title={service.title}
            price={service.price}
            location={service.chefOrTrainer}
            image={service.image}
            className="absolute top-2 right-2 z-10"
          />
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="text-lg font-semibold">{service.title}</h3>
          {service.chefOrTrainer && (
            <p className="text-sm text-gray-500">{service.chefOrTrainer}</p>
          )}
          <p className="mt-2 font-medium">${service.price}</p>
        </div>
      </div>
    </Link>
  );
}
