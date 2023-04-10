import React from 'react'
import {Link,Outlet,NavLink} from "react-router-dom"

const Layout = () => {
    let activeStyle = {
        backgroundColor:"black",
        color:"white"
    }
    return (
        <>
        <div>Layout</div>
        {/* <nav>
         <li>
            <Link to="/">Home</Link>
         </li>
         <li>
            <Link to="/blogs">Blogs</Link>
         </li>
         <li>
            <Link to="/contact">Contact</Link>
         </li>
        </nav> */}
        <nav>
         <li>
            <NavLink style={({isActive})=>isActive ? activeStyle : undefined} to="/">Home</NavLink>
         </li>
         <li>
            <NavLink style={({isActive})=>isActive ? activeStyle : undefined} to="/blogs">Blogs</NavLink>
         </li>
         <li>
            <NavLink style={({isActive})=>isActive ? activeStyle : undefined} to="/contact">Contact</NavLink>
         </li>
        </nav>
        <Outlet/>
        </>
    )
}
export default Layout