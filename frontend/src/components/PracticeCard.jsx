// frontend/src/components/PracticeCard.jsx
import { useState } from 'react'

export function PracticeCard({ question, choices, correct, explanation }) {
  const [selected, setSelected]     = useState(null)
  const [showAnswer, setShowAnswer] = useState(false)

  const handleSelect = (letter) => {
    if (showAnswer) return   // lock after reveal
    setSelected(letter)
  }

  const handleReveal = () => {
    if (!selected) return
    setShowAnswer(true)
  }

  const getChoiceStyle = (letter) => {
    if (!showAnswer) {
      return selected === letter
        ? 'border-blue-500 bg-blue-50'
        : 'border-gray-200 hover:border-gray-300 cursor-pointer'
    }
    if (letter === correct) return 'border-green-500 bg-green-50'
    if (letter === selected && letter !== correct)
      return 'border-red-400 bg-red-50'
    return 'border-gray-200 opacity-50'
  }

  return (
    <div className="rounded-xl border border-gray-200 overflow-hidden">
      {/* Question */}
      <div className="p-4 bg-gray-50 border-b border-gray-200">
        <p className="text-sm font-medium text-gray-500 mb-1">Practice Question</p>
        <p className="text-gray-900">{question}</p>
      </div>

      {/* Choices */}
      <div className="p-4 space-y-2">
        {Object.entries(choices).map(([letter, text]) => (
          <div
            key={letter}
            onClick={() => handleSelect(letter)}
            className={`
              flex gap-3 p-3 rounded-lg border transition-all
              ${getChoiceStyle(letter)}
            `}
          >
            <span className="font-mono font-medium text-gray-600 shrink-0">
              {letter}.
            </span>
            <span className="text-gray-800">{text}</span>
          </div>
        ))}
      </div>

      {/* Reveal button */}
      {!showAnswer && (
        <div className="px-4 pb-4">
          <button
            onClick={handleReveal}
            disabled={!selected}
            className={`
              w-full py-2 rounded-lg text-sm font-medium transition-all
              ${selected
                ? 'bg-gray-900 text-white hover:bg-gray-700'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'}
            `}
          >
            {selected ? 'Check Answer' : 'Select an answer first'}
          </button>
        </div>
      )}

      {/* Explanation — shown after reveal */}
      {showAnswer && (
        <div className={`
          p-4 border-t
          ${selected === correct
            ? 'bg-green-50 border-green-200'
            : 'bg-red-50 border-red-200'}
        `}>
          <p className="text-sm font-medium mb-1">
            {selected === correct ? '✓ Correct!' : '✗ Not quite'}
          </p>
          <p className="text-sm text-gray-700">{explanation}</p>
        </div>
      )}
    </div>
  )
}