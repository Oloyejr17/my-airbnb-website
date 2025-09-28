interface TabMenuProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function TabMenu({ tabs, activeTab, setActiveTab }: TabMenuProps) {
  return (
    <div className="flex gap-8 border-b border-gray-600 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`pb-2 font-medium transition-colors ${
            activeTab === tab
              ? "border-b-2 border-white text-white"
              : "border-b-2 border-transparent text-gray-300 hover:text-white"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
