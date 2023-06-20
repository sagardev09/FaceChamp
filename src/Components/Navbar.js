import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React from 'react'
import useStyles from '../Styles'
import { Chat, IceSkating, Notifications, Search, } from '@mui/icons-material'
import { useState } from 'react'


const Navbar = () => {

    const [open, setOpen] = useState(false)

    const classes = useStyles()
    return (
        <Box>
            <AppBar position='fixed'>
                <Toolbar className={classes.nav}><Typography variant='h5' sx={{ display: { xs: "none", sm: "block" } }}>Facechamp</Typography>
                    <IceSkating sx={{ display: { xs: "block", sm: "none" } }} />
                    <Box className={classes.search} sx={{ display: { xs: "none", sm: "flex" } }}  >
                        <InputBase placeholder='Search....' />
                        <Search className={classes.searchIcon} />
                    </Box>
                    <Box className={classes.icons} sx={{ display: { sm: "flex", xs: "none" } }}>
                        <Badge badgeContent={8} color='error'>
                            <Chat />
                        </Badge>
                        <Badge badgeContent={3} color='error'>
                            <Notifications true="true" />
                        </Badge>
                        <Badge onClick={(e) => setOpen(true)}>
                            <Avatar sx={{ height: "30px", width: "30px" }} src='https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png' />
                        </Badge>
                    </Box>
                    <Box className={classes.user} sx={{ display: { sm: "none", xs: "flex" } }} onClick={(e) => setOpen(true)}>
                        <Badge>
                            <Avatar sx={{ height: "30px", width: "30px" }} src='https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png' />
                        </Badge>
                        <Typography variant='h6'>Sagar</Typography>
                    </Box>
                </Toolbar>
                <Menu
                    id="basic-menu"
                    open={open}
                    onClose={(e) => setOpen(false)}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <MenuItem >Profile</MenuItem>
                    <MenuItem >My account</MenuItem>
                    <MenuItem >Logout</MenuItem>
                </Menu>
            </AppBar>
        </Box>
    )
}

export default Navbar
