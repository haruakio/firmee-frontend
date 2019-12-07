import React from 'react';
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Gavel} from '@material-ui/icons'

const HeaderMatter = () => {
    const [anchorEl, setAnchorEl] = React.useState(false);

    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <>
            <Button aria-controls="matter-menu" aria-haspopup="true" onClick={handleClick}>
                <Gavel/> Matter
            </Button>
            <Menu
                id="new-header-menu"
                anchorEl={true}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Civil</MenuItem>
                <MenuItem onClick={handleClose}>Crime</MenuItem>
                <MenuItem onClick={handleClose}>Family</MenuItem>
            </Menu>
    </>
    )
}

export default HeaderMatter