import './quote.css'

const Quote = ({quote: { quote, character, anime}}) => {
  return (
    <div className="quote">
      <div className="quote__description">{quote}</div>
      <div className="quote__author">{character}</div>
      <div className="quote__anime">{anime}</div>
    </div>
  )
}

export default Quote