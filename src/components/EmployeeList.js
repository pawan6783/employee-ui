import {React, useState, useEffect} from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const api_url = "http://localhost:8080/api/employees";

const EmployeeList = () => {

    const [users,setUsers] = useState([]);

    useEffect(()=>{
        loadUsers();
        console.log("inside use effect");
    },[]);

    const loadUsers = async () => {
        const result = await axios.get(api_url);
        setUsers(result.data);
        console.log(result);
    }

    return(
        <div>
            <div>
                <NavLink  to="/add-user">Add User</NavLink>
            </div>
            <h2>List of Employees</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                {
                     users.map((user,index) => (
                            <tr>
                                <td>{index+1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><NavLink to = {`/view-user/${user.id}`}>View</NavLink></td>
                                <td><NavLink to = {`/update-user/${user.id}`}>Edit</NavLink></td>
                                <td><NavLink to = {`/delete-user/${user.id}`}>Delete</NavLink></td>
                            </tr>
                        ))  
                    }
                </tbody>
            </table>

        </div>
    );
}
export default EmployeeList;