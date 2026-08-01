import React from 'react';
import ContactCard from './ContactCard';

const UserList = ({ users }) => {
    return (
        <div>
            <h2>Contact Directory</h2>
            
            {/* Check if user list is empty */}
            {users.length === 0 ? (
                <p style={{ color: '#7f8c8d' }}>No contacts found. Please create a user above.</p>
            ) : (
                <div style={listContainerStyle}>
                    {/* Dynamically mapping through users array to create ContactCards */}
                    {users.map((user, index) => (
                        <ContactCard 
                            key={index} 
                            name={user.name} 
                            email={user.email} 
                            title={user.title} 
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

// Inline CSS for the User List Container
const listContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px'
};

export default UserList;