import {React, useEffect, useState} from 'react';
import axios from 'axios';
import { NavLink, useParams } from 'react-router-dom';

const ViewUser = () => {

    const {id} = useParams();

    const [user,setUser] = useState({
        id: "",
        name: "",
        email: "",
        salary: "",
        dateOfJoining: "",
        designation: "",
        isPermanent: ""
    });

    useEffect(()=>{
        loadUser();
        console.log("inside use effect");
    },[]);

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/api/employees/${id}`);
        setUser(result.data);
        console.log(result.data);
    }
    return(
        <div>
            <h1>Employee Detail</h1>
            <div>Id : {user.id}</div>
            <div>Name : {user.name}</div>
            <div>Email : {user.email}</div>
            <div>Salary : {user.salary}</div>
            <div>Date of Joining: {user.dateOfJoining}</div>
            <div>Designation : {user.designation}</div>
            <div>Is Permanent : {user.isPermanent}</div>
            <br/>
            <NavLink to="/">Back</NavLink>
        </div>
    );
}
export default ViewUser;