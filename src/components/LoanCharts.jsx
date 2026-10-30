import { PieChart, Pie, ResponsiveContainer } from "recharts";

const TOTAL = 84;        // total term in months (7 years)
const COMPLETED = 22.2;  // completed term
const INSTALMENTS = 20;  // instalments paid

const START = 90; // 12 o'clock
const toAngle = (months) => START - (months / TOTAL) * 360;

const completedEnd = toAngle(COMPLETED);

export default function LoanCharts() {
  return (
    <div style={{ width: "100%", height: 280 }}>
      <ResponsiveContainer>
        <PieChart>
          {/* Remaining Term */}
          <Pie
            data={[{ value: 1 }]}
            dataKey="value"
            startAngle={completedEnd}
            endAngle={START - 360}
            innerRadius={92}
            outerRadius={98}
            fill="#9a9a9a"
            stroke="none"
            isAnimationActive={false}
          />

          {/* Completed Term */}
          <Pie
            data={[{ value: 1 }]}
            dataKey="value"
            startAngle={START}
            endAngle={completedEnd}
            innerRadius={86}
            outerRadius={104}
            fill="#4a4a4a"
            stroke="none"
            isAnimationActive={false}
          />

          {/* Instalments */}
          <Pie
            data={[{ value: 1 }]}
            dataKey="value"
            startAngle={START}
            endAngle={toAngle(INSTALMENTS)}
            innerRadius={110}
            outerRadius={128}
            fill="#c4c4c4"
            stroke="none"
            isAnimationActive={false}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}