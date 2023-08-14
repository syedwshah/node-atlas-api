import React, { useState } from 'react';

// Handle successful registration or login
//TODO: move this to another folder
const handleJWT = async (data: any) => {
  const token = data.token;

  console.log(token)

  // Store the token in local storage
  localStorage.setItem('token', token);

  //TODO: Save the token in a UserContext that stores user data

  // Perform any necessary redirection or actions
};



const RegisterForm = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        handleJWT(data)
        // Redirect or perform other actions after successful registration
      } else {
        console.error('Error registering user');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div>
      <h2>Register Form</h2>
      <form onSubmit={handleSubmit}>
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
    </div>
  );
};

export default RegisterForm;
