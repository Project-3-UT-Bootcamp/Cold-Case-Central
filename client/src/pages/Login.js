import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });

  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState }
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main className=''>
      <div className='my-4 mx-2'>
          <h4 className='text-uppercase'>Login</h4>
          <div className=''>
            <form onSubmit={handleFormSubmit}>
              <label for="email" class="form-label">Email: </label>
              <input
                className='form-control mb-4'
                placeholder='Your email'
                name='email'
                type='email'
                id='email'
                value={formState.email}
                onChange={handleChange}
              />
              <label for="password" class="form-label">Password:</label>
              <input
                className='form-control'
                placeholder='******'
                name='password'
                type='password'
                id='password'
                value={formState.password}
                onChange={handleChange}
              />
              <div className="d-grid ga-2 d-md-flex justify-content-end pt-3">
                <button className='btn btn-dark btn-primary px-4' type='submit'>
                  Submit
                </button>
              </div>

            </form>
            {error && <div>Login failed</div>}
          </div>
        </div>
    </main>
  );
};

export default Login;
