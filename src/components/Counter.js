import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../features/counter/counterSlice'

 function Counter(item) {
  const count = useSelector((state) => state.counter.value)
  const [name, setName] = useState([]);
  const dispatch = useDispatch()

  if (count != 0){
    setName(item);
  }

  console.log(name);
  console.log(count);

  return (
    <div>

        <button
          aria-label="Ajouer au favoris"
          onClick={() => dispatch(increment())}
        >
          Ajouer au favoris
        </button>
    </div>
  )
}
export default Counter;