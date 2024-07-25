import { NavLink } from "react-router-dom"
import '../../App.css'

const Navbar = () => {
    return (
        <nav className='app-navbar'>
            <div className='navbar-item'> <NavLink to='/profile'> Мой профиль </NavLink> </div>
            <div className='navbar-item'> <NavLink to='/posts'> Посты </NavLink> </div>
            <div className='navbar-item'> <NavLink to='/subscriptions'> Подписки </NavLink> </div>
            <div className='navbar-item'> <NavLink to='/subscribes'> Подписчики </NavLink> </div>
        </nav>
    )
}

export default Navbar