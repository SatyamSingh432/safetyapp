import React, { useEffect, useState } from "react";

export default function NetworkStatus() {
  const [status, setStatus] = useState(navigator.onLine);
  const [connectionInfo, setConnectionInfo] = useState(
    navigator.connection || {}
  );

  useEffect(() => {
    function updateStatus() {
      setStatus(navigator.onLine);
      setConnectionInfo(navigator.connection || {});
    }
    window.addEventListener("online", updateStatus);
    window.addEventListener("offline", updateStatus);
    navigator.connection?.addEventListener("change", updateStatus);

    return () => {
      window.removeEventListener("online", updateStatus);
      window.removeEventListener("offline", updateStatus);
      navigator.connection?.removeEventListener("change", updateStatus);
    };
  }, []);

  return (
    <div
      className={`p-4 mb-4 rounded-xl ${
        status ? "bg-green-100" : "bg-red-100"
      }`}
    >
      <h2 className="text-xl font-semibold">📶 Network Status</h2>
      <p>Status: {status ? "Online" : "Offline"}</p>
      {connectionInfo.effectiveType && (
        <p>Connection Type: {connectionInfo.effectiveType}</p>
      )}
    </div>
  );
}
