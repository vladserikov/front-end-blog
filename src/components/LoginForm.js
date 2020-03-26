import React from 'react';
import PropTypes from 'prop-types';

const LoginForm = ({ handleInput, loginUser, username, password }) => {
  return (
    <>
      <h2>log in to application</h2>
      <form onSubmit={loginUser}>
        <div>
          username
          <input
            type='text'
            name='username'
            onChange={handleInput}
            value={username}
          />
        </div>
        <div>
          password
          <input
            type='password'
            name='password'
            onChange={handleInput}
            value={password}
          />
        </div>
        <button type='submit'>login</button>
      </form>
    </>
  );
};

LoginForm.propTypes = {
  handleInput: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

export default LoginForm;
