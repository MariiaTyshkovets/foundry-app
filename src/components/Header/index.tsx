import { Dispatch, SetStateAction, useState } from 'react';
import './Header.css';
import { NavLink } from "react-router-dom";
import { logOut } from '../../services/firebase';

interface FunctionSetSignIn {
    setSignIn: Dispatch<SetStateAction<boolean>>;
  }

function Header(prop: FunctionSetSignIn) {

    const [showUserInfo, setShowUserInfo] = useState(false);
    const name : any = localStorage.getItem("name")?.replaceAll('"',"");
    const img : any = localStorage.getItem("profilePic")?.replaceAll('"',"");

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
                        <NavLink key="data" to={"/foundry-app/data"} style={({ isActive }) => isActive ?  activeStyle : undefined}>
                            Довідкові дані
                        </NavLink>
                    </li>
                    <li>
                        <NavLink key="results" to={"/foundry-app/results"} style={({ isActive }) => isActive ?  activeStyle : undefined}>
                            Результати
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className='user'>
                <div className='user-img' 
                    onMouseOver={() => setShowUserInfo(true)} 
                    onMouseLeave={() => setShowUserInfo(false)}
                >
                    <img src={img} alt={name} title={name}/>
                </div>
                {showUserInfo && <div className='user-info' 
                    onMouseOver={() => setShowUserInfo(true)}
                    onMouseLeave={() => setShowUserInfo(false)}
                >
                    <h4>{name}</h4>
                    <div className='btn-container'>
                        <NavLink key="index" to={"/foundry-app"}>
                            <button onClick={() => {logOut(); prop.setSignIn(true)}}>Log Out</button>
                        </NavLink>
                    </div>
                </div>}
            </div>
        </header>
    );
}

export default Header;