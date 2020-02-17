import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { CardWrapper, CardFormContainer, CardFooter } from './signup.styles';
import BorderLessButton from '../../components/BorderLessButton/BorderLessButton.comp';
import SignUpForm from '../../components/signup-form/signup-form.comp';
import CardHeader from '../../components/card-header/card-header.comp';
import { selectIsAuthenticated } from '../../redux/auth/auth.selector';
import { createStructuredSelector } from 'reselect';

function SignUpPage({ history, isAuthenticated }) {
  useEffect(() => {
    if (isAuthenticated) history.push('/');
  }, [isAuthenticated, history]);

  return (
    <div className='container p-2 p-lg-5'>
      <div className='row justify-content-center'>
        <div className='col-lg-4 align-self-center'>
          {/* login card */}
          <CardWrapper>
            <CardHeader showExtra />

            <CardFormContainer className='mt-3 mb-3'>
              <SignUpForm />
            </CardFormContainer>
            <CardFooter>
              <div style={{ color: 'rgba(0,0,0,.35)' }}>
                By signing up, you agree to our Terms, Data Policy and Cookies
                Policy.
              </div>
            </CardFooter>
          </CardWrapper>
          {/* end of login card */}

          {/* footer card */}
          <CardWrapper className='p-3 mt-3 text-center'>
            Have an account?{' '}
            <Link to='/login'>
              <BorderLessButton>Log in</BorderLessButton>
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

export default connect(mapStateToProps)(SignUpPage);
