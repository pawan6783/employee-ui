import {React, useState, useEffect} from 'react';
import axios from 'axios';
import { NavLink, Link } from 'react-router-dom';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import { Button} from 'reactstrap';
import '../stylesheets/EmployeeList.css';

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

    const columns= [
        {
            Header: "ID",
            accessor: "id"
        },
        {
            Header: "Name",
            accessor: "name"
        },
        {
            Header: "Email",
            accessor: "email"
        },
        {
            Header: "View",
            Cell: props =>{
                return (
                    <Button className="button" tag={Link} to = {`/view-user/${props.original.id}`}>View</Button>
                )
            },
            filterable: false
        },
        {
            Header: "Edit",
            Cell: props =>{
                return (
                    <Button className="button" tag={Link} to = {`/update-user/${props.original.id}`}>Edit</Button>
                )
            },
            filterable: false
        },
        {
            Header: "Delete",
            Cell: props =>{
                return (
                    <Button className="button" tag={Link} to = {`/delete-user/${props.original.id}`}>Delete</Button>
                )
            },
            filterable: false
        }
    ];


    return(
        <div className="employeeList">
            <br/>
            <Button className="addButton" tag={Link} to = {`/add-user`}>Add User</Button>
            <br/>
            <ReactTable 
                data={users} 
                columns={columns}
                filterable 
            >
            </ReactTable>
        </div>
    );
}
export default EmployeeList;