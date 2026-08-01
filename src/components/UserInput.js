import React, { useState } from 'react';

const UserInput = ({ addUser }) => {
    // State variables for form inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');

    // Form submission handler
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validation check
        if (!name || !email || !title) {
            alert('Please fill out all fields.');
            return;
        }

        // Pass the new user data to the parent component (App.js)
        addUser({ name, email, title });

        // Clear input fields after submission
        setName('');
        setEmail('');
        setTitle('');
    };

    return (
        <div style={formContainerStyle}>
            <h2>Create New User</h2>
            <form onSubmit={handleSubmit} style={formStyle}>
                <input 
                    type="text" 
                    placeholder="Enter Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    style={inputStyle}
                />
                <input 
                    type="email" 
                    placeholder="Enter Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    style={inputStyle}
                />
                <input 
                    type="text" 
                    placeholder="Enter Title/Role" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    style={inputStyle}
                />
                <button type="submit" style={submitBtnStyle}>Add Contact</button>
            </form>
        </div>
    );
};

// Inline CSS for the User Input Form
const formContainerStyle = {
    marginBottom: '40px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9'
};

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
};

const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc'
};

const submitBtnStyle = {
    padding: '12px',
    backgroundColor: '#27ae60',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold'
};

export default UserInput;