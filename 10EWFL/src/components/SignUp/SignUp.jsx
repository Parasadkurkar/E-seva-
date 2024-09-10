import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    phoneNumber: '',
    email: '',
    fullName: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="bg-white shadow-lg rounded p-4 w-100" style={{ maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Welcome to Elocate</h2>
        <p className="text-center text-muted mb-4">Please enter your details to register</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="username"
              placeholder="User Name"
              value={formData.username}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type={formData.showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type={formData.showPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-check mb-3">
            <input
              type="checkbox"
              name="showPassword"
              checked={formData.showPassword}
              onChange={() => setFormData({ ...formData, showPassword: !formData.showPassword })}
              className="form-check-input"
            />
            <label className="form-check-label text-muted">
              Show Password
            </label>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>
          <p className="text-center text-muted mt-3">
            Already have an account? <Link to="/SignIn" className="text-primary">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
