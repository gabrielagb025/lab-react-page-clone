import ReactLogo from '../../assets/React-icon.svg.png';
import GitHubLogo from '../../assets/github.svg.png';
import LightMode from '../../assets/light-mode.png';
import './navbar.css'

function NavBar() {
    return(
        <nav className='navbar'>
            <div className='navbar-logo'>
                <img src={ ReactLogo } alt="" />
            </div>
            <div className='navbar-content'>
                <a href="">Aprende</a>
                <a href="">Referencia</a>
                <a href="">Comunidad</a>
                <a href="">Blog</a>
                <img src={ LightMode } alt="" />
                <img src={ GitHubLogo } alt="" />
            </div>
        </nav>
    )
}

export default NavBar;