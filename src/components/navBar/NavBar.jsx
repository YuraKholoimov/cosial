import { NavLink } from 'react-router-dom'
import s from './NavBar.module.css'
import SideBareFriends from './SideBarFriends/SideBareFriennds'

const NavBar = (props) => {

    return (
        <div>
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
                </div>
                <div className={`${s.item}`}>
                    <NavLink to="/dialog" activeClassName={s.activeLink}>Message</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
                </div>

                <div >
                    <SideBareFriends state={props.state} />
                </div>
            </nav>


        </div>

    )
}

export default NavBar