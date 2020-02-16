import React from 'react';

import {
  CardWrapper,
  CardHeader,
  CardFormContainer,
  CardFooter,
  CardButtonWrapper
} from './login.styles';
import BorderLessButton from '../../components/BorderLessButton/BorderLessButton.comp';
import OrRuler from '../../components/or-ruler/or-ruler.comp';
import LoginForm from '../../components/login-form/login-form.comp';

export default function LoginPage() {
  return (
    <div className='container p-2 p-lg-5'>
      <div className='row justify-content-center'>
        <div className='col-lg-4 align-self-center'>
          {/* login card */}
          <CardWrapper>
            <CardHeader as='h1' className='text-center'>
              InstaClone
            </CardHeader>
            <CardFormContainer className='mt-5 mb-3'>
              <LoginForm />
            </CardFormContainer>
            <CardFooter>
              <OrRuler />

              <CardButtonWrapper>
                <BorderLessButton className='text-center'>
                  Log in with Facebook
                </BorderLessButton>
              </CardButtonWrapper>
            </CardFooter>
          </CardWrapper>
          {/* end of login card */}

          {/* footer card */}
          <CardWrapper className='p-3 mt-3'>
            Don't have an account? <BorderLessButton>Sign up</BorderLessButton>
          </CardWrapper>
          {/* end of footer card */}
        </div>
      </div>
    </div>
  );
}
