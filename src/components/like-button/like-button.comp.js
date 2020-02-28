import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Icon } from 'semantic-ui-react';

import { selectCurrentUser } from '../../redux/auth/auth.selector';
import { IconWrapper } from '../post-actions/post-actions.styles';
import { likePost, unlikePost } from '../../redux/post/post.actions';

function LikeButton(
  { likes, postId, currentUser: { user_id }, like, unlike },
  commentId
) {
  let likeId;
  const liked = () => {
    const likedPost = likes.find(like => like.user === user_id);

    if (likedPost) {
      likeId = likedPost.id;
      return true;
    } else return false;
  };

  const likeButton = liked() ? (
    <>
      {/* onClick={() => unlikeComment(postId, likeId, user_id)} */}
      {commentId ? (
        <IconWrapper>
          <Icon name='heart' size='small' color='red' />
        </IconWrapper>
      ) : (
        <IconWrapper onClick={() => unlike(postId, likeId, user_id)}>
          <Icon name='heart' size='large' color='red' />
        </IconWrapper>
      )}
    </>
  ) : (
    <>
      {commentId ? (
        // onClick={() => likeComment(postId)}
        <IconWrapper>
          <Icon name='heart outline' size='small' color='black' />
        </IconWrapper>
      ) : (
        <IconWrapper onClick={() => like(postId)}>
          <Icon name='heart outline' size='large' color='black' />
        </IconWrapper>
      )}
    </>
  );

  return likeButton;
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = {
  like: likePost,
  unlike: unlikePost
};

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton);
