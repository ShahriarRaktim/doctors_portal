import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Service from "../Service/Service";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import white from "../../../images/whitening.png";

const services = [
  {
    name: "Fluoride Treatment",
    description: "love love you you you love i dont  need you i am ok",
    img: fluoride,
  },
  {
    name: "Cavity Filling",
    description: "love love you you you love i dont  need you i am ok",
    img: cavity,
  },
  {
    name: "Teeth Whitenig",
    description: "love love you you you love i dont  need you i am ok",
    img: white,
  },
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography sx={{fontWeight: 500, m:3}} variant="h6" component="div">
          OUR SERVICES
        </Typography>
        <Typography sx={{fontWeight: 600, color: 'info.main', m:2}} variant="h4" component="div">
          Services We Provide
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <Service key={service.name} service={service}></Service>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
