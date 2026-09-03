import React from 'react'

const CharacterCount = () => {
  const [text, setText] = React.useState('')
  const [maxLength, setMaxLength] = React.useState(50)

  const currentLength = text.length
  const warningLimit = Math.floor(maxLength * 0.9)
  const exceededBy = currentLength - maxLength

  return (
    <div className="characterCount">
      <h2>Character Count</h2>
      <p>Track your input length with live character warnings.</p>

      <label>
        Max length:
        <input
          type="number"
          min="1"
          max="1000"
          value={maxLength}
          data-testid="maxlength"
          onChange={(e) => setMaxLength(Number(e.target.value))}
        />
      </label>

      <textarea
        data-testid="textarea"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div data-testid="char-info">
        {currentLength} / {maxLength}
      </div>

      {/* Warning */}
      {currentLength >= warningLimit && currentLength <= maxLength && (
        <p data-testid="warning-text">
          You are close to the limit!
        </p>
      )}

      {/* Error */}
      {currentLength > maxLength && (
        <p data-testid="error-text">
          Limit exceeded by {exceededBy} characters
        </p>
      )}
    </div>
  )
}

export default CharacterCount
