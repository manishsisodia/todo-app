import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios'

function Tasks() {
    const [projects,setProjects] = useState([]);
    const {project_id}=useParams();
    console.log("project",project_id);

    useEffect(()=> {
        // const token=localStorage.getItem('token')
        axios.get(`http://localhost:8000/tasks/${project_id}/`)
      .then(response => {
        console.log(response.data);
        setProjects(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });

    },[]);

    if(!projects) {
        return <div><Link to={`/newtask/${project_id}`}><button>ADD</button></Link></div>
    }

    return (
        
        <div>
            <h1>Tasks</h1>
            <div>
                {projects.map((currentprojects)=> {
                    const {id,created_date,description,status,updating_date} = currentprojects;
                    return (
                        <div key={currentprojects.id}>
                            <h3>{created_date}</h3>
                            <h3>{description}</h3>
                            <h3>{status}</h3>
                            <h3>{updating_date}</h3>
                            {/* <Link to={`/viewproject/${id}`}><button>View</button></Link> */}
                        </div>
                    )
                })}
            </div>
            <br></br><br></br>
            <Link to={`/newtask/${project_id}`}><button>ADD</button></Link>
        </div>
    )
}

export default Tasks;
