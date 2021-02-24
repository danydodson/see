import { Formik, Form } from 'formik'
import TextInput from '../TextInput'
import { useHistory } from "react-router-dom"
import useStyles from './styles'
import axios from 'axios'
import './style.css'
import { createHook, Provider } from "overmind-react"

import {
  initialValues,
  validationSchema,
  handleSubmit,
} from './Validation'

const useApp = createHook()

export default function SignInForm(props) {
  const classes = useStyles()
  let history = useHistory()

  const { state, actions } = useApp()

  const handleSubmit = async ({ email, password }) => {
    const payload = { email: email, password: password }
    actions.user.signin(payload)

    // const response = await axios.post('/users/signin', payload)
    // history.push('/')
  }

  return (

    <div className={classes.root}>
      <h1>Sign in</h1>

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
                id='password'
                type='password'
                label='Password'
                placeholder='Password'
                value={values.password}
                error={errors.password && touched.password}
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
