import React, { Component } from 'react'
export default class Login extends Component {
  render() {
    return (
      <>
    <form action="/login" method="POST">
        <h3>Sign In</h3>
        <div className="mb-3">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="mb-3">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="d-grid">
          <button type="submit">Login</button>
        </div>
      </form>
      <a href="/newuser">Register</a>
      </>
    )
  }
}


