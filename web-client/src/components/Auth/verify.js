import { BrowserRouter as Router } from 'react-router-dom'
import { post } from './web'

export const initialValues = {
  username: '',
  password: ''
}

export const validate = ({ username, password }) => {
  const errors = {}

  if (!username) {
    errors.username = 'Required'
  }
  if (!password) {
    errors.password = 'Required'
  }

  return errors
}

export const onSubmit = async ({ values, setMessage }) => {
  const response = await post('/api/auth/login', { values })

  if (typeof response !== 'string') {
    await Router.push('/')
  } else {
    setMessage(response.startsWith('401') ? 'Incorrect username/password' : response)
  }
}
