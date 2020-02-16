import React from 'react';
import { Button, Form } from 'semantic-ui-react';

export default function LoginForm() {
  return (
    <Form>
      <Form.Input fluid name='username' placeholder='Username or email' />

      <Form.Input
        fluid
        name='password'
        type='password'
        placeholder='Password'
      />

      <Button fluid content='Log In' primary />
    </Form>
  );
}
