import { useDispatch,useSelector } from "react-redux"
import { makeItZero, incrementGood,incrementBad, incrementOk } from "./reducers/reducer"
const App = () => {
   const dispatch  = useDispatch()
   const state = useSelector(state => state)

  
    return (
      <div>
        <button onClick={() => dispatch(incrementGood())}>good</button> 
        <button onClick={() => dispatch(incrementOk())}>ok</button> 
        <button onClick={() => dispatch(incrementBad())}>bad</button>
        <button onClick = {(() => dispatch(makeItZero()))}>reset stats</button>
        <div>good {state.good}</div>
        <div>ok {state.ok}</div>
        <div>bad {state.bad}</div>
      </div>
    )
  }
export default App