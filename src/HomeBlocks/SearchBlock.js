import React from 'react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SearchBox from '../HomeBlocks/SearchBox';

function SearchBlock() {
  return (
    <Container
    maxWidth="md"
    sx={{ textAlign: 'center', paddingRight: 2,paddingLeft: 2, marginBottom: {xs:5, md:10} }}
  >
    <Typography
      variant="h2"
      fontWeight="bold"
      sx={{
        marginTop: {xs:5, md:10},
        fontFamily: 'Roboto',
         fontSize: { xs: "25px", md: "40px" }, // Set font size based on screen size
      }}
    >
      <span style={{ color: 'black' }}>Get the </span>
      <span style={{ color: '#4540DB' }}>Right Job</span>
      <br />
      <span style={{ color: 'black' }}>You Deserve</span>
    </Typography>
    <Typography
      variant="h5"
      sx={{
        margin: 5,
        fontFamily: 'Roboto',
        fontSize: { xs: '10px', md: '18px' }, // Set font size based on screen size
      }}
    >
      786 jobs & 110 candidates are registered
    </Typography>
    <SearchBox />
  </Container>
  )
}

export default SearchBlock