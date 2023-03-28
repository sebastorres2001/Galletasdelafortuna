const Quotes = ({quoteRandom}) => {
  return (
    <div >
      <h1>Galletas De La Fortuna</h1>
      <div className="quotes__fhrase" >
        <p>{quoteRandom.phrase}</p>
      </div>
    </div>
  )
}

export default Quotes
