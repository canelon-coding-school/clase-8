import React, { Component } from 'react';
import { Container, Button, Form, Grid } from 'semantic-ui-react';
import * as yup from 'yup';
import { Formik } from 'formik';

import Auth from '../../services/authentication';

class Login extends Component {
  loginForm() {
    return (
      <Formik
        initialValues={{ email_address: '', password: '' }}
        validationSchema={yup.object().shape({
          email_address: yup.string().label('E-mail')
            .trim()
            .required()
            .email(),
          password: yup.string().label('Password')
            .trim()
            .required(),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            const auth = new Auth();
            auth.login(values.email_address, values.password);
            setSubmitting(false);
          }, 800);
        }}
      >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form 
          onSubmit={handleSubmit}
          style={{ marginTop: 90 }}
        >
          <Form.Field>
            <label htmlFor="email_address">E-mail</label>
            <input
              placeholder="E-mail"
              type="email"
              name="email_address"
              id="email_address"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email_address}
              autoFocus
            />
          </Form.Field>
          {errors.email_address && touched.email_address && errors.email_address}
          <Form.Field>
            <label htmlFor="password">Password</label>
            <input
              placeholder="Password"
              name="password"
              id="password"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
          </Form.Field>
          {errors.password && touched.password && errors.password}
          <Button
            type="submit"
            disabled={isSubmitting}
            loading={isSubmitting}
            fluid
          >
            Submit
          </Button>
        </Form>
      )}
      </Formik>
    )
  }

  render() {
    const LoginForm = this.loginForm;

    return (
      <Container>
        <Grid centered aligned="center" columns={4}>
          <Grid.Column>
            {/* this.loginForm() */}
            <LoginForm />
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default Login;
