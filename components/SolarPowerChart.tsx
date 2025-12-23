"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type SolarDataPoint = {
  timestamp: string;
  power_kw: number;
};

export default function SolarPowerChart({
  data,
}: {
  data: SolarDataPoint[];
}) {
  return (
    <div style={{ width: "100%", height: 500 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis
            label={{ value: "kW", angle: -90, position: "insideLeft" }}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="power_kw"
            stroke="#f59e0b"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
