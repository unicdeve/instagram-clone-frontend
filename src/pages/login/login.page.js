import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  CardWrapper,
  CardFormContainer,
  CardFooter,
  CardButtonWrapper
} from './login.styles';
import BorderLessButton from '../../components/BorderLessButton/BorderLessButton.comp';
import OrRuler from '../../components/or-ruler/or-ruler.comp';
import LoginForm from '../../components/login-form/login-form.comp';
import CardHeader from '../../components/card-header/card-header.comp';
import { selectIsAuthenticated } from '../../redux/auth/auth.selector';

function LoginPage({ isAuthenticated, history }) {
  useEffect(() => {
    if (isAuthenticated) history.push('/');
  }, [isAuthenticated, history]);

  return (
    <div className='container p-2 p-lg-5'>
      <div className='row justify-content-center'>
        <div className='col-lg-4 align-self-center'>
          {/* login card */}
          <CardWrapper>
            <CardHeader />
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
          <CardWrapper className='p-3 mt-3 text-center'>
            Don't have an account?{' '}
            <Link to='/signup'>
              <BorderLessButton>Sign up</BorderLessButton>
            </Link>
          </CardWrapper>
          {/* end of footer card */}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectIsAuthenticated
});

export default connect(mapStateToProps)(LoginPage);
