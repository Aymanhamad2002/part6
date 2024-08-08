import { handleFilter } from "../reducers/filterReducer"
import { useDispatch } from "react-redux"

const Filter = () => {
    
    const dispatch = useDispatch()
    const handleFilterTextChange = (event) =>{
        dispatch(handleFilter(event.target.value))
 
    }
    return(<div>
        <input onChange = {handleFilterTextChange}></input>
    </div>)
}
export default Filter