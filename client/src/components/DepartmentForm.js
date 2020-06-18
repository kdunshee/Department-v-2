import React from 'react';
import { Form, Header, } from "semantic-ui-react";
import styled from 'styled-components';
import Axios from 'axios';

class ProductsForm extends React.Component {
  defaultValues = { name: "", description: "", };
  state = { ...this.defaultValues, };
  handleSubmit = (e) => {
    e.preventDefault();
    const department = { ...this.state, };
    Axios.post('api/departments', {department: department}).then((res) => {
        console.log(res)
        this.props.add(res.data)
    })
    this.setState({ ...this.defaultValues, });
  }
  handleChange = (e) => {
    const { target: { name, value, } } = e;
    this.setState({ [name]: value, });
  }
  render() {
    const { name, description, } = this.state;
    return (
      <div>
        <AppContainer>

        <Header as="h1">Enter New Department</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              label="Name"
              name="name"
              placeholder="Name"
              value={name}
              onChange={this.handleChange}
              required
              />
            <Form.Input
              label="Description"
              name="description"
              placeholder="Description"
              value={description}
              onChange={this.handleChange}
              />
          </Form.Group>
          <Form.Button color="blue">Submit</Form.Button>
        </Form>
              </AppContainer>
      </div>
    )
  }
}

const AppContainer = styled.div`
  background: linear-gradient(to bottom right, green, white);
`;

export default ProductsForm;
