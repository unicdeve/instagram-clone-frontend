import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Message } from 'semantic-ui-react';

import { signinUser, clearErrors } from '../../redux/auth/auth.actions';
import isEmpty from '../../util/isEmpty';

function LoginForm({ signIn, errors: dataErrors, clearAllErrors }) {
  const [values, setValues] = useState({
    username: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
    clearAllErrors();
    setErrors({});
  };

  const handleSubmit = e => {
    e.preventDefault();
    signIn(values);
  };

  useEffect(() => {
    if (!isEmpty(dataErrors)) {
      setErrors(dataErrors);
    }
  }, [dataErrors]);

  let formatedErrors = [];
  if (!isEmpty(errors)) {
    Object.keys(errors).map(err => formatedErrors.push(`${errors[err]}`));
  }

  return (
    <>
      {!isEmpty(errors) && (
        <Message
          error
          header='Error'
          list={formatedErrors}
          style={{ maxWidth: '31rem' }}
        />
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Input
          fluid
          name='username'
          value={values.username}
          onChange={handleChange}
          error={!isEmpty(errors) ? true : false}
          placeholder='Username or email'
        />

        <Form.Input
          fluid
          name='password'
          type='password'
          value={values.password}
          onChange={handleChange}
          error={!isEmpty(errors) ? true : false}
          placeholder='Password'
        />

        <Button fluid content='Log In' primary />
      </Form>
    </>
  );
}

const mapStateToProps = state => ({
  errors: state.auth.errors
});

const mapDispatchToProps = {
  signIn: signinUser,
  clearAllErrors: clearErrors
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
