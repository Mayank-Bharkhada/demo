import { Container } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Demo2 from "../Photos/demo2.png";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import Avatar from '@mui/material/Avatar';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

function UploadCV() {
  const fontFamily = 'Roboto, sans-serif'; // Define the fontFamily variable

  return (
    <Container maxWidth="xxl" sx={{ textAlign: 'center', display: "flex", flexDirection: { xs: 'column', md: 'row' }, alignItems: "center", justifyContent: "center", backgroundColor: "#4540DB", height: { xs: 'auto', md: "600px" }, padding: 5, width: { xs: '90%', md: "70%" }, borderRadius: "20px", marginTop: 5, marginBottom: 20 }}>
      <Avatar
        src={Demo2}
        sx={{ height: { xs: '200px', md: "500px" }, borderRadius: 0, width: { xs: '100%', md: "50%" } }}
      />
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", padding: "20px" }}>
        <Typography variant="h4" sx={{ color: 'white', marginBottom: '10px', textAlign: 'left', fontFamily, fontSize: { xs: "20px", md: "40px" } }}>
          Get Matched The Most Valuable Jobs, Just Drop Your CV at Staffing Solutions
        </Typography>
        <Typography variant="body1" sx={{ color: 'white', marginBottom: '10px', textAlign: 'left', fontFamily, fontSize: { xs: "13px", md: "20px" } }}>
          In the subject line of the email, write your name and the description of the position you want to apply for.
        </Typography>
        <Button autoCapitalize='' component="label" variant="contained" startIcon={<FileUploadOutlinedIcon color='#4540DB' fontSize='large' />} sx={{
          backgroundColor: "white", color: "#4540DB", padding: "15px", borderRadius: "20px", fontWeight: "bold", textTransform: "initial", fontFamily, fontSize: { xs: "10px", md: "16px" }, '&:hover': {
            color: 'white',
          },
        }}>
          Upload Your CV
          <VisuallyHiddenInput type="file" />
        </Button>
      </Box>
    </Container>
  )
}

export default UploadCV;
