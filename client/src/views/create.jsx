import React, {useState} from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

const Create = (props) => {
    const [name, setName] =useState("")
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/authors', {
            name
        })
            .then(res=>{
                console.log(res);
                navigate("/")
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    const navigateAway = (e)=>{
        e.preventDefault()
        navigate("/")
    }

    return (
        <div>
            <Link to="/">Home</Link>
            <p style={{color: 'rebeccapurple'}}>Add a new author:</p>
            <form onSubmit={handleSubmit} style={{height: 300, width: 400, backgroundColor: 'blanchedalmond'}}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
                Name:<br/>
                <input onChange={(e)=>setName(e.target.value)} value={name} /><br/>
                <button onClick ={navigateAway}>Cancel</button>
                <button>submit</button>
            </form>
        </div>
    )
}

export default Create;