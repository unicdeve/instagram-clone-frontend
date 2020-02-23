import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Button, Form, Message } from 'semantic-ui-react';

import { signupUser, clearErrors } from '../../redux/auth/auth.actions';
import { selectAuth } from '../../redux/auth/auth.selector';
import { useForm } from '../../util/hooks';
import isEmpty from '../../util/isEmpty';

function SignUpForm({
  signUp,
  clearAllErrors,
  auth: { errors: dataErrors, loading }
}) {
  const [errors, setErrors] = useState({});
  const initialState = {
    email: '',
    fullName: '',
    username: '',
    password: '',
    confirm_password: ''
  };
  const { values, handleChange, handleSubmit } = useForm(
    signUpCallback,
    changeCallback,
    initialState
  );

  function signUpCallback() {
    console.log(values);
    signUp(values);
  }

  function changeCallback() {
    clearAllErrors();
    setErrors({});
  }

  let formatedErrors = [];
  if (!isEmpty(errors)) {
    Object.keys(errors).map(err =>
      formatedErrors.push(
        `${err.replace('_', ' ').toLowerCase()}: ${errors[err]}`
      )
    );
  }

  useEffect(() => {
    if (!isEmpty(dataErrors)) {
      setErrors(dataErrors);
    }
  }, [dataErrors]);

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
          name='email'
          value={values.email}
          onChange={handleChange}
          error={errors.email ? true : false}
          placeholder='Email'
        />
        <Form.Input
          fluid
          name='fullName'
          value={values.fullName}
          onChange={handleChange}
          error={errors.fullName ? true : false}
          placeholder='Full Name'
        />
        <Form.Input
          fluid
          name='username'
          value={values.username}
          onChange={handleChange}
          error={errors.username ? true : false}
          placeholder='Username'
        />

        <Form.Input
          fluid
          name='password'
          type='password'
          value={values.password}
          onChange={handleChange}
          error={errors.password ? true : false}
          placeholder='Password'
        />

        <Form.Input
          fluid
          name='confirm_password'
          type='password'
          value={values.confirm_password}
          onChange={handleChange}
          error={errors.confirm_password ? true : false}
          placeholder='Confirm Password'
        />

        <Button fluid content='Sign up' primary loading={loading} />
      </Form>
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  auth: selectAuth
});

export default connect(mapStateToProps, {
  signUp: signupUser,
  clearAllErrors: clearErrors
})(SignUpForm);
