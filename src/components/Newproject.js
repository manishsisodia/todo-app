import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Newproject() {
    const [name, setName] = useState("");
    const [nameError,setNameError] = useState("");
    const navigate = useNavigate();

    const getFormData = async (e) => {
        e.preventDefault();

        // Clear previous error messages
        setNameError("");
        // Validate form fields
        let hasErrors = false;

        if (!name) {
            setNameError("Please enter project name");
            hasErrors = true;
        }

        if (hasErrors) {
            return;
        }

        try {
            const response = await axios.post("http://localhost:8000/projects/", {
                name:name
            });
            // Extract the token from the response data
            const token = response.data.access;

            navigate("/");

        } catch (error) {
            console.error("failed", error);
            alert("Something went wrong");
        }
    }

    return (
        <div className="App">
            <h1>Create-Project</h1>
            <form onSubmit={getFormData}>
                <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                {nameError && <span className="error">{nameError}</span>}
                <br /><br />
                <button type='submit'>Create</button>
            </form>
        </div>
    );
}

export default Newproject;
