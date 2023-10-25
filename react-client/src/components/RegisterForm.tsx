import React, { useState } from 'react';
import jwtDecode from 'jwt-decode';

const validateToken = (token: string) => {
  try {
    const decodedToken = jwtDecode(token);
    return decodedToken; // Return the decoded token if validation succeeds
  } catch (error) {
    console.error('Error validating token:', error);
    return null;
  }
};

const handleJWT = (t: string) => {
  const token = t.split(' ')[1]

  // TODO: Save the payload data and token in a UserContext that stores user data
  const payload = validateToken(token);

  if (payload) {
    // Store the token in local storage for the time being
    localStorage.setItem('token', token);

    // Redirect or perform other actions after successful token handling
    console.log('Token handled successfully');
  } else {
    console.error('Error validating token');
  }
};

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json(); // Parse the response JSON

      const token = data.token; // Get the token from the response JSON

      if (token) {
        handleJWT(token);
        // Redirect or perform other actions after successful registration
      } else {
        console.error('No token found in response');
      }
   
    } catch (error) {
      console.error('Error registering user: ', error);
    }
  };

  return (
    <div>
      <h2>Register Form</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <a href="/login">Login</a></p> {/* TODO: should be router not anchor */}
    </div>
  );
};

export default RegisterForm;
