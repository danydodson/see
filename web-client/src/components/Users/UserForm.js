import React, { useState } from 'react'

const AddUserForm = ({ addUser }) => {
  const initialFormState = {
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: ''
  }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const { firstname, lastname, email, username, password } = user
    if (!firstname || !lastname || !email || !username || !password) return

    addUser(user)
    setUser(initialFormState)
  }

  return (
    <form onSubmit={handleSubmit} className='add-user-form'>
      <label>First Name</label>
      <input
        type='text'
        name='firstname'
        value={user.firstname}
        onChange={handleInputChange}
      />

      <label>Last Name</label>
      <input
        type='text'
        name='lastname'
        value={user.lastname}
        onChange={handleInputChange}
      />

      <label>Email</label>
      <input
        type='email'
        name='email'
        value={user.email}
        onChange={handleInputChange}
      />

      <label>Username</label>
      <input
        type='username'
        name='username'
        value={user.username}
        onChange={handleInputChange}
      />

      <label>Password</label>
      <input
        type='password'
        name='password'
        value={user.password}
        onChange={handleInputChange}
      />

      <button>Add new user</button>
    </form>
  )
}

export default AddUserForm