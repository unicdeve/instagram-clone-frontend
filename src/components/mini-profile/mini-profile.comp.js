import React from 'react';

import { Header } from 'semantic-ui-react';

import {
  RightWrapper,
  MiniProfileWrapper,
  MiniProfileImgWrapper,
  MiniProfile,
  MiniProfileImg
} from './mini-profile.styles';
import isEmpty from '../../util/isEmpty';

function MiniProfileComponent({ showName, imgSize, profile }) {
  const { username, full_name, image } = profile;

  return (
    <>
      {!isEmpty(profile) ? (
        <RightWrapper>
          <MiniProfileWrapper>
            <MiniProfileImgWrapper imgSize={imgSize}>
              <MiniProfileImg src={image} alt='profile-img' />
            </MiniProfileImgWrapper>

            <MiniProfile>
              <Header as='h4' className='p-0 m-0'>
                {username}
              </Header>

              {showName && (
                <Header as='h6' className='p-0 m-0 text-muted'>
                  {full_name}
                </Header>
              )}
            </MiniProfile>
          </MiniProfileWrapper>
        </RightWrapper>
      ) : (
        <p>No current user</p>
      )}
    </>
  );
}

export default MiniProfileComponent;
