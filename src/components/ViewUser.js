import {React, useEffect, useState} from 'react';
import axios from 'axios';
import { NavLink, useParams } from 'react-router-dom';
import '../stylesheets/ViewUser.css';
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
        <div className="viewUser_div">
            <h3>Employee Detail</h3>
            <div className="viewUser_info">
            <div className="viewUser_div">Id : {user.id}</div>
            <div className="viewUser_div">Name : {user.name}</div>
            <div className="viewUser_div">Email : {user.email}</div>
            <div className="viewUser_div">Salary : {user.salary}</div>
            <div className="viewUser_div">Date of Joining : {user.dateOfJoining}</div>
            <div className="viewUser_div">Designation : {user.designation}</div>
            <div className="viewUser_div">Is Permanent : {user.isPermanent}</div>
            </div>
            
            <br/>
            <NavLink className="viewUser_button" to="/">Back</NavLink>
        </div>
    );
}
export default ViewUser;