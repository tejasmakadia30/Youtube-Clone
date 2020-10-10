import React, {useState} from 'react';
import './Header.css';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom';


function Header() {
    const [inputSearch, setInputSearch] = useState("");



    return (
        <div className="header">
            <div className='header_left'>
            <MenuSharpIcon />
            <Link to={`/`}>
            <img className='header_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png' alt="Youtube Logo"></img> 
            </Link>
            </div>

            <div className='header_input'>
            <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder='Search'  type='text'></input>
            <Link to={`/search/${inputSearch}`}>
                <SearchSharpIcon className='header_inputButton'/>
            </Link>
            </div>
            
            <div className='header_right'>
            <VideoCallSharpIcon className='header_icon'/>
            <AppsSharpIcon className='header_icon' />
            <NotificationsSharpIcon className='header_icon'/>
            <Avatar className='header_icon' alt="Tejas Makadia" src="https://avatars1.githubusercontent.com/u/59878262?s=460&u=74ef9be51255fa17abb9c268a4832b215e0f55e1&v=4" >
            </Avatar>
            </div>

        </div>
    )
}

export default Header
