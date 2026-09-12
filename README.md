# Virasat Setu

A student-built digital heritage explorer for India's cultural heritage, designed as an SIH MVP.

## Stack

- React + Vite
- JavaScript (no TypeScript)
- Node.js + Express
- Leaflet / React Leaflet
- CSS
- Structured local JavaScript dataset (MongoDB-ready later)

## Run locally

```bash
npm install
npm run dev
```

- Frontend: http://localhost:5173
- API: http://localhost:4000

For a production-style local run:

```bash
npm run build
npm start
```

Then open http://localhost:4000.

## MVP notes

The API serves the same curated dataset stored in `src/data/heritage.js`. If the API is unavailable, the frontend falls back to that local data so the demo remains functional.

Virasat AI is explicitly a **demo knowledge system** in this version. `/api/ask` is structured so a real AI provider can be connected later without changing the chat UI.

Images use Wikimedia Commons file URLs and the map uses OpenStreetMap tiles. For a fully self-contained deployment, download/optimize approved image assets into `public/images` and update the dataset URLs.

## Main flows

Home → Explore → Heritage Detail → Map
Home → Virasat AI
Home → Quiz
All major navigation is handled with React Router.
