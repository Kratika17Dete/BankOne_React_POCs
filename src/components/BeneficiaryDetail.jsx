export default function BeneficiaryDetail({
  beneficiary,
  onBack
}) {
  return (
    <div className="px-4 mt-4">

      <div className="bg-white rounded-[32px] h-[68vh] p-5 relative">

        <button
          className="
            absolute
            top-4
            right-4
            bg-gray-100
            rounded-full
            w-8
            h-8
          "
          onClick={onBack}
        >
          ✕
        </button>

        <h2 className="font-bold text-[28px]">
          {beneficiary.name}
        </h2>

        <div
          className="
            absolute
            bottom-4
            left-5
            right-5
            flex
            gap-3
          "
        >
          <button className="flex-1 border h-12 rounded-full">
            Cancel
          </button>

          <button className="flex-1 border h-12 rounded-full">
            Transfer
          </button>
        </div>

      </div>

    </div>
  );
}