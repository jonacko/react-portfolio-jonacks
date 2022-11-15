import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {

    return (
        <div className="container home-page">
            <div className="text-area">
                <h1> Welcome!</h1>
                <h2>My name is Jess</h2>
                <Link to ="/contact" className='flat-button'>CONTACT ME</Link>
            </div>

            </div>
    );
} 

export default Home