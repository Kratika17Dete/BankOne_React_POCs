import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navigationTree } from "../data/navigationTree";

export default function ArcNavigation() {
  const [selectedL1, setSelectedL1] = useState(null);
  const [selectedL2, setSelectedL2] = useState(null);
  const [selectedL3, setSelectedL3] = useState(null);

  const l1Positions = [
    { x: 450, y: 180 },
    { x: 510, y: 340 },
    { x: 525, y: 510 },
    { x: 470, y: 680 },
  ];

  const l2Positions = [
    { x: 720, y: 300 },
    { x: 680, y: 430 },
    { x: 640, y: 560 },
  ];

  const l3Positions = [
    { x: 910, y: 300 },
    { x: 870, y: 430 },
    { x: 840, y: 560 },
  ];

  const Bubble = ({
    active,
    label,
    x,
    y,
    onClick,
  }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: 1,
        scale: active ? 1.05 : 1,
      }}
      whileHover={{ scale: 1.08 }}
      transition={{ duration: 0.25 }}
      onClick={onClick}
      className="absolute flex items-center gap-4 cursor-pointer select-none"
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
    >
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all duration-300 ${
          active
            ? "bg-red-600 text-white"
            : "bg-white text-red-500"
        }`}
      >
        ●
      </div>

      <div className="flex items-center gap-2">
        <span className="text-[15px]">{label}</span>
        <span>›</span>
      </div>
    </motion.div>
  );

  return (
    <div className="relative h-screen bg-[#F5F6F8] overflow-hidden">

      {/* ARCS */}
      <svg className="absolute inset-0 w-full h-full">

        {/* L1 ARC */}
        <path
          d="M250 -50 C650 250 650 750 250 1050"
          fill="none"
          stroke="#D8D8D8"
          strokeWidth="2"
          strokeDasharray="2 12"
        />

        {/* L2 ARC */}
        {selectedL1 && (
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            exit={{ pathLength: 0 }}
            transition={{ duration: 0.4 }}
            d="M540 120 C850 320 850 710 540 900"
            fill="none"
            stroke="#D8D8D8"
            strokeWidth="2"
            strokeDasharray="2 12"
          />
        )}

        {/* L3 ARC */}
        {selectedL2 && (
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            exit={{ pathLength: 0 }}
            transition={{ duration: 0.4 }}
            d="M730 120 C1040 320 1040 710 730 900"
            fill="none"
            stroke="#D8D8D8"
            strokeWidth="2"
            strokeDasharray="2 12"
          />
        )}
      </svg>

      {/* LEVEL 1 */}
      <motion.div
        animate={{
          scale: selectedL1 ? 0.9 : 1,
          opacity: selectedL1 ? 0.55 : 1,
        }}
      >
        {navigationTree.map((item, idx) => (
          <Bubble
            key={item.id}
            active={selectedL1?.id === item.id}
            label={item.label}
            x={l1Positions[idx].x}
            y={l1Positions[idx].y}
            onClick={() => {
              setSelectedL1(item);
              setSelectedL2(null);
              setSelectedL3(null);
            }}
          />
        ))}
      </motion.div>

      {/* LEVEL 2 */}
      <AnimatePresence>
        {selectedL1?.children && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
          >
            {selectedL1.children.map((item, idx) => (
              <Bubble
                key={item.id}
                active={selectedL2?.id === item.id}
                label={item.label}
                x={l2Positions[idx]?.x || 700}
                y={l2Positions[idx]?.y || 300}
                onClick={() => {
                  setSelectedL2(item);
                  setSelectedL3(null);
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* LEVEL 3 */}
      <AnimatePresence>
        {selectedL2?.children && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
          >
            {selectedL2.children.map((item, idx) => (
              <Bubble
                key={item.id}
                active={selectedL3?.id === item.id}
                label={item.label}
                x={l3Positions[idx]?.x || 900}
                y={l3Positions[idx]?.y || 300}
                onClick={() => {
                  setSelectedL3(item);
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* BREADCRUMB */}
      <div className="absolute top-6 left-6 flex items-center gap-2 text-sm font-medium">
        {selectedL1 && (
          <span className="text-red-600">
            {selectedL1.label}
          </span>
        )}

        {selectedL2 && (
          <>
            <span>/</span>
            <span className="text-red-600">
              {selectedL2.label}
            </span>
          </>
        )}

        {selectedL3 && (
          <>
            <span>/</span>
            <span className="text-red-600">
              {selectedL3.label}
            </span>
          </>
        )}
      </div>
    </div>
  );
}