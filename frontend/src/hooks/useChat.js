import { useState, useCallback, useRef } from 'react'
import { sendQuery } from '../api'

export function useChat() {
  const [messages, setMessages]   = useState([])
  const [mode, setMode]           = useState('explain')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError]         = useState(null)
  const sessionIdRef              = useRef('')

  const addMessage = useCallback((role, content, type = 'text') => {
    setMessages(prev => [...prev, {
      id: Date.now() + Math.random(),
      role,       // 'user' | 'assistant'
      content,    // string or PracticeQuestion object
      type,       // 'text' | 'practice'
      timestamp: new Date(),
    }])
  }, [])

  const submit = useCallback(async (query) => {
    if (!query.trim() || isLoading) return

    setError(null)
    addMessage('user', query)
    setIsLoading(true)

    try {
      const data = await sendQuery({
        query,
        mode,
        sessionId: sessionIdRef.current,
        topic: mode === 'practice' ? query : '',
      })

      // Persist session ID for conversation continuity
      if (data.session_id) {
        sessionIdRef.current = data.session_id
      }

      if (mode === 'explain') {
        addMessage('assistant', data.response, 'text')
      } else {
        // Practice mode — pass the full structured object
        addMessage('assistant', {
          question:    data.question,
          choices:     data.choices,
          correct:     data.correct,
          explanation: data.explanation,
        }, 'practice')
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }, [mode, isLoading, addMessage])

  const clearChat = useCallback(() => {
    setMessages([])
    setError(null)
    sessionIdRef.current = ''
  }, [])

  const switchMode = useCallback((newMode) => {
    setMode(newMode)
    // Don't clear messages — allow mode switching mid-conversation
  }, [])

  return {
    messages,
    mode,
    isLoading,
    error,
    submit,
    clearChat,
    switchMode,
  }
}