import { useEffect, useState } from 'react'
import Quote from './components/Quote'

import './App.css'

function App () {
  const [quote, setQuote] = useState({})

  function getQuote () {
    const url = 'https://animechan.vercel.app/api/random'

    fetch(url)
      .then(response => response.json())
      .then(quote => {
        setQuote(quote)
      })
  }

  useEffect(() => {
    getQuote()
  }, [])

  return (
    <div className="app">
      <Quote quote={quote}/>
      <button onClick={getQuote}>Generate Quote</button>
      <footer>
        <p>Created by Fernando Junior</p>
        <a href="https://github.com/inando85/anime-quotes-react">Github Project</a>
      </footer>
    </div>
  )
}

export default App