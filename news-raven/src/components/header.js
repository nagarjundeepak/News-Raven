import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

const Header = () => {
    const date = new Date().toDateString();
    return(
    <div className='header'>           
        <div className='menu'><IconButton><MenuIcon /></IconButton></div>
        <div className='title'>News Raven</div>
        <div className='today'>{date}</div>
    </div>
    )
}

export default Header;