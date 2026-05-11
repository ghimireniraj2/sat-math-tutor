// frontend/src/components/ChatInput.jsx
import { useState } from 'react'

export function ChatInput({ onSubmit, isLoading, mode }) {
  const [value, setValue] = useState('')

  const placeholder = mode === 'practice'
    ? 'Enter a topic for a practice question (e.g. "algebra")'
    : 'Ask a question about SAT Math...'

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value.trim() || isLoading) return
    onSubmit(value.trim())
    setValue('')
  }

  const handleKeyDown = (e) => {
    // Submit on Enter, new line on Shift+Enter
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <form onSubmit={handleSubmit}
          className="border-t border-gray-200 p-4 bg-white">
      <div className="flex gap-2 items-end">
        <textarea
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={isLoading}
          rows={1}
          className="
            flex-1 resize-none rounded-xl border border-gray-200
            px-4 py-3 text-sm focus:outline-none focus:border-gray-400
            disabled:opacity-50 leading-relaxed
          "
          style={{ maxHeight: '120px' }}
        />
        <button
          type="submit"
          disabled={!value.trim() || isLoading}
          className="
            px-4 py-3 bg-gray-900 text-white rounded-xl text-sm
            font-medium hover:bg-gray-700 disabled:opacity-40
            disabled:cursor-not-allowed transition-colors shrink-0
          "
        >
          Send
        </button>
      </div>
      <p className="text-xs text-gray-400 mt-1.5 ml-1">
        Enter to send · Shift+Enter for new line
      </p>
    </form>
  )
}