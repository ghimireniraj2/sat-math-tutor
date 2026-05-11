// frontend/src/components/LoadingIndicator.jsx
export function LoadingIndicator() {
  return (
    <div className="flex items-center gap-2 text-gray-400 text-sm px-4 py-2">
      <span className="flex gap-1">
        {[0, 1, 2].map(i => (
          <span
            key={i}
            className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </span>
      <span>Thinking...</span>
    </div>
  )
}