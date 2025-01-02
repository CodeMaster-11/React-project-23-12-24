import { Link, NavLink } from "react-router-dom"



const Menu=()=>{
    return(
        <>
            <NavLink to={'/about'}>About</NavLink><br/>
            <NavLink to={'/Contact'}>Contact</NavLink>
            <NavLink to={'/Contact'}></NavLink>
        </>
    )
}
export default Menu