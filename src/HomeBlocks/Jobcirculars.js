import { Container } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Demo from "../Photos/demo.png";


function Jobcirculars() {
  const Solutions = [
      { Img: Demo, CompanyName: "Microsoft", Mode: "Freelancer", Post: "Senior UI Designer", Type: "Fulltime", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. Cras arcu varius in aliquam habitant fermentum. Mi sit lorem mollis vitae quis curabitur vestibulum.", Charge: "2500" },
      { Img: Demo, CompanyName: "Microsoft", Mode: "Freelancer", Post: "Senior UI Designer", Type: "Fulltime", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. Cras arcu varius in aliquam habitant fermentum. Mi sit lorem mollis vitae quis curabitur vestibulum.", Charge: "2500" },
      { Img: Demo, CompanyName: "Microsoft", Mode: "Freelancer", Post: "Senior UI Designer", Type: "Fulltime", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. Cras arcu varius in aliquam habitant fermentum. Mi sit lorem mollis vitae quis curabitur vestibulum.", Charge: "2500" },
      { Img: Demo, CompanyName: "Microsoft", Mode: "Freelancer", Post: "Senior UI Designer", Type: "Fulltime", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. Cras arcu varius in aliquam habitant fermentum. Mi sit lorem mollis vitae quis curabitur vestibulum.", Charge: "2500" },
      { Img: Demo, CompanyName: "Microsoft", Mode: "Freelancer", Post: "Senior UI Designer", Type: "Fulltime", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. Cras arcu varius in aliquam habitant fermentum. Mi sit lorem mollis vitae quis curabitur vestibulum.", Charge: "2500" },
      { Img: Demo, CompanyName: "Microsoft", Mode: "Freelancer", Post: "Senior UI Designer", Type: "Fulltime", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. Cras arcu varius in aliquam habitant fermentum. Mi sit lorem mollis vitae quis curabitur vestibulum.", Charge: "2500" },
      { Img: Demo, CompanyName: "Microsoft", Mode: "Freelancer", Post: "Senior UI Designer", Type: "Fulltime", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. Cras arcu varius in aliquam habitant fermentum. Mi sit lorem mollis vitae quis curabitur vestibulum.", Charge: "2500" },
      { Img: Demo, CompanyName: "Microsoft", Mode: "Freelancer", Post: "Senior UI Designer", Type: "Fulltime", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. Cras arcu varius in aliquam habitant fermentum. Mi sit lorem mollis vitae quis curabitur vestibulum.", Charge: "2500" },
    
  ];

  return (
    <Container maxWidth="xxl" sx={{ textAlign: 'center', padding: 5 }}>
      <Typography variant="h3" fontWeight="bold" sx={{ margin: 5, fontSize: { xs: "25px", md: "40px" }, fontFamily: 'Roboto' }}>
        <Box sx={{ color: 'black' }}>Featured Job Circulars</Box>
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {Solutions.map((content, index) => (
          <CardContent
            key={index}
            sx={{
              backgroundColor: "white",
              width: { xs: '90%', md: "15%" },
              height: "auto",
              margin: 4,
              alignItems: "center",
              justifyContent: "space-between",
              display: "flex",
              flexDirection: "column",
              borderRadius: "10px",
              transition: "background-color 0.3s",
              cursor: "pointer",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                backgroundColor: "#f0f0f0",
              },
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row", alignSelf: "flex-start", alignItems: "center", marginRight: "10px" }}>
              <img
                src={content.Img}
                style={{ height: '50px', marginLeft: '10px' }}
              />
              <Box sx={{ marginLeft: "20px", alignItems: "start" }}>
                <Box sx={{ fontSize: { xs: "16px", md: "18px" }, fontWeight: "bold", fontFamily: 'Roboto' }}>
                  {content.CompanyName}
                </Box>
                <br />
                <Box sx={{ marginTop: "-20px", fontSize: { xs: "12px", md: "13px" },textAlign:"left", fontFamily: 'Roboto' }}>
                  {content.Mode}
                </Box>
              </Box>
            </Box>
            <br />
            <Box sx={{ alignSelf: "flex-start", marginLeft: "10px",textAlign:"left", fontSize: { xs: "15px", md: "18px" }, fontWeight: "bold", marginBottom: "5px", fontFamily: 'Roboto' }}>
              {content.Post}
            </Box>
            <Box sx={{ alignSelf: "flex-start", marginLeft: "10px", fontSize: { xs: "12px", md: "13px" }, fontFamily: 'Roboto' }}>
              {content.Type}
            </Box>
            <Typography sx={{ alignSelf: "flex-start", marginLeft: "10px", textAlign:"justify",fontSize: { xs: "10px", md: "12px" }, alignSelf: "auto", fontFamily: 'Roboto',margin:"15px" }}>
              {content.content}
            </Typography>
            <Container
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "7px", md: "10px" },
                  marginLeft:{xs:0,md:"-10px"},
                  marginTop: "10px",
                  fontWeight:"bold",
                  fontFamily: 'Roboto',
                }}
              >
                ${content.Charge}/month
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#F9F9FF',
                  color: "#4943DA",
                  textTransform: "initial",
                  fontSize: { xs: "7px", md: "10px" },
                  marginTop: "10px",
                  marginRight:{xs:0,md:"-15px"},
                  fontFamily: 'Roboto',
                  '&:hover': {
                    color: 'white', 
                  },
                }}
              >
                Apply Now
              </Button>
            </Container>
          </CardContent>
        ))}
      </Box>
      <Button
        variant="contained"
        sx={{
          
          backgroundColor: '#F9F9FF',
          color: "#4943DA",
          marginTop: "10px",
          textTransform: "initial",
          padding: '15px',
          border: "2px solid #4943DA",
          borderRadius: "20px",
          fontSize: { xs: "12px", md: "14px" },
          minWidth: 'auto',
          fontFamily: 'Roboto',
          '&:hover': {
            color: 'white', 
          },
        }}
      >
        Find More Jobs
      </Button>
    </Container>
  )
}

export default Jobcirculars;
