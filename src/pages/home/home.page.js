import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  RightWrapper,
  MiniProfileWrapper,
  MiniProfileImgWrapper,
  MiniProfile,
  MiniProfileImg
} from './home.styles';
import { createStructuredSelector } from 'reselect';
import {
  selectCurrentUser,
  selectCurrentUserProfile
} from '../../redux/auth/auth.selector';
import isEmpty from '../../util/isEmpty';
import { Header } from 'semantic-ui-react';
import { getCurrentUserProfile } from '../../redux/auth/auth.actions';

function HomePage({ currentUser, getProfile, currentUserProfile }) {
  const { user_id, username, full_name } = currentUser;

  useEffect(() => {
    getProfile(user_id);
  }, [user_id, getProfile]);

  return (
    <div className='row'>
      <div className='col-md-8'>
        <h1>left side</h1>
        <h1>left side</h1>
        <h1>left side</h1>
        <h1>left side</h1>
        <h1>left side</h1>
        <h1>left side</h1>
        <h1>left side</h1>
        <h1>left side</h1>
        <h1>left side</h1>
        <h1>left side</h1>
        <h1>left side</h1>
        <h1>left side</h1>
        <h1>left side</h1>
        <h1>left side</h1>
        <h1>left side</h1>
        <h1>left side</h1>
        <h1>left side</h1>
        <h1>left side</h1>
        <h1>left side</h1>
        <h1>left side</h1>
        <h1>left side</h1>
        <h1>left side</h1>
        <h1>left side</h1>
        <h1>left side</h1>
        <h1>left side</h1>
        <h1>left side</h1>
        <h1>left side</h1>
        <h1>left side</h1>
      </div>

      <div className='col-md-4 d-none d-lg-block'>
        {!isEmpty(currentUser) && !isEmpty(currentUserProfile) ? (
          <RightWrapper>
            <MiniProfileWrapper>
              <MiniProfileImgWrapper>
                <MiniProfileImg
                  src={currentUserProfile.image}
                  alt='profile-img'
                />
              </MiniProfileImgWrapper>

              <MiniProfile>
                <Header as='h4' className='p-0 m-0'>
                  {username}
                </Header>
                <Header as='h6' className='p-0 m-0 text-muted'>
                  {full_name}
                </Header>
              </MiniProfile>
            </MiniProfileWrapper>
          </RightWrapper>
        ) : (
          <p>No current user</p>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  currentUserProfile: selectCurrentUserProfile
});

const mapDispatchToProps = {
  getProfile: getCurrentUserProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
