import { Formik, Form, Field } from 'formik'
import { useHistory } from "react-router-dom"
import { initialValues } from './Validation'
import { validationSchema } from './Validation'
import { handleSubmit } from './Validation'
import axios from 'axios'
import { useStore } from 'store'
import './style.css'

export default function SignUpForm(props) {

  const { state: { redirect }, actions } = useStore()

  let history = useHistory()

  const handleSubmit = async ({
    email,
    username,
    password,
    confirm
  }) => {

    const payload = {
      email: email,
      username: username,
      password: password
    }

    const response = await axios.post('/users', payload)

    history.push('/login')
  }
  return (

    <div className='app'>
      <h1>Create your account</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {
          ({
            errors,
            touched,
            isSubmitting
          }) => (

            <Form>

              <Field
                name='email'
                type='email'
                placeholder='Email'
              />
              {errors.email && touched.email ? (<div>{errors.email}</div>) : null}

              <Field
                name='username'
                type='text'
                placeholder='Username'
              />
              {errors.username && touched.username ? (<div>{errors.username}</div>) : null}

              <Field
                name='password'
                type='password'
                placeholder='Password'
              />
              {errors.password && touched.password ? (<div>{errors.password}</div>) : null}

              <Field
                name='confirm'
                type='password'
                placeholder='Confirm'
              />
              {errors.confirm && touched.confirm ? (<div>{errors.confirm}</div>) : null}

              <button
                type='submit'
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
