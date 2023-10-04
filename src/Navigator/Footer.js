import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logo from "../Photos/staffingsolutions_logo.png";

const pages = ['About', 'Jobs', 'Contact Us', 'Terms', 'Privacy Policy'];

function Footer() {
    const [anchorElNav, setAnchorElNav] = useState(true);
    const [anchorElUser, setAnchorElUser] = useState(null);

    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: '#F4F5FA',
                color: 'black',
                padding: 5, // Adjust the padding for better spacing
                height: { xs: 'auto', md: '300px' }
            }}
        >
            <Container maxWidth="xl" sx={{ marginTop: 'auto' }}>
                <Toolbar disableGutters sx={{ width: "100%" }}>
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
                        <img src={logo} style={{ height: '70px' }} alt="Logo" />
                    </Typography>

                    {/* Box for center-aligned content on xs screens */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' },
                            flexDirection: 'column',
                            alignItems: 'center', // Center horizontally on xs screens
                            justifyContent: 'center', // Center vertically on xs screens
                            width: '100%',
                            paddingTop: 15 // Set minimum height to fill the viewport
                        }}
                    >
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            sx={{
                                width: '100%',
                                mr: 2,
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '0.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                paddingBottom: "5px",
                            }}
                        >
                            <img src={logo} style={{ height: '40px'}} alt="Logo" />
                        </Typography>
                        
                <hr style={{ width: '100%',display: { xs: 'none', md: 'flex' },borderTop: '1px solid #ccc' }} />

                        {pages.map((page) => (
                            <Button
                                key={page}
                                sx={{
                                    textTransform: "initial",
                                    color: 'black',
                                    fontSize: 10,
                                    display: 'block',
                                    marginLeft: 2,
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    {/* Box for center-aligned content on md screens */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                            marginLeft: '20%',
                            justifyContent: 'space-evenly',
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page}
                                sx={{
                                    textTransform: "initial",
                                    my: 2,
                                    fontSize: 20,
                                    color: 'black',
                                    display: 'block',
                                    marginLeft: 2,
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
                <hr style={{ width: '100%', borderTop: '1px solid #ccc' }} />
                <Typography
                    variant="h5"
                    noWrap
                    component="b"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 300,
                        fontSize: 12,
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    @staffingSolutions All rights reserved.
                </Typography>
                <Typography
                    variant="h5"
                    noWrap
                    component="b"
                    sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        justifyContent: "center",
                        fontFamily: 'monospace',
                        fontWeight: 300,
                        fontSize: 10,
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    @staffingSolutions All rights reserved.
                </Typography>
            </Container>
        </AppBar>
    );
}

export default Footer;
