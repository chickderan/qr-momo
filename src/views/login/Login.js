import React from 'react';
import { NavLink } from 'react-router-dom';
import PublicNavbar from '../../components/navbar/Public-Navbar';
import SigninForm from '../../components/signin/SigninForm';

const Login = () => (
  <div>
    <PublicNavbar />
    <div className="mt-4">
      <div className="text-center">
        <h2>
          <small className="text-normal">welcome to</small>
          <br />
          QR MOMO
        </h2>
      </div>
      <div className="text-center">
        <p>
          Have no account yet?
          <NavLink to="/register"> register </NavLink>
        </p>
      </div>
      <div className="container mt-4">
        <SigninForm />
      </div>
    </div>
  </div>
);

export default Login;
