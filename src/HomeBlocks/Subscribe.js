import React from 'react';
import Container from '@mui/material/Container';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Typography from '@mui/material/Typography';

function Subscribe() {
  const fontFamily = 'Roboto, sans-serif'; // Define the fontFamily variable

  return (
    <Container
      maxWidth="xl"
      sx={{
        textAlign: 'center',
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '-100px',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          height: { xs: 'auto', md: '200px' },
          width: 1000,
          padding: 5,
          borderRadius: '20px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Typography variant="h3" fontWeight="light" sx={{ margin: 5, width: { xs: '100%', md: '110%' }, textAlign: { xs: 'center', md: 'left' }, fontFamily,fontSize: { xs: "25px", md: "40px" }, }}>
          <span style={{ color: 'black' }}>Never Want to Miss</span>
          <br />
          <span style={{ color: 'black' }}>Any</span>
          <span style={{ color: '#4540DB' }}>Job News?</span>
        </Typography>
        <Container
          sx={{
            marginLeft: 'auto',
            marginRight: '5%',
            display: 'flex',
            flexDirection: 'row',
            height: { xs: '50px', md: 'auto' },
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: '20px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
            padding: '10px',
            paddingTop: '5px',
            paddingBottom: '5px',
          }}
        >
          <InputBase
            placeholder="Enter your Email..."
            sx={{
              backgroundColor: 'transparent',
              border: 'none',
              outline: 'none',
              fontSize: {xs:10, md:17},
              padding: '10px',
              flex: 1,
              fontFamily,
            }}
          />

          <Box
            sx={{
              marginLeft: 'auto',
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <Button
              variant="contained"
              sx={{
                textTransform: 'initial',
                backgroundColor: '#4540DB',
                borderRadius: '20px',
                padding: '10px 20px',
                height: '50px',
                marginRight: '-6px',
                width: '120px',
                fontFamily,
              }}
            >
              Subscribe
            </Button>
          </Box>
          <Box
            sx={{
              marginLeft: 'auto',
              display: { xs: 'flex', md: 'none' },
              marginRight: '-6px',
            }}
          >
            <Button
              variant="contained"
              sx={{
                textTransform: 'initial',
                backgroundColor: '#4540DB',
                borderRadius: '20px',
                fontSize:"10px",
                padding: '10px',
                width: '100%',
                fontFamily,
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Container>
      </Container>
    </Container>
  );
}

export default Subscribe;
