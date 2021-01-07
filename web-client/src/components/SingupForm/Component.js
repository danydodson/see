// Helper styles for demo
import "./../../assets/formik/helper.css"
import { DisplayFormikState } from "../../assets/formik/helper"

import React from "react"
import { Formik } from "formik"
import * as Yup from "yup"

// import Select from "react-select"
import Validator from "./Validator.js"

const SingupForm = () => (
  <div className="app">
    <h1>
      Basic{" "}
      <a
        href="https://github.com/jaredpalmer/formik"
        target="_blank"
        rel="noopener noreferrer"
      >
        Formik
      </a>{" "}
      Demo
    </h1>

    <Formik
      initialValues={{ email: "" }}
      onSubmit={async (values) => {
        await new Promise((resolve) => setTimeout(resolve, 500))
        alert(JSON.stringify(values, null, 2))
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email().required("Required")
      })}
    >
      {(props) => {
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
        } = props
        return (
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="name"
              style={{ display: "block", marginTop: "12pt" }}
            >
              Name
            </label>
            <input
              id="name"
              placeholder="Enter your name"
              type="text"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.name && touched.name ? "text-input error" : "text-input"
              }
            />
            {errors.name && touched.name && (
              <div className="input-feedback">{errors.name}</div>
            )}

            <label
              htmlFor="email"
              style={{ display: "block", marginTop: "12pt" }}
            >
              Email
            </label>
            <input
              id="email"
              placeholder="Enter your email"
              type="text"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.email && touched.email
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.email &&
              touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}

            <label
              htmlFor="username"
              style={{ display: "block", marginTop: "12pt" }}
            >
              Username
            </label>
            <input
              id="username"
              placeholder="Enter your username"
              type="text"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.username && touched.username
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.username && touched.username && (
              <div className="input-feedback">{errors.username}</div>
            )}

            <label
              htmlFor="password"
              style={{ display: "block", marginTop: "12pt" }}
            >
              Password
            </label>
            <input
              id="password"
              placeholder="Enter your password"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.password && touched.password
                  ? "text-input error"
                  : "text-input"
              }
            />

            {/* <div style={{ margin: "1rem 0" }}>
              <label htmlFor="color">Topics (select at least 3) </label>
              <Select
                id="color"

                multi={true}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                value={this.props.value}
              />
              {!!this.props.error && this.props.touched && (
                <div style={{ color: "red", marginTop: ".5rem" }}>
                  {this.props.error}
                </div>
              )}
            </div> */}

            <button
              type="button"
              className="outline"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </button>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>

            <DisplayFormikState {...props} />
          </form>
        )
      }}
    </Formik>
  </div>
)

const MyEnhancedForm = Validator(SingupForm)


export default MyEnhancedForm
