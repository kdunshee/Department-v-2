import React from 'react';
import { Link, } from "react-router-dom";
import { Button, Header, } from "semantic-ui-react";

const NoMatch = () => (
  <div style={styles.container}>
    <Header as="h1" style={styles.header}>Wrong Path!</Header>
    <Header as="h1" style={styles.header}>Nope.</Header>
    <Header as="h3">Sorry, this not working right now.</Header>
    <Link to="/">
      <Button color="green">Home</Button>
    </Link>
  </div>
)

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "80px",
  },
  header: {
    fontSize: "80px",
  },
};

export default NoMatch;