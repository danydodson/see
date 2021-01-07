import { withFormik } from 'formik'
import * as Yup from 'yup'

const validator = withFormik({

  validationSchema: Yup.object().shape({

    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),

    topics: Yup.array()
      .min(3, 'Pick at least 3 tags')
      .of(
        Yup.object().shape({
          label: Yup.string().required(),
          value: Yup.string().required(),
        })
      ),
  }),

  mapPropsToValues: props => ({
    email: '',
    topics: [],
  }),

  handleSubmit: (values, { setSubmitting }) => {
    const payload = {
      ...values,
      topics: values.topics.map(t => t.value),
    }
    setTimeout(() => {
      alert(JSON.stringify(payload, null, 2))
      setSubmitting(false)
    }, 1000)
  },

  displayName: 'MyForm',

})

export default validator