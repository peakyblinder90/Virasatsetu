import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import heritage from '../src/data/heritage.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());

app.get('/api/heritage', (_req, res) => res.json(heritage));

app.post('/api/ask', (req, res) => {
  const question = String(req.body?.question || '').trim();
  if (!question) return res.status(400).json({ error: 'Question is required.' });
  const q = question.toLowerCase();
  const match = heritage.find((item) => [item.name, item.state, item.city, ...item.tags].some((term) => q.includes(term.toLowerCase())));
  if (match) {
    return res.json({ mode: 'demo-knowledge', answer: `${match.name} is in ${match.city}, ${match.state}. ${match.description} ${match.significance}` });
  }
  if (q.includes('madhya pradesh')) {
    const mp = heritage.filter((item) => item.state === 'Madhya Pradesh').map((item) => item.name).join(', ');
    return res.json({ mode: 'demo-knowledge', answer: `For a Madhya Pradesh heritage trail, the current MVP dataset includes ${mp}. Use the Map to see their locations.` });
  }
  return res.json({ mode: 'demo-knowledge', answer: 'I’m using Virasat Setu’s demo heritage knowledge base for this MVP. Try asking about Sanchi Stupa, Khajuraho, Madhubani painting, Rajasthan architecture, or heritage in Madhya Pradesh.' });
});

const dist = path.join(__dirname, '../dist');
app.use(express.static(dist));
app.use((_req, res) => res.sendFile(path.join(dist, 'index.html')));

app.listen(PORT, () => console.log(`Virasat Setu server running at http://localhost:${PORT}`));
