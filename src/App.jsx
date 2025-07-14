import React from 'react';
import LocationTracker from './components/LocationTracker';
import NetworkStatus from './components/NetworkStatus';
import MapCanvas from './components/MapCanvas';
import SafetyTips from './components/SafetyTips';

export default function App() {
  return (
    <div className='min-h-screen bg-gray-50 text-gray-800 p-4'>
      <h1 className='text-2xl font-bold mb-4'>
        🛡️ SafeWalk - Personal Safety Companion
      </h1>
      <NetworkStatus />
      <LocationTracker />
      <MapCanvas />

      <SafetyTips />
    </div>
  );
}
