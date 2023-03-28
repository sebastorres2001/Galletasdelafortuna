import './App.css'
import Button from './components/Button'
import Quotes from './components/Quotes'
import quotes from './utils/quotes.json'
import getRandomArray from './utils/getRandomArray'
import { useState } from 'react'

const imgs = [1, 2, 3, 4]

function App() {

  const [quoteRandom, setQuoteRandom] = useState(getRandomArray(quotes))
  const [numberImg, setNumberImg] = useState(getRandomArray(imgs))
  const appStyle = {
    backgroundImage: `url('/backgrounds/fondo${numberImg}.jpg')`
  }
  return (
    <div style={appStyle} className="App">
      <Quotes quoteRandom={quoteRandom}/>
      <Button className='quotes__button'
       setQuoteRandom={setQuoteRandom}
       setNumberImg={setNumberImg}
        />
    </div>
  )
}

export default App
