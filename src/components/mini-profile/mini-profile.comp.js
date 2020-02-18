import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import {
  selectCurrentUser,
  selectCurrentUserProfile
} from '../../redux/auth/auth.selector';
import isEmpty from '../../util/isEmpty';
import { Header } from 'semantic-ui-react';
import { getCurrentUserProfile } from '../../redux/auth/auth.actions';

import {
  RightWrapper,
  MiniProfileWrapper,
  MiniProfileImgWrapper,
  MiniProfile,
  MiniProfileImg
} from './mini-profile.styles';

function MiniProfileComponent({ currentUser, getProfile, currentUserProfile }) {
  const { user_id, username, full_name } = currentUser;

  useEffect(() => {
    getProfile(user_id);
  }, [user_id, getProfile]);

  return (
    <>
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
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  currentUserProfile: selectCurrentUserProfile
});

const mapDispatchToProps = {
  getProfile: getCurrentUserProfile
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MiniProfileComponent);
