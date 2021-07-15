import React, { useState } from 'react'

const ConfirmationMessage = ({user}) => (
  <div className="alert alert-success">
    <h1>Success</h1>
    <p>You're logged in as user <em>{user.username}</em></p>
  </div>
)

export default function Login() {
  const [user, setLoggedIn] = useState(null)
  const [errorMsg, setError] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const username = form.username.value
    const password = form.password.value
    fetch(`/api/v1/login`, {
      method: 'post',
      credentials: 'include',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      if (response.ok) return response.json()
      throw response.json()
    })
    .then(data => {
      setLoggedIn(data.user)
    })
    .catch(errors => {
      console.log('error', errors)
      setError("Login was unsuccessful")
    })

  }

  return (
    <section className="container">
      <div className="row">
        <div className="col-xs-12 col-md-8 col-lg-6 mx-auto py-5">
          {user ? <ConfirmationMessage user={user} /> : (
            <>
              <h2>Please log in</h2>
              <form role="form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input id="username" name="username" tabIndex="1" type="slug"
                    className="form-control" placeholder="username" required />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input id="password" name="password" tabIndex="2" type="password"
                    className="form-control" placeholder="************" required />
                </div>
                <div className="clearfix">
                  <button tabIndex="3" className="btn btn-primary btn-lg" type="submit">
                    Log in
                  </button>
                </div>
                {errorMsg &&
                  <div className="form-group py-4">
                    <p className="text-danger">
                      {errorMsg}
                    </p>
                  </div>
                }
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  )
}