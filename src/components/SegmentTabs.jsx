export default function SegmentTabs({
  activeTab,
  setActiveTab,
}) {
  const tabs = [
    "cards",
    "transfers",
    "bills & recharge",
  ];

  return (
    <div className="flex justify-center">
      <div className="bg-white rounded-full shadow-sm flex p-1 min-w-[340px]">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              flex-1
              h-8
              rounded-full
              text-[12px]
              font-medium
              flex
              items-center
              justify-center
              gap-2
              whitespace-nowrap
              transition-all
              ${
                activeTab === tab
                  ? "text-green-700"
                  : "text-gray-400"
              }
            `}
          >
            {activeTab === "cards" &&
              tab === "cards" && (
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              )}

            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}