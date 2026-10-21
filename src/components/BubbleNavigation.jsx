import { useState } from "react";

export default function BubbleNavigation() {
  const [level, setLevel] = useState("home");

  const homeItems = [
    {
      title: "Transfers & Payments",
      size: "w-36 h-36",
      pos: "top-14 left-89",
    },
    {
      title: "Support",
      size: "w-24 h-24",
      pos: "top-16 left-[45%]",
    },
    {
      title: "Services",
      size: "w-24 h-24",
      pos: "top-36 right-47",
    },
    {
      title: "Cards",
      size: "w-24 h-24",
      pos: "top-32 left-[54%]",
    },
    {
      title: "Bills & Recharge",
      size: "w-36 h-36",
      pos: "top-67 right-103",
    },
    {
      title: "My Accounts",
      size: "w-24 h-24",
      pos: "bottom-78 left-[48%]",
      action: () => setLevel("accounts"),
    },
  ];

  const accounts = [
    {
      title: "All Accounts",
      amount: "USD 120,334,900",
      size: "w-60 h-60",
      pos: "top-16 left-56",
      action: () => setLevel("allAccounts"),
    },
    {
      title: "Deposits",
      size: "w-48 h-48",
      pos: "top-10 right-80",
    },
    {
      title: "Loans",
      size: "w-48 h-48",
      pos: "bottom-52 right-110",
    },
  ];

  const allAccounts = [
    {
      name: "Salary",
      acc: "9**1 9897",
      size: "w-44 h-44",
      pos: "top-6 left-[38%]",
    },
    {
      name: "Current",
      acc: "5**1 0007",
      size: "w-56 h-56",
      pos: "top-51 right-66",
    },
    {
      name: "Savings",
      acc: "9**4 2334",
      size: "w-44 h-44",
      pos: "top-52 left-56",
    },
    {
      name: "Savings",
      acc: "5**1 8816",
      size: "w-72 h-72",
      pos: "bottom-6 left-[30%]",
    },
    
  ];

  return (
    <div className="relative h-screen overflow-hidden bg-[#DDE2E8]">
      {level !== "home" && (
        <button
          onClick={() =>
            setLevel(
              level === "allAccounts"
                ? "accounts"
                : "home"
            )
          }
          className="
            absolute
            z-50
            left-6
            bottom-6
            bg-white
            px-6
            py-2
            rounded-full
            shadow-lg
            text-sm
          "
        >
          Back
        </button>
      )}

      {/* HOME */}
      {level === "home" && (
        <>
          <div
            className="
              absolute
              w-44
              h-44
              rounded-full
              bg-white
              left-[30%]
              top-[35%]
              flex
              items-center
              justify-center
              shadow-md
            "
          >
            Home
          </div>

          {homeItems.map((item) => (
            <div
              key={item.title}
              onClick={item.action}
              className={`
                absolute
                ${item.size}
                ${item.pos}
                rounded-full
                bg-white
                shadow-md
                flex
                items-center
                justify-center
                text-center
                text-xs
                cursor-pointer
                hover:scale-110
                transition-all
              `}
            >
              {item.title}
            </div>
          ))}
        </>
      )}

      {/* ACCOUNTS */}
      {level === "accounts" && (
        <>
          <div
            className="
              absolute
              w-[950px]
              h-[950px]
              rounded-full
              bg-[#EEF0F3]
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
            "
          />

          <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center font-medium z-20">
            My
            <br />
            Accounts
          </div>

          {accounts.map((item) => (
            <div
              key={item.title}
              onClick={item.action}
              className={`
                absolute
                ${item.size}
                ${item.pos}
                rounded-full
                bg-[#E6E8EB]
                shadow-sm
                flex
                flex-col
                items-center
                justify-center
                cursor-pointer
                hover:scale-105
                transition-all
                z-10
              `}
            >
              <div className="w-10 h-10 rounded-lg bg-[#D2D5DB] mb-4" />

              {item.amount && (
                <div className="px-4 py-2 bg-white rounded-full text-xs mb-4">
                  {item.amount}
                </div>
              )}

              <span className="text-sm font-medium">
                {item.title}
              </span>
            </div>
          ))}
        </>
      )}

      {/* ALL ACCOUNTS */}
      {level === "allAccounts" && (
        <>
          {/* Parent Circle */}
          <div
            className="
              absolute
              w-[1000px]
              h-[1000px]
              rounded-full
              bg-[#F2F3F5]
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              z-0
            "
          />

          {/* Title */}
          <div
            className="
              absolute
              left-1/2
              top-[42%]
              -translate-x-1/2
              font-semibold
              text-lg
              z-20
            "
          >
            All Accounts
          </div>

          {allAccounts.map((account) => (
            <div
              key={account.acc}
              className={`
                absolute
                ${account.size}
                ${account.pos}
                rounded-full
                bg-[#E6E8EB]
                shadow-sm
                flex
                flex-col
                items-center
                justify-center
                hover:scale-105
                transition-all
                z-10
              `}
            >
              <div className="w-20 h-5 rounded-full bg-[#D2D5DB] mb-5" />

              <div className="text-sm font-medium">
                {account.name}
              </div>

              <div className="text-sm mt-3 tracking-wide">
                {account.acc}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}