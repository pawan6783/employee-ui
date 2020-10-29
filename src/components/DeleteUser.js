import {React, useEffect, useState} from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const DeleteUser = () => {

    let history = useHistory();
    const {id} = useParams();

    useEffect(()=>{
        loadUser();
        console.log("inside use effect");
    },[]);

    const loadUser = async () => {
        await axios.delete(`http://localhost:8080/api/employees/${id}`);
        history.push("/");
    }
    return(
        <div></div>
    );
  
}
export default DeleteUser;