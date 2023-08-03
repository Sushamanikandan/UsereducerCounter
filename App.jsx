import { useReducer } from 'react'
import './App.css'
import Increment from './Increment'
import Decrement from './Decrement'
const reducer=(state,action)=>{
  switch(action.type){
case'increment':
return{count:state.count+1}
case'decrement':
return{count:state.count-1}
default:
  return 
  }
}
function App() {
  const [state,dispatch]=useReducer(reducer,{count:0})

  return (
    <>
    <p>{state.count}</p>
       <Increment  dispatch={dispatch}/>
       <Decrement  dispatch={dispatch}/>
    </>
  )
}

export default App
