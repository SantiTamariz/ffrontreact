import React, { useState } from 'react';
import './Login.css';

function Login({ handleLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      // Registration form submit
      const user = {
        name,
        surname,
        email,
        password,
      };
      console.log(user);
      // Perform the registration API call with the user data
      // Replace 'http://localhost:8080/users/register' with the actual registration endpoint
      fetch('http://localhost:8080/users/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the registration response
          console.log(data); // You can update this with your desired logic
          // After successful registration, you can automatically log in the user
          handleLogin(data.idUser);
        })
        .catch((error) => {
          console.error('Registration error:', error);
          // Handle registration error if needed
        });
    } else {
      // Login form submit
      const credentials = {
        email,
        password,
      };
      // Perform the login API call with the user credentials
      // Replace 'http://localhost:8080/users/login' with the actual login endpoint
      fetch('http://localhost:8080/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the login response
          console.log(data); // You can update this with your desired logic
          // After successful login, you can store the 'idUser' value and perform any necessary actions
          handleLogin(data.idUser);
        })
        .catch((error) => {
          console.error('Login error:', error);
          // Handle login error if needed
        });
    }
  };

  const handleToggleMode = () => {
    setIsRegistering((prev) => !prev);
  };

  return (
    <div className="modal-login" id="login-modal" tabIndex="-1" role="dialog" aria-labelledby="login-modal-label" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="login-modal-label">
              {isRegistering ? 'Register' : 'Login'}
            </h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleFormSubmit}>
              {isRegistering && (
                <div>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                      value={name}
                      onChange={handleNameChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="surname">Surname</label>
                    <input
                      type="text"
                      className="form-control"
                      id="surname"
                      placeholder="Enter your surname"
                      value={surname}
                      onChange={handleSurnameChange}
                      required
                    />
                  </div>
                </div>
              )}
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                {isRegistering ? 'Register' : 'Login'}
              </button>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-link" onClick={handleToggleMode}>
              {isRegistering ? 'Login instead' : 'Create an account'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
