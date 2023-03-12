import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/login', { username, password })
      .then((response) => {
        // Save the JWT token to local storage
        localStorage.setItem('token', response.data.token);
        // Redirect to the dashboard or other protected route
        
        const { from } = { from: { pathname: "/dashboard" } };
                props.history.push(from);
              })
              .catch((error) => {
                console.error(error);
              });
          };
        
          return (
            <form onSubmit={handleSubmit}>
              <label>
                Username:
                <input type="text" value={username} onChange={handleUsernameChange} />
              </label>
              <label>
                Password:
                <input type="password" value={password} onChange={handlePasswordChange} />
              </label>
              <button type="submit">Log in</button>
            </form>
          );
        }
        
        export default LoginForm;