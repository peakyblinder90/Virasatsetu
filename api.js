import localHeritage from '../data/heritage';

export async function getHeritage() {
  try {
    const response = await fetch('/api/heritage');
    if (!response.ok) throw new Error('API unavailable');
    return await response.json();
  } catch {
    return localHeritage;
  }
}

export async function askVirasat(question) {
  try {
    const response = await fetch('/api/ask', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ question }) });
    if (!response.ok) throw new Error('API unavailable');
    return await response.json();
  } catch {
    const q = question.toLowerCase();
    const item = localHeritage.find((entry) => [entry.name, entry.state, entry.city, ...entry.tags].some((term) => q.includes(term.toLowerCase())));
    return { mode: 'demo-knowledge', answer: item ? `${item.name} is in ${item.city}, ${item.state}. ${item.description} ${item.significance}` : 'This MVP uses a local heritage knowledge base. Try asking about Sanchi Stupa, Khajuraho, Madhubani painting, Rajasthan architecture, or heritage in Madhya Pradesh.' };
  }
}
