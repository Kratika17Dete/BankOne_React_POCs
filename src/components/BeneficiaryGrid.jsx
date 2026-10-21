const beneficiaries = [
  {
    id: 1,
    name: "Long Island Pvt. Ltd."
  },
  {
    id: 2,
    name: ""
  },
  {
    id: 3,
    name: ""
  },
  {
    id: 4,
    name: ""
  }
];

export default function BeneficiaryGrid({
  onSelect
}) {
  return (
    <div className="px-4 mt-5">

      <div className="bg-white rounded-[28px] p-5 w-full">

        <h3 className="font-semibold text-base mb-4">
          Recents
        </h3>

        <div className="grid grid-cols-2 gap-3">

          {beneficiaries.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelect(item)}
              className="
                h-[72px]
                border
                rounded-3xl
                text-left
                p-3
              "
            >
              {item.name}
            </button>
          ))}

        </div>

      </div>

    </div>
  );
}