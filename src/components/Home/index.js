import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {

    return (
        <div className="container home-page">
            <div className="text-area">
                <h1> Welcome!</h1>
                <p></p>
                <h2>My name is Jess, web developer.  Please have a look around - check out the nav bar on the left which will take you to my work/websites.</h2>
                <Link to ="/contact" className='flat-button'>CONTACT ME</Link>
            </div>

            </div>
    );
} 

export default Home