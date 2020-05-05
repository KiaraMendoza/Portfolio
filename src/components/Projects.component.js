import React from "react";
import { Container, Header } from "semantic-ui-react";

export default class Projects extends React.Component {
  render() {
    return (
      <Container className="header-container" text>
        <Header as="h2">Projects</Header>
      </Container>
    );
  }
}
