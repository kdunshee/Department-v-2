
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Card } from 'semantic-ui-react'
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import DepartmentForm from './DepartmentForm'

const Departments = (props) => {
const [departments, setDepartments ] =useState([]);



const addDepartment = (depObj) => {
    console.log(depObj)
    setDepartments([depObj, ...departments])
}

const renderDepartments = () => {
        if (departments.length <= 0)
          return <h2>No Department</h2>
        return departments.map( department => (
          <Card key = {`department-${department.id}`}>
            <Card.Content>
              <Card.Header>{ department.name }</Card.Header>
              <Card.Meta>{ department.department }</Card.Meta>
              <Card.Description>
                { department.description }
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button as={Link} to={`/departments/${department.id}`} color='green'>
                View
              </Button>
            </Card.Content>
          </Card>
        ))
      }

    useEffect(() => {
        axios.get('api/departments').then( res => {
            console.log(res)
            setDepartments(res.data)
        }).catch (e => {
            console.log(e)
        })


    }, [])


    return (
        <div>

        <h1>Departments</h1>
        <DepartmentForm add = {addDepartment}/>
        <Card.Group>
            {renderDepartments()}
        </Card.Group>
        </div>
    )
}

export default Departments