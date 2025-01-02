import { useLocation, useParams } from "react-router-dom"


const User=()=>{
    const {fname}=useParams()
    const location=useLocation()
    return(
        <>
            <h1> hello, {fname}</h1>
            <p>{location.pathname.user}</p>
        </>
    )
}
export default User