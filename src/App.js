import React from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement } from './Actions/Action'
const App = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  
  return (
    <>
      <div className="countValue">{count}</div>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>

    </>
  )
}

export default App
