import React, { useEffect, useState } from "react";

export default function LocationTracker() {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (pos) => setPosition(pos.coords),
      (err) => setError(err.message),
      { enableHighAccuracy: true }
    );
    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return (
    <div className="p-4 mb-4 rounded-lg bg-blue-100">
      <h2 className="text-xl font-semibold">📍 Live Location</h2>
      {error && <p className="text-red-500">Error: {error}</p>}
      {position ? (
        <div>
          <p>Latitude: {position.latitude.toFixed(5)}</p>
          <p>Longitude: {position.longitude.toFixed(5)}</p>
        </div>
      ) : (
        <p>Fetching location...</p>
      )}
    </div>
  );
}
