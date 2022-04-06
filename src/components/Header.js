import React from 'react'
import { Link } from 'react-router-dom'
function Header(props) {
    return (
        <div>
            <ul style={{ listStyle: 'none', flexDirection: 'row', display: 'flex' }}>
                <li><Link to={'/'} >Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/aboutsas'}>About</Link></li>
            </ul>
        </div>
    )
}

export default Header