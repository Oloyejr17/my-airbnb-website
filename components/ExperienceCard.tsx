import Image from "next/image";
import Link from "next/link";
import { StarIcon } from "@heroicons/react/24/solid";
import { Experience } from "@/data/experiences";
import HeartButton from "@/components/ui/HeartButton";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Link href={`/experiences/${experience.id}`} className="block relative">
      <div className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer overflow-hidden relative">
        <div className="relative w-full h-48">
          <Image src={experience.image} alt={experience.title} fill className="object-cover" />
          <HeartButton
            itemId={experience.id}
            itemType="experience"
            title={experience.title}
            price={experience.price}
            location={experience.location}
            image={experience.image}
          />
        </div>

        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-500">{experience.location}</span>
            <div className="flex items-center text-yellow-500 text-sm">
              <StarIcon className="w-4 h-4 mr-1" />
              {experience.rating}
            </div>
          </div>
          <h3 className="text-lg font-semibold">{experience.title}</h3>
          <p className="text-sm text-gray-600">{experience.category}</p>
          <p className="mt-2 font-medium">${experience.price} per person</p>
        </div>
      </div>
    </Link>
  );
}
