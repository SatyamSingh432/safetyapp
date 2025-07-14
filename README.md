# SafeWalk – Personal Safety Companion Web App

SafeWalk is a real-world safety web application that allows individuals to track their live location, monitor network connectivity, draw safety zones. It is built using modern web APIs and technologies to empower users while walking alone or in unknown areas.

---

## Features

- **Live Geolocation Tracking**  
  Continuously monitors your live location using the **Geolocation API**.

- **Network Status Monitoring**  
  Detects your internet connection type and alerts when you're offline or on poor networks using the **Network Information API**.

- **Zone Drawing with Canvas**  
  Use the **Canvas API** to draw Safe or Danger zones (circle/rectangle) on a virtual map area.

- **Lazy-Loaded Safety Tips**  
  Tips appear when scrolled into view using the **Intersection Observer API**. Can be enhanced to map annotations

---

## Web APIs Used

| Web API                                                                                                 | Usage                                                            |
| ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)                     | To track the user’s live location and allow sharing coordinates. |
| [Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API)     | To detect network status (e.g. 4G, offline) and notify user.     |
| [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)                               | To draw custom safety or danger zones as rectangles or circles.  |
| [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) | To lazily load safety tips when they scroll into view.           |

---

## Map Integration (Not Implemented Yet)

Currently, the app allows you to **draw zones on a blank canvas**, simulating an area.

> 💡 The intended idea is to eventually **overlay this canvas on a real map** (e.g., OpenStreetMap or Google Maps), allowing users to draw zones directly on a real-world location interface.

I plan to use **Leaflet.js** or **react-leaflet** in the future to integrate an interactive map where:

- Safe/Danger zones can be drawn
- User's position can be tracked in real-time
- Zone alerts can be triggered based on geolocation

Until then, the core canvas-based interaction gives a good preview of the safety zone feature.

---

## Tech Stack

- **Frontend**: React + Vite
- **Styling**: Tailwind CSS
- **Map Placeholder**: HTML Canvas
- **Platform APIs**: Modern Web APIs

---

## How to Run Locally

```bash
git clone https://github.com/your-username/safewalk.git
cd safewalk
npm install
npm run dev
```

## Future Enhancements

- Real map integration with Leaflet
- Persist drawn zones in localStorage
- Notification when entering/exiting a zone
- Battery monitoring for low power alerts
