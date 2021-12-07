import React from "react";
import PostCard from "../components/PostCard";
import Container from "@mui/material/Container";

import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </Container>
    </>
  );
};

export default Home;
