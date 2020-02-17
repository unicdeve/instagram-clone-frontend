import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Message } from 'semantic-ui-react';

import { signinUser, clearErrors } from '../../redux/auth/auth.actions';
import isEmpty from '../../util/isEmpty';
import { useForm } from '../../util/hooks';

function LoginForm({
  signIn,
  auth: { errors: dataErrors, loading },
  clearAllErrors
}) {
  const { values, handleChange, handleSubmit } = useForm(
    handleSignInCallback,
    changeCallback,
    {
      username: '',
      password: ''
    }
  );

  const [errors, setErrors] = useState({});

  function handleSignInCallback() {
    signIn(values);
  }

  function changeCallback() {
    clearAllErrors();
    setErrors({});
  }

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

        <Button fluid content='Log In' primary loading={loading} />
      </Form>
    </>
  );
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {
  signIn: signinUser,
  clearAllErrors: clearErrors
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
