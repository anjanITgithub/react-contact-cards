import React, { useState } from 'react';

const ContactCard = ({ name, email, title }) => {
    // State variable to show liked/unliked status handled by useState Hook
    const [isLiked, setIsLiked] = useState(false);

    // Toggle function for the like button
    const toggleLike = () => {
        setIsLiked(!isLiked);
    };

    return (
        <div style={cardStyle}>
            <h3>{name}</h3>
            <p><strong>Title:</strong> {title}</p>
            <p><strong>Email:</strong> {email}</p>
            
            <div style={actionStyle}>
                <span style={{ fontWeight: 'bold', color: isLiked ? '#e74c3c' : '#7f8c8d' }}>
                    {isLiked ? '❤️ Liked' : '🤍 Not Liked'}
                </span>
                <button onClick={toggleLike} style={btnStyle}>
                    {isLiked ? 'Unlike' : 'Like'}
                </button>
            </div>
        </div>
    );
};

// Inline CSS for the Contact Card
const cardStyle = {
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    width: '250px'
};

const actionStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '15px'
};

const btnStyle = {
    padding: '8px 15px',
    backgroundColor: '#2c3e50',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold'
};

export default ContactCard;