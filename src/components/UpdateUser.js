import {React, useEffect, useState} from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const UpdateUser = () => {

    let history = useHistory();
    const {id} = useParams();

    const [user,setUser] = useState({
        name: "",
        salary: "",
        email: "",
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
    
        await axios.put(`http://localhost:8080/api/employees/${id}`, user);
        history.push("/");
    }


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
            <form onSubmit={(e)=> onClickHandler(e)}>
            <input type="text" 
                placeholder="name"
                name="name"
                value={user.name}
                onChange={(e) => onChangeHandler(e)}></input>
                <br/>
                <input type="text" 
                placeholder="email"
                name="email"
                value={user.email}
                onChange={(e) => onChangeHandler(e)}></input>
                <br/>
                <input type="text" 
                placeholder="salary"
                name="salary"
                value={user.salary}
                onChange={(e) => onChangeHandler(e)}></input>
                <br/>
                <input type="date" 
                placeholder="date"
                name="dateOfJoining"
                value={user.dateOfJoining}
                onChange={(e) => onChangeHandler(e)}></input>
                <br/>
                <input type="text" 
                placeholder="designation"
                name="designation"
                value={user.designation}
                onChange={(e) => onChangeHandler(e)}></input>
                <br/>
                <input type="text" 
                placeholder="Is Permanent"
                name="isPermanent"
                value={user.isPermanent}
                onChange={(e) => onChangeHandler(e)}></input>
                <br/>
                <button>Update</button>
            </form>
        </div>
    );
}
export default UpdateUser;