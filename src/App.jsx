import NetworkStatus from "./components/NetworkStatus";

import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-4">
      <h1 className="text-2xl font-bold mb-4">
        🛡️ SafeWalk - Personal Safety Companion
      </h1>
      <NetworkStatus />
    </div>
  );
}

export default App;
