import { useEffect, useState } from 'react'
import Quote from './components/Quote'

import Loader from "react-js-loader"

import './App.css'

function App () {
  const [quote, setQuote] = useState(null)

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
      {
        quote === null
          ? <Loader type="spinner-default" bgColor={"#131A26"} size={60} />
          : <Quote quote={quote}/> 
      }
      <button onClick={getQuote}>Generate Quote</button>
      <footer>
        <p>Created by Fernando Junior</p>
        <a href="https://github.com/inando85/anime-quotes-react">Github Project</a>
      </footer>
    </div>
  )
}

export default App