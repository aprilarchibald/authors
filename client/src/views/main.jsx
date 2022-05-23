import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import AuthorTable from '../components/AuthorTable'

    const Main = (props) => {
        const [author, setAuthor] = useState([]);
        
        useEffect(()=>{
            axios.get('http://localhost:8000/api/authors')
                .then(res=>{
                    console.log(res.data)
                    setAuthor(res.data);
                })
                .catch(err => console.error(err));
        },[]);

        const removeFromDom = authorId => {
            setAuthor(author.filter(author => author._id !== authorId));
        }
    

    return (
        <div>
            <Link to= "/new">Add an author</Link>
            <p style= {{color: 'rebeccapurple'}}>We have quotes by:</p>
            <AuthorTable author ={author} removeFromDom ={removeFromDom}/>
        </div>
    )
}
export default Main;