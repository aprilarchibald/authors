import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'



const AuthorTable = (props) => {
    // console.log(props)
    const { removeFromDom } = props;

    const deleteAuthor = (id) => {
        axios.delete('http://localhost:8000/api/authors/' + id)
            .then(res => {
                removeFromDom(id)
            })
            .catch(err => console.error(err));
    }
    return (
        <div>
            <table>
                <thead>
                    <th>Author</th>
                    <th>Actions Available</th>
                </thead>
                <tbody>
                    {props.author.map((author) =>
                    
                    <tr key={author._id}>
                        <td>{author.name}</td>
                        <td><button><Link to = {`/edit/${author._id}`}>Edit</Link></button>  |  <button onClick={(e)=>{deleteAuthor(author._id)}}>Delete</button></td>
                    </tr>

                    )}
                </tbody>
            </table>
        </div>
    )
}

export default AuthorTable;