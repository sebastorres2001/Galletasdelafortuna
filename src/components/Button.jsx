import getRandomArray from "../utils/getRandomArray"
import quotes from "../utils/quotes.json"

const Button = ({ setQuoteRandom, setNumberImg }) => {
  const handleChangeQuote = () => {
    setQuoteRandom(getRandomArray(quotes))
    setNumberImg(getRandomArray([1, 2, 3, 4]))
  }
  return (
    <div >
      <button className='quotes__button' onClick={handleChangeQuote}>Probar mi suerte</button>
    </div>
  )
}

export default Button
