import { Name , Name1 } from "./App"
import CompC from "./compC"
import { useContext } from "react"

const CompB=()=>{
    const n=useContext(Name)
    const n1=useContext(Name1)
    return(
        <>
            <h1>Well come to {n} {n1} from B</h1>
            <CompC/>
        </>
    )
}

export default CompB