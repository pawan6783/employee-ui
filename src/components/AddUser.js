import {React, useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import '../stylesheets/AddUser.css';

const api_url = "http://localhost:8080/api/employees/0";


const AddUser = () => {

    let history = useHistory();
    const [user,setUser] = useState({
        name: "",
        email: "",
        salary: "",
        dateOfJoining: "",
        designation: "",
        isPermanent: ""
    });

    const onChangeHandler = event => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    } 
    
    const onClickHandler = async event => {
        console.log("Inside onclickhandler");
        event.preventDefault();
        console.log(JSON.stringify(user));
        await axios.post(api_url,user);
        history.push("/");
    }

    return(
        <div className="addUser">
            <form onSubmit={(e)=> onClickHandler(e)}>
            <input className="addUser_input"
                type="text" 
                placeholder="name"
                name="name"
                value={user.name}
                onChange={(e) => onChangeHandler(e)}></input>
                <br/>
                <input className="addUser_input"
                type="text" 
                placeholder="email"
                name="email"
                value={user.email}
                onChange={(e) => onChangeHandler(e)}></input>
                <br/>
                <input className="addUser_input"
                type="text" 
                placeholder="salary"
                name="salary"
                value={user.salary}
                onChange={(e) => onChangeHandler(e)}></input>
                <br/>
                <input className="addUser_input"
                type="date" 
                placeholder="date"
                name="dateOfJoining"
                value={user.dateOfJoining}
                onChange={(e) => onChangeHandler(e)}></input>
                <br/>
                <input className="addUser_input"
                type="text" 
                placeholder="designation"
                name="designation"
                value={user.designation}
                onChange={(e) => onChangeHandler(e)}></input>
                <br/>
                <input className="addUser_input"
                type="text" 
                placeholder="Is Permanent"
                name="isPermanent"
                value={user.isPermanent}
                onChange={(e) => onChangeHandler(e)}></input>
                <br/>
              
                <button className="addUser_button">Add User</button>
            </form>
        </div>
    );
}
export default AddUser;