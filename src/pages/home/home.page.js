import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MiniProfileCompononent from '../../components/mini-profile/mini-profile.comp';
import Post from '../../components/post/post.comp';
import { getPosts } from '../../redux/post/post.actions';
import { getCurrentUserProfile } from '../../redux/auth/auth.actions';
import { selectPosts } from '../../redux/post/post.selector';
import {
  selectCurrentUser,
  selectCurrentUserProfile
} from '../../redux/auth/auth.selector';

function HomePage(props) {
  const {
    getPosts: getAllPosts,
    posts,
    getProfile,
    currentUser,
    currentUserProfile: userProfile
  } = props;

  const { user_id } = currentUser;

  useEffect(() => {
    getProfile(user_id);
    getAllPosts();
  }, [getAllPosts, getProfile, user_id]);

  const profile = {
    ...currentUser,
    image: userProfile.image
  };

  return (
    <div className='row'>
      <div className='col-md-8'>
        {posts ? posts.map(post => <Post key={post.id} post={post} />) : null}
      </div>

      <div className='col-md-4 d-none d-lg-block'>
        {currentUser && userProfile && (
          <MiniProfileCompononent profile={profile} showName imgSize={52} />
        )}
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  posts: selectPosts,
  currentUser: selectCurrentUser,
  currentUserProfile: selectCurrentUserProfile
});

const mapDispatchToProps = {
  getPosts,
  getProfile: getCurrentUserProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
