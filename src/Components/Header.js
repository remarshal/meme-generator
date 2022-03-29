import logo from '../images/logo.png';
import '../style.css';

function Header() {
    return (
        <div>
            <header className="header">
                <img src={logo} className="header-logo" alt="logo" />
                <h2 className='header-title'>meme generator</h2>
                <p>React Project</p>
            </header>
        </div>
    );
}

export default Header;