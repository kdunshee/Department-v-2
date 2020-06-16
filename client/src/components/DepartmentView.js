import React , {useState, useEffect} from 'react'
import Axios from 'axios';
import { Segment, Header, Button} from 'semantic-ui-react';

export default function DepartmentView(props) {
    const [Department, setDepartment] = useState({});


    
    useEffect( () => {
        Axios.get (`/api/departments/${props.match.params.id}`).
        then(res =>{
            console.log(res)
            setDepartment(res.data);

        }).catch((e) => {
            console.log(e)
        })

    },[])

    return (
        <div>
            <Segment>
                <Header as='h1'>{Department.name}</Header>
                <Header as ='h3'>{Department.description}</Header>
            
                <br />
                <br />
                <Button color ="purple"
                onClick = {props.history.goBack}> Back</Button>
            </Segment>
        </div>
    )
}