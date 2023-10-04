import React from 'react';
import Container from '@mui/material/Container';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function SearchBox() {
  return (
    <Container
      display="flex"
      alignItems="center"
      sx={{
        borderRadius: "20px",
        padding: "2px",
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
        width: "100%",
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        sx={{
          display: { xs: 'block', md: 'flex' },
        }}
      >
        <InputBase
          placeholder='Search Title or Keyword'
          startAdornment={
            <IconButton>
              <SearchIcon fontSize="large" /> {/* Make the search icon larger */}
            </IconButton>
          }
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            outline: 'none',
            fontSize: { xs: "10px", md: "20px" }, // Set font size
            fontFamily: 'Roboto', // Set font family
          }}
        />
        <Divider
          orientation="vertical"
          flexItem
          style={{
            marginLeft: '10px',
            marginTop: "2px",
            marginBottom: "2px",
            borderRadius: "20px",
            marginRight: '5px',
            borderWidth: '1.5px',
          }}
        /> {/* Vertical line */}
        <InputBase
          placeholder='Search Title or Keyword'
          startAdornment={
            <IconButton>
              <LocationOnIcon fontSize="large" /> {/* Make the location icon larger */}
            </IconButton>
          }
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            outline: 'none',
            fontSize: { xs: "10px", md: "20px" }, // Set font size
            fontFamily: 'Roboto', // Set font family
          }}
        />

        <Box
          sx={{
            marginLeft: 'auto',
            display: { xs: 'none', md: 'flex' }, // Show for desktop and hide for mobile
          }}
        >
          <Button
            variant="contained"
            style={{
              fontFamily: 'Roboto',
              backgroundColor: '#4540DB',
              borderRadius: '20px',
              textTransform: "initial",
              padding: '10px',
              width: '120px', // Set a fixed width for the button
              marginRight: '-17px',
              fontSize: { xs: "10px", md: "20px" }, // Set font size
            }}
          >
            Search
          </Button>
        </Box>
        <Box
          sx={{
            marginLeft: 'auto',
            display: { xs: 'flex', md: 'none' }, // Show for mobile and hide for desktop
          }}
        >
          <Button
            variant="contained"
            style={{
              fontFamily: 'Roboto',
              backgroundColor: '#4540DB',
              marginTop: "10px",
              borderRadius: "20px",
              textTransform: "initial",
              padding: '10px',
              marginTop: "5px",
              marginBottom: "5px",
              width: '100%', // Set the width to 100% for mobile
              marginRight: '-17px',
              fontSize: { xs: "10px", md: "20px" }, // Set font size
            }}
          >
            Search
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default SearchBox;
