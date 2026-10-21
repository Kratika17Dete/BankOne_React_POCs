const cards = [
  {
    id: 1,
    title: "Credit Card 1",
    cardNo: "4821",
    amount: "Rs. 1,20,000",
    label: "Available Limit",
  },
  {
    id: 2,
    title: "Debit Card 2",
    cardNo: "7294",
    amount: "Rs. 48,350",
    label: "Account Balance",
  },
];

function CardItem({ card }) {
  return (
    <div
      className="
        bg-white
        rounded-[28px]
        p-4
        shadow-sm
        w-full
        h-auto
        lg:h-[390px]
        flex
        flex-col
      "
    >
      <div className="flex justify-between mb-3">
        <div>
          <h3 className="font-semibold text-xl">
            {card.title}
          </h3>

          <p className="text-xs text-gray-400">
            •••• •••• •••• {card.cardNo}
          </p>
        </div>

        <span
          className="
            inline-flex
            items-center
            justify-center
            min-w-[72px]
            h-7
            px-4
            rounded-full
            bg-[#F2F4F7]
            text-[#667085]
            text-[11px]
            font-medium
          "
        >
          All Cards
        </span>
      </div>

      <div
        className="
          bg-gradient-to-r
          from-red-700
          to-red-600
          rounded-2xl
          text-white
          px-5
          py-4
        "
      >
        <p className="text-xs opacity-80">
          {card.label}
        </p>

        <h2 className="text-2xl lg:text-xl font-semibold mt-2">
          {card.amount}
        </h2>
      </div>

      <div className="mt-3 flex-1">
        {[
          "Recent Spends",
          "Manage Limits",
          "Transactions",
        ].map((item) => (
          <div
            key={item}
            className="
              flex
              justify-between
              items-center
              py-2
              border-b
              border-[#E7ECEF]
            "
          >
            <span>{item}</span>
            <span>›</span>
          </div>
        ))}
      </div>

      <div className="text-center mt-auto pt-3 text-red-600 text-sm">
        View more
      </div>
    </div>
  );
}

export default function CardCarousel() {
  return (
    <>
      {/* MOBILE */}

      <div className="lg:hidden mt-4">
        <div
          className="
            flex
            overflow-x-auto
            snap-x
            snap-mandatory
            gap-4
            px-4
            scrollbar-hide
          "
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="
                snap-center
                shrink-0
                w-[85vw]
              "
            >
              <CardItem card={card} />
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP */}

      <div className="hidden md:block">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-3xl font-semibold">
                All Cards
              </h1>

              <p className="text-gray-400 mt-2">
                Your cards, together in one place.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="bg-white rounded-full px-5 py-2">
                Previous
              </button>

              <button className="bg-white rounded-full px-5 py-2">
                Next
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {cards.map((card) => (
              <CardItem
                key={card.id}
                card={card}
              />
            ))}

            <div
              className="
                border-2
                border-dashed
                border-[#E7ECEF]
                rounded-[28px]
                bg-white
                flex
                flex-col
                items-center
                justify-center
                h-[390px]
              "
            >
              <div className="text-red-600 text-5xl">
                +
              </div>

              <h3 className="mt-3 text-2xl font-medium">
                Add New Card
              </h3>

              <p className="text-gray-400 mt-2">
                Add a new card to your wallet
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}