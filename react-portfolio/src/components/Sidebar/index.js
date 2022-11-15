import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import JessAvatar from '../../assets/images/jess-avatar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (

<div className = 'nav-bar'>
    <Link className='avatar' to='/'>
        <img src={JessAvatar} alt="avatar"/>
        </Link>
    <nav>
        <NavLink exact = "true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink exact = "true" activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink exact = "true" activeclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
    </nav>
</div>

)
export default Sidebar