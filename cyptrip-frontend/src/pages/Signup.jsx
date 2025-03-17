import React from 'react';

function Signup() {
  return (
    <div className="page signup-page">
      <h1>Create Account</h1>
      <form className="signup-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Your name" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Your email" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Create password" />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
