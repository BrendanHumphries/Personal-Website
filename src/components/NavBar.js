import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className='NavBar'>
            <h1>Welcome to Brendan Humphries' Personal Website</h1>
            <nav>
                <Link to='/'>Home</Link> |{' '}
                <Link to='/resume'>Resume</Link> |{' '}
                <Link to='/projects'>Projects</Link>
            </nav>
        </div>
    )
}

export default NavBar;