import { withFormik } from 'formik'
import * as Yup from 'yup'

const validate = withFormik({
  validationSchema: Yup.object().shape({
    firstname: Yup.string().min(2, "C'mon, your First name is longer than that.").max(30, 'First name must contain fewer then 30 characters.').required('First name is required.'),

    lastname: Yup.string().min(2, "C'mon, your lastname is longer than that.").max(30, 'Last name must contain fewer then 30 characters.').required('Last name is required.'),

    email: Yup.string().email('Invalid email address.').required('Email is required.'),

    username: Yup.string().min(4, "C'mon, you can think of a username longer than that.").max(20, 'Username must contain fewer then 20 characters.').required('Username required.'),

    password: Yup.string().min(6, "Can you make you'r password longer please.").max(20, 'Password must contain fewer then 20 characters.').required('Password required.'),

    password2: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match.')
      .required('Verify password.')
  }),

  mapPropsToValues: ({ values }) => ({
    ...values
  }),

  handleSubmit: (values, { setSubmitting }) => {
    const payload = { ...values }
    setTimeout(() => {
      alert(JSON.stringify(payload, null, 2))
      setSubmitting(false)
    }, 1000)
  },

  displayName: 'SignUpForm'
})

export default validate
