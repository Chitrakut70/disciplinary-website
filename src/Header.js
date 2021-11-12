import React from 'react'
import'./Header.css';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
function Header() {
    return (
        <div className="header-class">
            <div className="header-name">DISCIPILINARY COMMITTEE</div>
            <ul className="header-components">
                <li><MenuRoundedIcon/></li>
                <li>ABOUT</li>
                <li>COORDINATORS</li>
                <li>CONTACT US</li>
            </ul>
        </div>
    )
}

export default Header
