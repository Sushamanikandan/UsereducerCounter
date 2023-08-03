import React from 'react'

function Decrement({dispatch,count}) {
  return (
    <div>
       <button  className='btn'onClick={() => dispatch({type:'decrement'})}>
        Decrement
        </button>
    </div>
  )
}

export default Decrement
