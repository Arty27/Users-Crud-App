import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const AddUser=()=>{
    let history=useHistory();
    const [user,setUser]=useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    })

    const onIputChange=e=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const onSubmit=async e=>{
        e.preventDefault();
        await axios.post("http://localhost:4000/users",user)
        history.push("/")


    }

    return(
        <div className="container">
            <div className="w-75 shadow p-5  mx-auto m-2">
                <h2 className="text-center mb-4">Add User</h2>
                <form onSubmit={e=>onSubmit(e)}>
                    <div className="form-group">
                        <input className="form-control" type="text" name="name" placeholder="Enter Your Name" value={user.name} onChange={e=>onIputChange(e)}/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" name="username" placeholder="Enter Your Username" value={user.username} onChange={e=>onIputChange(e)}/>
                    </div>
                    <div className="form-group">
                        <input className="form-control " type="email" name="email" placeholder="Enter Your E-mail" value={user.email} onChange={e=>onIputChange(e)}/>
                    </div>
                    <div className="form-group">
                        <input className="form-control " type="text" name="phone" placeholder="Enter Your Phone Number" value={user.phone} onChange={e=>onIputChange(e)}/> 
                    </div>
                    <div className="form-group">
                        <input className="form-control " type="text" name="website" placeholder="Enter Your Website" value={user.website} onChange={e=>onIputChange(e)}/> 
                    </div>
                    <button className="btn btn-primary btn-block">Add User</button>
                </form>
            </div>
        </div>
    )
    
}

export default AddUser;