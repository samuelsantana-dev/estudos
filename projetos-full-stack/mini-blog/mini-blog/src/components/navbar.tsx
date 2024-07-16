import { NavLink } from "react-router-dom"
import styles from "./Navbar.module.css";

export const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <NavLink to="/" className={styles.brand}>
                <h1>Mini-blog</h1>
            </NavLink>
            <ul className={styles.links_list}>
                <li>
                    <NavLink 
                    to="/home" 
                    className={({ isActive  }) => ( isActive ? styles.active : "")}>home</NavLink>
                </li>
                <li>
                    <NavLink 
                    to="/about" 
                    className={({ isActive }) => ( isActive ? styles.active : "")}>about</NavLink>
                </li>
                <li>
                    <NavLink to="/register" className={({ isActive }) => ( isActive ? styles.active : "")}>
                        register
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login" className={({ isActive }) => ( isActive ? styles.active : "")}>
                        login
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}