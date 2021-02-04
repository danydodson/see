import React from 'react';
import TextInput from '../TextInput/Component';
import validate from './validate';

import './style.css';
// import { FormikState } from '../../utils/formikState.js'

const SignUpForm = props => {
  const {
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
  } = props;

  return (
    <div className="app">
      <h1>Create your account</h1>

      {/* <form onSubmit={createUser}> */}
      <form onSubmit={handleSubmit}>
        {/* initialValues={initialValues} */}
        {/* validate={validate} */}
        {/* onSubmit={handleSubmit} */}

        <TextInput
          id="firstname"
          type="text"
          label="First Name"
          placeholder="First Name"
          error={touched.firstname && errors.firstname}
          value={values.firstname}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <TextInput
          id="lastname"
          type="text"
          label="Last Name"
          placeholder="Last Name"
          error={touched.lastname && errors.lastname}
          value={values.lastname}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <TextInput
          id="email"
          type="email"
          label="Email"
          placeholder="Email"
          error={touched.email && errors.email}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <TextInput
          id="username"
          type="text"
          label="Username"
          placeholder="Username"
          error={touched.username && errors.username}
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <TextInput
          id="password"
          type="password"
          label="Password"
          placeholder="Password"
          error={touched.password && errors.password}
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <TextInput
          id="password2"
          type="password"
          label="Verify Password"
          placeholder="Verify password"
          error={touched.password2 && errors.password2}
          value={values.password2}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <button
          type="button"
          className="outline"
          onClick={handleReset}
          disabled={!dirty || isSubmitting}
        >
          Reset
        </button>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Loading' : 'Submit'}
        </button>

        {/* <FormikState {...props} /> */}
      </form>
    </div>
  );
};

const SignUpCtrl = validate(SignUpForm);

export default SignUpCtrl;
