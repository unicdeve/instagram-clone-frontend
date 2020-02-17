import React from 'react';
import { Button, Form } from 'semantic-ui-react';

export default function SignUpForm() {
  return (
    <Form>
      <Form.Input fluid name='email' placeholder='Email' />
      <Form.Input fluid name='fullName' placeholder='Full Name' />
      <Form.Input fluid name='username' placeholder='Username' />

      <Form.Input
        fluid
        name='password'
        type='password'
        placeholder='Password'
      />

      <Form.Input
        fluid
        name='confirm_password'
        type='password'
        placeholder='Confirm Password'
      />

      <Button fluid content='Sign up' primary />
    </Form>
  );
}
