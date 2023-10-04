import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logo from "../Photos/staffingsolutions_logo.png"


const pages = ['Home', 'Find Jobs', 'Find Candidates', 'Articles'];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', paddingTop: 2 }} elevation={0}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <img
                            src={logo} // Replace with the path to your logo image
                            style={{ height: '60px', marginRight: '10px' }}
                        />

                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, alignItems: "center" }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon sx={{ fontSize: 30 }} />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} sx={{ color: 'black' }}>
                                    <Typography textAlign="center" sx={{ color: "black" }}>{page}</Typography>
                                </MenuItem>
                            ))}
                            <Box  sx={{ color: 'black',px:2,py:1}}>
                                <Button
                                variant="outlined"
                                   
                                    sx={{ color: 'black', fontWeight: 'small', textTransform: "initial", fontSize: 11,marginRight:2,width:"70px",border:"1px solid #4540DB", }}
                                >
                                    Login
                                </Button>
                                <Button
                                    variant="contained"
                                    sx={{
                                        background: '#4540DB',
                                        color: 'white',
                                        fontSize: 11, // You can adjust the radius as needed
                                        paddingLeft: '6px', // Adjust padding as needed
                                        paddingRight: '6px', // Adjust padding as needed
                                        height: "auto",
                                        textTransform: "initial",
                                        alignSelf: "center",
                                        '&:hover': {
                                            opacity: 0.9,
                                            backgroundColor:"#4540DB" // Reduce the opacity on hover (e.g., 0.8 for 80% opacity)
                                        },
                                    }}
                                >
                                    Register Now
                                </Button>

                             </Box> 
                        </Menu>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            // href="#app-bar-with-responsive-menu"
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',

                            }}
                        >
                            <img
                                src={logo} // Replace with the path to your logo image
                                style={{ height: '40px', marginTop: 10 }}
                            />

                        </Typography>



                    </Box>




                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "space-evenly", marginLeft: 10 }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'black', display: 'block', fontSize: 20, textTransform: "initial" }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                            justifyContent: 'flex-end',
                            alignItems: "center",
                            marginLeft: 'auto', // Pushes the buttons to the right end
                            marginRight: '10px', // Adds some right margin for spacing
                        }}
                    >
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'black', marginLeft: '2px', textTransform: "initial", fontSize: 20 }}
                        >
                            Login
                        </Button>
                        <Button
                            variant="contained"
                            onClick={handleCloseNavMenu}
                            sx={{
                                background: '#4540DB',
                                fontSize: 20,
                                color: 'white',
                                marginLeft: '8px',
                                textTransform: "initial",
                                height: "60px",
                                borderRadius: '20px', // You can adjust the radius as needed
                                paddingLeft: '20px', // Adjust padding as needed
                                paddingRight: '20px', // Adjust padding as needed
                                '&:hover': {
                                    background: '#4540DB',
                                    opacity: 0.8, // Reduce the opacity on hover (e.g., 0.8 for 80% opacity)
                                },
                            }}
                        >
                            Register Now
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;
