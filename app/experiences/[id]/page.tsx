import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { mockExperiences, Experience } from "@/data/experiences";
import { StarIcon } from "@heroicons/react/24/solid";
import HeartButton from "@/components/ui/HeartButton";
import RandomBgWrapper from "@/components/RandomBgWrapper";
import BackButton from "@/components/ui/BackButton";

interface ExperiencePageProps {
  params: Promise<{ id: string }>;
}

export default async function ExperiencePage({ params }: ExperiencePageProps) {
  const { id } = await params;
  const experienceId = parseInt(id, 10);

  const experience: Experience | undefined = mockExperiences.find(
    (exp) => exp.id === experienceId
  );

  if (!experience) return notFound();

  return (
    <RandomBgWrapper>
      <div className="max-w-4xl mx-auto py-8 px-4 text-white">
        <div className="mb-6">
          <BackButton />
        </div>

        {/* Image */}
        <div className="relative w-full h-96 rounded-xl overflow-hidden mb-6">
          <Image
            src={experience.image}
            alt={experience.title}
            fill
            className="object-cover"
          />
          <HeartButton
            itemId={experience.id}
            itemType="experience"
            title={experience.title}
            price={experience.price}
            location={experience.location}
            image={experience.image}
            className="absolute top-2 right-2"
          />
        </div>

        {/* Info */}
        <div className="mb-4">
          <h1 className="text-3xl font-bold mb-2">{experience.title}</h1>
          <p className="text-gray-300">{experience.location}</p>
          <div className="flex items-center text-yellow-400 mt-2">
            <StarIcon className="w-5 h-5 mr-1" />
            <span className="font-medium">{experience.rating}</span>
            <span className="ml-2 text-gray-300">
              ({experience.reviews} reviews)
            </span>
          </div>
        </div>

        <div className="text-lg font-semibold mb-4">
          ${experience.price} per person
        </div>

        <p className="text-gray-200 mb-6">
          Enjoy a memorable experience in {experience.location}! This{" "}
          {experience.category.toLowerCase()} activity is perfect for travelers
          who want to explore, learn, and have fun.
        </p>

        {/* Book Now */}
        <Link
          href={`/checkout?experienceId=${experience.id}`}
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Book Now
        </Link>
      </div>
    </RandomBgWrapper>
  );
}
