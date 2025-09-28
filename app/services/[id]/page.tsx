import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { mockServices, Service } from "@/data/services";
import HeartButton from "@/components/ui/HeartButton";
import RandomBgWrapper from "@/components/RandomBgWrapper";
import BackButton from "@/components/ui/BackButton";

interface ServicePageProps {
  params: Promise<{ id: string }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { id } = await params;
  const serviceId = parseInt(id, 10);

  const service: Service | undefined = mockServices.find(
    (s) => s.id === serviceId
  );

  if (!service) return notFound();

  return (
    <RandomBgWrapper>
      <div className="max-w-4xl mx-auto py-8 px-4 text-white">
        <div className="mb-6">
          <BackButton />
        </div>

        {/* Image */}
        <div className="relative w-full h-96 rounded-xl overflow-hidden mb-6">
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
            className="absolute top-2 right-2"
          />
        </div>

        {/* Info */}
        <div className="mb-4">
          <h1 className="text-3xl font-bold mb-2">{service.title}</h1>
          {service.chefOrTrainer && (
            <p className="text-gray-300 mb-2">{service.chefOrTrainer}</p>
          )}
          <p className="text-lg font-semibold">${service.price}</p>
        </div>

        {/* Description */}
        <p className="text-gray-200 mb-6">
          {service.description ||
            "This service provides a premium experience tailored for your needs."}
        </p>

        {/* Book Now */}
        <Link
          href={`/checkout?serviceId=${service.id}`}
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Book Now
        </Link>
      </div>
    </RandomBgWrapper>
  );
}
