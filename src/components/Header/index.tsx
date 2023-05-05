import './Header.css';
import { NavLink } from "react-router-dom";

function Header() {

    let activeStyle = {
        color: "orange"
    };

    return (
        <header className="header">
            <div className='logo'>
                <img src={require('../../assets/images/logo128.png')} alt="Foundry logo" />
            </div>
            <nav>
                <ul className='nav-list'>
                    <li>
                        <NavLink key="index" to={"/foundry-app/"} style={({ isActive }) => isActive ?  activeStyle : undefined}>
                            Головна
                        </NavLink>
                    </li>
                    <li>
                        <NavLink key="index" to={"/foundry-app/data"} style={({ isActive }) => isActive ?  activeStyle : undefined}>
                            Довідкові дані
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;