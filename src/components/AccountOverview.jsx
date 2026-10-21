export default function AccountOverview() {
  const items = [
    "CASA",
    "Loans",
    "Deposits",
    "View all",
  ];

  return (
    <>
      {/* Mobile Bottom Sheet */}
      <div
        className="
          lg:hidden
          fixed
          bottom-0
          left-0
          right-0
          z-40
          bg-white
          rounded-t-[32px]
          px-5
          py-4
          shadow-[0_-4px_20px_rgba(0,0,0,0.08)]
        "
      >
        <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mb-4" />

        <p className="text-[#8C95A1] text-xs mb-3">
          Accounts Overview
        </p>

        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {items.slice(0, 3).map((item) => (
            <button
              key={item}
              className="
                whitespace-nowrap
                border
                border-[#E7ECEF]
                rounded-full
                px-4
                py-2
                text-xs
                bg-white
              "
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:block mt-8 pb-8">
        <div
          className="
            max-w-[1400px]
            mx-auto
            bg-white
            rounded-[28px]
            px-8
            py-6
            shadow-sm
          "
        >
          <div className="flex items-center justify-between">
            <span className="text-[#8C95A1] text-sm">
              Accounts Overview
            </span>

            <div className="flex items-center gap-3">
              {items.map((item) => (
                <button
                  key={item}
                  className="
                    border
                    border-[#E7ECEF]
                    rounded-full
                    px-5
                    py-2
                    text-sm
                    text-[#525866]
                    bg-white
                    hover:bg-gray-50
                    transition-colors
                  "
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}