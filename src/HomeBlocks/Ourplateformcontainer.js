import React from 'react';
import { Box, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import img1 from "../Photos/1.png";
import img2 from "../Photos/2.png";
import img3 from "../Photos/3.png";
import img4 from "../Photos/4.png";
import img5 from "../Photos/5.png";
import img6 from "../Photos/6.png";
import img7 from "../Photos/7.png";
import img8 from "../Photos/8.png";

function Ourplateformcontainer() {

  const Solutions = [
    { Icon: img1, Title: "Marketing & Communication", Jobs: "237" },
    { Icon: img2, Title: "Design & Development", Jobs: "237" },
    { Icon: img3, Title: "Human Research & Development", Jobs: "237" },
    { Icon: img4, Title: "Finance Management", Jobs: "237" },
    { Icon: img5, Title: "Government Jobs", Jobs: "237" },
    { Icon: img6, Title: "Business Consulting", Jobs: "237" },
    { Icon: img7, Title: "Customer Support Care", Jobs: "237" },
    { Icon: img8, Title: "Project Management", Jobs: "237" },
  ];

  return (
   
      <Container
        maxWidth="xxl"
        sx={{ textAlign: 'center', padding: 5, backgroundColor: "#F6F7FC" }}
      >
        <Typography variant="h4" fontWeight="bold" sx={{ margin: 5, fontFamily:"Roboto",fontSize: { xs: "25px", md: "30px" } }}>
          <span style={{ color: 'black' }}>One Platform </span>
          <br />
          <span style={{ color: 'black' }}>Many </span>
          <span style={{ color: '#4540DB' }}>Solutions</span>
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {Solutions.map((content, index) => (
            <CardContent
              key={index}
              sx={{
                backgroundColor: "white",
                width: { xs: '100%', md: "15%" },
                height: 150,
                margin:{ xs: 2, md: 4 },
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                borderRadius: "10px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                transition: "background-color 0.3s",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#4540DB",
                },
                fontFamily:"Roboto", // Apply fontFamily to the CardContent component
              }}
            >
              <img
                src={content.Icon}
                alt={content.Title}
                style={{ height: '50px', marginLeft: '10px', marginTop: "-30px" }}
              />
              <Box>
                {content.Title}
                <br />
                <br />
                {content.Jobs} Jobs Available
              </Box>
            </CardContent>
          ))}
        </Box>
      </Container>
   
  );
}

export default Ourplateformcontainer;
