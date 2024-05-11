import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios'

function Homepage() {
    const [projects,setProjects] = useState([]);

    useEffect(()=> {
        // const token=localStorage.getItem('token')
        axios.get("http://localhost:8000/projects/")
      .then(response => {
        console.log(response.data);
        setProjects(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });

    },[]);

    return (
        <div>
            <h1>TO-DO-APP</h1>
            <div>
                {projects.map((currentprojects)=> {
                    const {id,name} = currentprojects;
                    return (
                        <div key={currentprojects.id}>
                            <h3>{name}</h3>
                            <Link to={`/viewproject/${id}`}><button>View</button></Link>
                        </div>
                    )
                })}
            </div>
            <br></br><br></br>
            <Link to={"/newproject/"}><button>New Project</button></Link>
        </div>
    )
}

export default Homepage;
