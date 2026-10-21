import { useRef, useState } from "react";
import ProfileContent from "./ProfileContent";
export default function HeaderSheet({
onProfileClick,
}) {
  const [expanded, setExpanded] = useState(false);

  const startY = useRef(0);
  const currentDrag = useRef(0);

  const touchStart = (e) => {
    startY.current = e.touches[0].clientY;
  };

  const touchMove = (e) => {
    e.preventDefault();

    const currentY = e.touches[0].clientY;
    const delta = currentY - startY.current;

    currentDrag.current = delta;
  };

  const touchEnd = () => {
    if (currentDrag.current > 40) {
      setExpanded(true);
    } else if (currentDrag.current < -40) {
      setExpanded(false);
    }

    currentDrag.current = 0;
  };

  return (
    <div
      onTouchStart={touchStart}
      onTouchMove={touchMove}
      onTouchEnd={touchEnd}
      style={{
        touchAction: "none",
      }}
      className={`
        absolute
        top-0
        left-0
        right-0
        z-[999]
        bg-white
        rounded-b-[28px]
        shadow-md
        px-4
        overflow-hidden
        transition-all
        duration-300
        select-none
        ${expanded ? "h-[700px]" : "h-[105px]"}
      `}
    >
      
     

      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex gap-3">
          <div className="h-7 w-7 rounded-full border flex items-center justify-center text-[8px]">
            SM
          </div>

          <div onClick={onProfileClick}
className="cursor-pointer">
            <p className="text-xs">Hello</p>
            <h2 className="font-semibold text-lg">
              Sivarathna
            </h2>
          </div>
        </div>

        <div className="flex gap-2">
          <button className="border px-3 h-6 rounded-full text-[10px] text-gray-500">
            Support
          </button>

          <button className="bg-gray-100 w-6 h-6 rounded-full text-xs">
            ✕
          </button>
        </div>
      </div>

      {/* Expanded Area */}
      {expanded && (
  <div className="mt-4">
    <ProfileContent />
  </div>
)}
      {/* Bottom Drag Handle */}
<div className="absolute bottom-2 left-1/2 -translate-x-1/2">
  <div className="w-12 h-1 rounded-full bg-gray-300" />
</div>
    </div>
  );
}
