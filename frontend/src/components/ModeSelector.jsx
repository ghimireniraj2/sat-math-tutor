// frontend/src/components/ModeSelector.jsx
export function ModeSelector({ mode, onSwitch }) {
  return (
    <div className="flex gap-2 p-1 bg-gray-100 rounded-lg w-fit">
      {['explain', 'practice'].map(m => (
        <button
          key={m}
          onClick={() => onSwitch(m)}
          className={`
            px-4 py-2 rounded-md text-sm font-medium capitalize transition-all
            ${mode === m
              ? 'bg-white shadow text-gray-900'
              : 'text-gray-500 hover:text-gray-700'}
          `}
        >
          {m}
        </button>
      ))}
    </div>
  )
}