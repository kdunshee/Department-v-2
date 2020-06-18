
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Card, } from 'semantic-ui-react'
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import DepartmentForm from './DepartmentForm'
import Items from './Items'
import styled from 'styled-components';


const Departments = (props) => {
  const [departments, setDepartments ] =useState([]);
  
  useEffect(() => {
      axios.get('api/departments').then( res => {
          console.log(res)
          setDepartments(res.data)
      }).catch (e => {
          console.log(e)
      })
  }, [])

  const addDepartment = (depObj) => {
    console.log(depObj)
    setDepartments([depObj, ...departments])
  }

  const deleteDepartment = (id) => {
    axios.delete(`/api/departments/${id}`)
    .then( res => {
      setDepartments(departments.filter(department => department.id !== id))
    })
} 
  
  const renderDepartments = () => {
    if (departments.length <= 0)
          return <h2>No Department</h2>
        return departments.map( department => (
            <AppContainer>
          <div>
            <br />

          <Card key = {`department-${department.id}`}>
            <Card.Content>
              <Card.Header>{ department.name }</Card.Header>
              <Card.Meta>{ department.department }</Card.Meta>
              <Card.Description>
                { department.description }
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button as={Link} to={`/departments/${department.id}`} color='orange'>
                View
              </Button>
              <Button color = 'red' onClick ={() => deleteDepartment(department.id)}>Delete
              </Button>
            </Card.Content>
          </Card>
        <Items departmentId = {department.id} /> 
        </div>
            </AppContainer>
        ))
      }

    return (
        <div>

        <DepartmentForm add = {addDepartment}/>
        <h1>View Departments and their Items</h1>
        <Card.Group>{renderDepartments()}</Card.Group>
        </div>
    )
}

const AppContainer = styled.div`
  background: linear-gradient(to bottom right, green, white);
`;

export default Departments