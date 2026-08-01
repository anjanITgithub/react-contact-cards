import React, { useState } from 'react';
import UserInput from './components/UserInput';
import UserList from './components/UserList';

const App = () => {
    // Main state variable to store the list of users
    const [users, setUsers] = useState([]);

    // Function to add a new user to the state array
    const handleAddUser = (newUser) => {
        setUsers([...users, newUser]);
    };

    return (
        <div style={appContainerStyle}>
            <h1 style={headerStyle}>React SPA Contact Manager</h1>
            
            {/* Passing the handleAddUser function as a prop */}
            <UserInput addUser={handleAddUser} />
            
            {/* Passing the users array as a prop to render the cards */}
            <UserList users={users} />
        </div>
    );
};

// Inline CSS for the Main App Container
const appContainerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333'
};

const headerStyle = {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#2c3e50'
};

export default App;