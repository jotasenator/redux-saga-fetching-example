import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const Counter = () => {

  const dispatch = useDispatch()
  const { value } = useSelector(state => state.counterReducer)

  const handleAdicionar = () => {
    dispatch({ type: 'ADICIONAR' })
  }
  const handleResetear = () => {
    (value !== 0) && dispatch({ type: 'RESETEAR' })
  }
  const handleRestar = () => {
    dispatch({ type: 'RESTAR' })
  }
  console.log(value)
  return (
    <div>
      <button onClick={handleAdicionar}>Adicionar</button>
      {' '}
      <button onClick={handleResetear}>Resetear</button>
      {' '}
      <button onClick={handleRestar}>Restar</button>
      <hr />

    </div>
  )
}

