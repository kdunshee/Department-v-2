import React, {useState, useEffect} from 'react'
import { Card, } from 'semantic-ui-react'
import axios from 'axios'

const Items = ({departmentId}) => {
  const [items, setItems ] =useState([]);

useEffect(() => {
    axios.get(`/api/departments/${departmentId}/items`)
    .then( res => {
        console.log(res)
        setItems(res.data)
    }).catch (e => {
        console.log(e)
    })
}, [])

          const renderItem = () => {
                return items.map( item => (
                  <div>
                    <br />
                  <Card key = {`${item.id}`}>
                    <Card.Content>
                      <Card.Header>{ item.name }</Card.Header>
                      <br/>
                      <Card.Description>
                        { item.description }
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </div>
                ))
              }
  return (
     
    <>
    <div>Items</div>
    <div>{renderItem()}</div>
  
   
      </>
  ) 
  }
  export default Items;