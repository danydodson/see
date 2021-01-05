import React, { useState, useEffect } from 'react'
import AddUserForm from './UserForm'

import axios from 'axios'


const AddUser = () => {

  const [users, setUsers] = useState([])

  useEffect(() => { getUsers() }, [])

  const getUsers = async () => {
    try {
      let result = await axios.get('/user/s')
      setUsers(result.data.users)
    } catch (error) {
      console.log(error)
    }
  }

  const addUser = async (user) => {
    try {
      let result = await axios.post('/user/signup', user)
      setUsers([...users, result.data.user])
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='siteWrapper'>
      <div className='flex-row'>
        <div className='flex-large'>
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} users={users} />
        </div>
      </div>
    </div>
  )
}

export default AddUser
