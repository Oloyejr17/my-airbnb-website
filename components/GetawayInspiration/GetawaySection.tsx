"use client";

import { useState } from "react";
import TabMenu from "./TabMenu";
import ItemRow from "./ItemRow";
import { getawayItems } from "./data";

export default function GetawaySection() {
  const tabs = Object.keys(getawayItems);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="flex flex-col w-full px-4 sm:px-6 md:px-12 py-4 max-w-6xl mx-auto">
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
        Inspiration for future getaways
      </h2>

      <TabMenu tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="mt-3 overflow-x-auto">
        <div className="flex gap-4 sm:gap-6">
          {getawayItems[activeTab].map((item, index) => (
            <div key={index} className="flex-shrink-0 w-60 sm:w-64 md:w-72">
              <ItemRow items={[item]} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
