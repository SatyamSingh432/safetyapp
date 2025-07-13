import React, { useRef, useState } from "react";

export default function MapCanvas() {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [mode, setMode] = useState("rectangle");
  const [start, setStart] = useState(null);

  const handleMouseDown = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    setStart({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setDrawing(true);
  };

  const handleMouseUp = (e) => {
    if (!drawing || !start) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const end = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    if (mode === "rectangle") {
      ctx.fillStyle = "rgba(255, 0, 0, 0.3)";
      ctx.fillRect(start.x, start.y, end.x - start.x, end.y - start.y);
    } else if (mode === "circle") {
      ctx.beginPath();
      const radius = Math.hypot(end.x - start.x, end.y - start.y);
      ctx.arc(start.x, start.y, radius, 0, 2 * Math.PI);
      ctx.fillStyle = "rgba(0, 0, 255, 0.3)";
      ctx.fill();
    }

    setDrawing(false);
    setStart(null);
  };

  return (
    <div className="p-4 bg-yellow-50 rounded-lg">
      <h2 className="text-xl font-semibold mb-2">🗺️ Draw Zones</h2>
      <div className="mb-2">
        <label className="mr-2">Mode:</label>
        <select
          value={mode}
          onChange={(e) => setMode(e.target.value)}
          className="border px-2 py-1"
        >
          <option value="rectangle">Rectangle</option>
          <option value="circle">Circle</option>
        </select>
      </div>
      <canvas
        ref={canvasRef}
        width={400}
        height={300}
        className="border border-gray-400"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      />
    </div>
  );
}
