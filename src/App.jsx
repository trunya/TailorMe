
import { useState } from 'react'
import './App.css'

const jokes = [
  "Why don't skeletons fight? They don't have the guts! 💀",
  "Why did the scarecrow win an award? He was outstanding in his field! 🌾",
  "What do you call a fake noodle? An impasta! 🍝",
  "Why can't your nose be 12 inches long? Because then it would be a foot! 👃",
  "What do you call cheese that isn't yours? Nacho cheese! 🧀",
  "Why did the bicycle fall over? It was two-tired! 🚲",
  "What do you call a bear with no teeth? A gummy bear! 🐻",
  "Why did the math book look sad? It had too many problems! 📚",
  "What do you call a sleeping dinosaur? A dino-snore! 🦖",
  "Why did the computer go to the doctor? It had a virus! 💻",
  "What did one wall say to the other? I'll meet you at the corner! 🧱",
  "Why are eggs bad at telling jokes? They crack each other up! 🥚",
]

function App() {
  const [joke, setJoke] = useState(
    "PRESS THE BIG RED BUTTON FOR A JOKE! 😂"
  )
  const [count, setCount] = useState(0)
  const [lastIndex, setLastIndex] = useState(-1)

  function tellJoke() {
    let nextIndex

    do {
      nextIndex = Math.floor(Math.random() * jokes.length)
    } while (nextIndex === lastIndex)

    setLastIndex(nextIndex)
    setJoke(jokes[nextIndex])
    setCount(count + 1)
  }

  return (
    <main className="joke-page">
      <h1>😂 THE JOKE MACHINE 😂</h1>

      <p className="subtitle">
        Feeling bored? Smash the button!
      </p>

      <button className="big-red-button" onClick={tellJoke}>
        TELL ME A JOKE!
      </button>

      <div className="joke-box">
        <p>{joke}</p>
      </div>

      <p className="counter">
        Jokes requested: {count}
      </p>

      <p className="footer">
        ⚠️ WARNING: May cause uncontrollable laughing!
      </p>
    </main>
  )
}

export default App

