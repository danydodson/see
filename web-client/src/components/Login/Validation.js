import axios from 'axios'
import * as Yup from 'yup'

export const initialValues = { email: '', username: '', password: '' }

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email.')
    .required('Email required.'),

  // username: Yup.string()
  //   .required('Username required.'),

  password: Yup.string()
    .required('Password required.'),
})

