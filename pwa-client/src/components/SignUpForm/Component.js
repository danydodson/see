import React, { useState } from 'react'
import TextField from '../TextField'

import useStyles from './styles'

function SignupForm({ addUser }) {
  const classes = useStyles()

  const initialFormState = {
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: '',
  }

  const [user, setUser] = useState(initialFormState)

  const handleInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log('Your favorite flavor is: ' + this.state.value)
    const { firstname, lastname, email, username, password, count } = user
    if (!firstname || !lastname || !email || !username || !password, !count) return
    addUser(user)
    setUser(initialFormState)

  }


  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <label>First Name</label>
      <TextField
        type='text'
        name='firstname'
        value={user.firstname}
        onChange={handleInputChange}
      />


      <label>Last Name</label>
      <TextField
        type='text'
        name='lastname'
        value={user.lastname}
        onChange={handleInputChange}
      />

      <label>Email</label>
      <TextField
        type='email'
        name='email'
        value={user.email}
        onChange={handleInputChange}
      />

      <label>Username</label>
      <TextField
        type='username'
        name='username'
        value={user.username}
        onChange={handleInputChange}
      />

      <label>Password</label>
      <TextField
        type='password'
        name='password'
        value={user.password}
        onChange={handleInputChange}
      />



      <button>Add new user</button>
    </form>
  )
}

export default SignupForm