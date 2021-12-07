import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/system/Box";
import React from "react";
import Avatar from "@mui/material/Avatar";

const Profile = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Avatar
              alt="profile"
              sx={{ width: 200, height: 200 }}
              src="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo="
            ></Avatar>
          </Grid>
          <Grid item xs={12} sm={6}>
            John Edwards
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Profile;
