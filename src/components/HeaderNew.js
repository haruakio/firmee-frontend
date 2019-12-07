import React from 'react';
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {AddCircleOutline} from '@material-ui/icons'

const HeaderNew = () => {
    const [anchorEl, setAnchorEl] = React.useState(false);

    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <>
            <Button aria-controls="new-menu" aria-haspopup="true" onClick={handleClick}>
                <AddCircleOutline/> New
            </Button>
            <Menu
                id="new-header-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Matter</MenuItem>
                <MenuItem onClick={handleClose}>Contact</MenuItem>
                <MenuItem onClick={handleClose}>Schedule</MenuItem>
            </Menu>
    </>
    )
}

export default HeaderNew