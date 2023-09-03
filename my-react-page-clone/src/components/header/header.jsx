import ReactLogo from '../../assets/React-icon.svg.png';
import Buttons from '../buttons/buttons';
import './header.css'

function Header() {
    return(
        <div className='header-content'>
            <img src={ ReactLogo } alt="" />
            <h2>React</h2>
            <p>La biblioteca para interfaces de usuario web y nativas</p>
            <Buttons/>
        </div>
    )
}

export default Header;