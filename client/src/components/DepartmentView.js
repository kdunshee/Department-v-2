import React , {useState, useEffect} from 'react'
import Axios from 'axios';
import { Segment, Header, Button, Form} from 'semantic-ui-react';

export default function DepartmentView(props) {
    const [department, setDepartment] = useState({});
    const [item, setItem] = useState([])

    useEffect( () => {
        Axios.get (`/api/departments/${props.match.params.id}`).
        then(res =>{
            console.log(res)
            setDepartment(res.data);
            setItem(res.data.items)

        }).catch((e) => {
            console.log(e)
        })

    },[])

    async function handleSubmit() {
        console.log("submit");
        const res = await Axios.post(`/api/departments/${department.id}/item`, {
          description: item,
         
        });
        console.log(res);
        setItem([res.data, ...item]);
        setItem("");
      }

    return (
        <div>
            <Segment>
                <Header as='h1'>{department.name}</Header>
                <Header as ='h3'>{department.description}</Header>
                
                <br />
                <br />

                <Form onSubmit={handleSubmit}>
          <Form.Input
            placeholder={"enter item"}
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <Form.Button>add</Form.Button>
        </Form>
                <Button color ="blue"
                onClick = {props.history.goBack}> Back</Button>
            </Segment>
        </div>
    )
}