import React from 'react'

function Increment({dispatch,count}) {
  return (
    <div>
       <button className='btn' onClick={() => dispatch({type:'increment'})}>
          Increment
        </button>
    </div>
  )
}

export default Increment
