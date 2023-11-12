import React, { useRef } from 'react'
import './style.css'
import cardImage from './img/credit_card.jpeg'

const CreditCard = () => {
// pole, ktere premapuju a vykreslim tak ctyri inputy
  const inputRefs = [useRef(), useRef(), useRef(), useRef()]

// funkce ve ktere zjistuju, na kterem indexu v poli jsem, pokud je index mensi nez delka pole zustane focus v inputu, pokud je vetsi presunu focus na dalsi input
  const focusToNextInput = index => {
    if (index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus()
    }
  }

  const handleInputChange = (e, index) => {
    const input = e.target.value
    if (input.length === 4) {
      focusToNextInput(index)
    }
  }

  return (
    <div>
        <img src={cardImage} className='creditCard__img'></img>
      <label>Credit card information:</label>
      <div className='creditCard__input'>
        {inputRefs.map((inputRef, index) => (
          <input
            key={index}
            ref={inputRef}
            type='text'
            className='creditCard__input--field'
            onChange={e => handleInputChange(e, index)}
          />
        ))}
      </div>
    </div>
  )
}

export default CreditCard
