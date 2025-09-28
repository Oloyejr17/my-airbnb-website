"use client";

import { useState } from "react";
import { mockExperiences } from "@/data/experiences";
import ExperienceCard from "@/components/ExperienceCard";

const categories = ["All", "Food", "Photography", "Dance", "Adventure", "Culture"];

export default function ExperiencesPage() {
  const [selected, setSelected] = useState("All");

  const filteredExperiences =
    selected === "All"
      ? mockExperiences
      : mockExperiences.filter((exp) => exp.category === selected);

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Experiences</h1>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              selected === cat
                ? "bg-gray-900 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredExperiences.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>
    </main>
  );
}
