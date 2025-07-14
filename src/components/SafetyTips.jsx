import React, { useEffect, useRef, useState } from "react";

const tips = [
  "Always keep your phone charged before heading out.",
  "Share your live location with a trusted contact.",
  "Avoid dark or isolated areas if possible.",
  "Trust your instincts and avoid unsafe situations.",
  "Be aware of your surroundings—avoid distractions like headphones.",
];

export default function SafetyTips() {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mt-6">
      {visible && (
        <div className="p-4 bg-green-100 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">📝 Safety Tips</h2>
          <ul className="list-disc pl-5 space-y-1">
            {tips.map((tip, idx) => (
              <li key={idx}>{tip}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
