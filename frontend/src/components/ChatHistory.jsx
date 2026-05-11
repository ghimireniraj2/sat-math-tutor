// frontend/src/components/ChatHistory.jsx
import { useEffect, useRef } from 'react'
import { ChatMessage } from './ChatMessage'
import { LoadingIndicator } from './LoadingIndicator'

export function ChatHistory({ messages, isLoading }) {
  const bottomRef = useRef(null)

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  if (messages.length === 0 && !isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-400
                      text-sm">
        Ask a question to get started
      </div>
    )
  }

  return (
    <div className="flex-1 overflow-y-auto px-4 py-4">
      {messages.map(msg => (
        <ChatMessage key={msg.id} message={msg} />
      ))}
      {isLoading && <LoadingIndicator />}
      <div ref={bottomRef} />
    </div>
  )
}