import React from 'react'

const user = () => {
  return (
    <>
      <form action="/newuser" method="POST">
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required />
    </div>
    <div>
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required />
    </div>
    <div>
      <label for="password">Password</label>
      <input type="password" id="password" name="password" required />
    </div>
    <button type="submit">Register</button>
    </form>
    <a href="/login">Login</a>
    </>
  )
}

export default user