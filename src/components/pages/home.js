import React, {useState, useEffect} from 'react';
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Home=()=>{
    const [users, setUser]=useState([])
    useEffect(()=>{
        loadUsers()
    },[])

    const loadUsers=async ()=>{
        const result=await axios.get("http://localhost:4000/users")
        setUser(result.data.reverse())
    }
    
        return(
            <div className="container">
                <div className="p-3">
                    <h2>Home</h2>
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th> 
                            </tr>
                        </thead>
                        <tbody>
                        {
                            users.map((user,index)=>(
                                <tr>
                                    <td scope="row">{index+1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button className="btn btn-primary mr-2"><FontAwesomeIcon icon="eye"/></button>
                                        <button className="btn btn-outline-primary mr-2"><FontAwesomeIcon icon="edit"/></button>
                                        <button className="btn btn-outline-danger"><FontAwesomeIcon icon="trash"/></button>

                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    
}

export default Home;