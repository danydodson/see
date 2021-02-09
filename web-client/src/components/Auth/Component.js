import { Formik, Form } from 'formik'
import TextInput from '../TextInput'
import { useHistory } from "react-router-dom"
import useStyles from './styles'
import axios from 'axios'
import './style.css'

import {
  initialValues,
  validationSchema,
  handleSubmit,
} from './Validation'

export default function SignUpForm(props) {
  const classes = useStyles()
  let history = useHistory()

  // const { state, actions } = useStore()

  const handleSubmit = async ({ email, username, password }) => {
    const payload = {
      email: email,
      username: username,
      password: password
    }
    const response = await axios.post('/signup', payload)
    history.push('/login')
  }


  return (

    <div className={classes.root}>
      <h1>Create your account</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {
          ({
            values,
            errors,
            touched,
            dirty,
            handleChange,
            handleBlur,
            handleReset,
            isSubmitting,
            setFieldValue
          }) => (

            <Form className={classes.root}>

              <TextInput
                id='email'
                type='text'
                label='Email'
                placeholder='Email'
                value={values.email}
                error={errors.email && touched.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />


              <TextInput
                id='username'
                type='text'
                label='Username'
                placeholder='Username'
                value={values.username}
                error={errors.username && touched.username}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <TextInput
                id='password'
                type='password'
                label='Password'
                placeholder='Password'
                value={values.password}
                error={errors.password && touched.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <TextInput
                id='confirm'
                type='password'
                label='Confirm'
                placeholder='Confirm'
                value={values.confirm}
                error={errors.confirm && touched.confirm}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <button
                type='reset'
                className='outline'
                onClick={handleReset}
                disabled={!dirty || isSubmitting}
              >
                {'Reset'}
              </button>

              <button
                type='submit'
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Loading' : 'Submit'}
              </button>

            </Form>
          )
        }

      </Formik >
    </div>
  )
}
