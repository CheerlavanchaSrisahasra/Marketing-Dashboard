import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { label: "Daily", value: 65, amount: "$129.80" },
  { label: "Weekly", value: 65, amount: "$347.62" },
  { label: "Monthly", value: 60, amount: "$897.66" },
];

const IncomeSection = () => (
  <div className="income">
    <h4>Income</h4>
    <div className="income-cards">
      {data.map((item, idx) => (
        <div className="income-card" key={idx}>
          <div className="pie-chart-container">
            <PieChart width={50} height={50}>
              <Pie
                data={[{ value: item.value }, { value: 100 - item.value }]}
                cx={25}
                cy={25}
                innerRadius={0}
                outerRadius={25}
              >
                <Cell fill="#27ae60" />
                <Cell fill="#f0f0f0" />
              </Pie>
            </PieChart>
          </div>
          <div className="income-details">
            <div className="income-value">{item.amount}</div>
            <div className="income-label">{item.label}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default IncomeSection;
