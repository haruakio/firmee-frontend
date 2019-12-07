import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HeaderNew from './HeaderNew'
import HeaderMatter from './HeaderMatter'

const Header = () => {
    return (<AppBar position="static">
        <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <HeaderNew />
            <HeaderMatter />
            
        </Toolbar>
    </AppBar>
    )
}

export default Header