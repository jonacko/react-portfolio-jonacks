import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import JessAvatar from '../../assets/images/jess-avatar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faSkull, faFaceSmile, faGlassMartini, faPaintbrush, faPencil,  } from '@fortawesome/free-solid-svg-icons'

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

        <NavLink exact = "true" activeclassname="active" className="portfolio-link" to="/portfolio">
            <FontAwesomeIcon icon={faPaintbrush} color="#4d4d4e" />
        </NavLink>

        <NavLink exact = "true" activeclassname="active" className="resume-link" to="/resume">
            <FontAwesomeIcon icon={faPencil} color="#4d4d4e" />

        </NavLink>
    </nav>
    <ul>
        <li>
            <a target="_blank"
            rel= 'noreferrer' 
            href="https://www.linkedin.com/in/jessonuidev">

                <FontAwesomeIcon icon = {faSkull} color="#4d4d4e" />
            </a>
        </li>
        <li>
          
            <a target="_blank"
            rel= 'noreferrer' 
            href="https://github.com/jonacko">

                <FontAwesomeIcon icon = {faGlassMartini} color="#4d4d4e" />
            </a>
        </li>
        <li>
        <a target="_blank"
            rel= 'noreferrer' 
            href="https://musicisenoughforalifetime.wordpress.com/">

                <FontAwesomeIcon icon = {faFaceSmile} color="#4d4d4e" />
            </a>
        </li>
    
    </ul>
</div>

)
export default Sidebar