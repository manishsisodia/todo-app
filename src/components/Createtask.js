import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

function Createtask() {
    const [descripton, setDescription] = useState("");
    const [status,setStatus] = useState("");
    const [statusError,setStatusError] = useState("");
    const [descriptionError,setDescriptionError] = useState("");
    const {project_id}=useParams();
    const navigate = useNavigate();

    const getFormData = async (e) => {
        e.preventDefault();

        // Clear previous error messages
        setDescriptionError("");
        setStatusError("");
        // Validate form fields
        let hasErrors = false;

        if (!descripton) {
            setDescriptionError("Please enter description");
            hasErrors = true;
        }

        if (!status) {
            setStatusError("Please enter status");
            hasErrors = true;
        }

        if (hasErrors) {
            return;
        }

        try {
            const response = await axios.post(`http://localhost:8000/tasks/${project_id}/`, {
                project_id:project_id,
                descripton:descripton,
                status:status
            });
            alert("Created Successfully")
            // Extract the token from the response data
            // const token = response.data.access;

            // navigate("/");

        } catch (error) {
            console.error("failed", error);
            alert("Something went wrong");
        }
    }

    return (
        <div className="App">
            <h1>Create-Task</h1>
            <form onSubmit={getFormData}>
                <input type="text" placeholder="description" value={descripton} onChange={(e) => setDescription(e.target.value)} />
                {descriptionError && <span className="error">{descriptionError}</span>}
                <br /><br />
                <div>
                    <select value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="">Select</option>
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                    </select>
                    {statusError && <span className="error">{statusError}</span>}
                </div>
                <br></br>
                
                <button type='submit'>Create</button>
            </form>
        </div>
    );
}

export default Createtask;
