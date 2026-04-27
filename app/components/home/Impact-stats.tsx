"use client";

import { useEffect, useState } from "react";

type Stat = {
  value: number;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  { value: 34, label: "Countries Connected" },
  { value: 89, label: "Partner Institutes" },
  { value: 400, suffix: "k+", label: "Lives Touched" },
  { value: 2007, suffix: "+", label: "Research Inputs" },
];

export default function ImpactSection() {
  return (
    <section className="border-b border-gray-200 bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <CounterCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CounterCard({ item }: { item: Stat }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500; // animation time
    const increment = item.value / (duration / 16);

    const counter = setInterval(() => {
      start += increment;

      if (start >= item.value) {
        setCount(item.value);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [item.value]);

  return (
    <div className="px-4 text-center">
      <div className="text-36 font-merri font-bold text-brand-700  mb-1">
        {count}
        {item.suffix}
      </div>
      <div className="text-12 font-bold text-gray-500 uppercase tracking-widest font-roboto">
        {item.label}
      </div>
    </div>
  );
}