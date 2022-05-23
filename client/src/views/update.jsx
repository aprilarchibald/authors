import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'

const Update = (props) => {
    const [name, setName] = useState("");
    
    const navigate = useNavigate();
    const {id} = useParams();
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res=>{
                console.log(res.data)
                setName(res.data.name);
            })
            .catch(err => console.error(err));
    },[id]);

    const updateAuthor = e => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/${id}`,{
            name
        })
            .then(res=>{
                console.log(res.data)
                navigate("/")
            })
            .catch(err=>console.log(err))
    }

    const navigateAway = (e)=>{
        e.preventDefault()
        navigate("/")
    }

return (
    <div>
        <form onSubmit={updateAuthor} style={{height: 300, width: 400, backgroundColor: 'blanchedalmond'}}>
            Name:<br/>
            <input onChange={(e)=>setName(e.target.value)} value={name} /><br/>
            <button onClick ={navigateAway}>Cancel</button>
            <button>submit</button>
        </form>
    </div>
)
}

export default Update