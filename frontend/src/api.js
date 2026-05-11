const BASE_URL = import.meta.env.VITE_API_URL

export async function sendQuery({ query, mode, sessionId, topic }) {
  const response = await fetch(`${BASE_URL}/api/query`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query,
      mode,
      session_id: sessionId || '',
      topic: topic || '',
      use_reranker: true,
    }),
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({}))
    throw new Error(error.detail || `API error: ${response.status}`)
  }

  return response.json()
}

export async function pingBackend() {
  try {
    await fetch(`${BASE_URL}/health`, { method: 'GET' })
  } catch {
    // Silently fail — if backend is down the user will see it on first query
  }
}