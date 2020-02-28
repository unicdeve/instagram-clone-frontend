import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Icon } from 'semantic-ui-react';

import { selectCurrentUser } from '../../redux/auth/auth.selector';
import { IconWrapper } from '../post-actions/post-actions.styles';
import {
  likePost,
  unlikePost,
  likeComment,
  unlikeComment
} from '../../redux/post/post.actions';

function LikeButton(props) {
  const {
    likes,
    postId,
    commentId,
    currentUser: { user_id }
  } = props;

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
      {commentId ? (
        <IconWrapper
          onClick={() =>
            props.unlikeComment(postId, commentId, likeId, user_id)
          }
        >
          <Icon name='heart' size='small' color='red' />
        </IconWrapper>
      ) : (
        <IconWrapper onClick={() => props.unlikePost(postId, likeId, user_id)}>
          <Icon name='heart' size='large' color='red' />
        </IconWrapper>
      )}
    </>
  ) : (
    <>
      {commentId ? (
        <IconWrapper onClick={() => props.likeComment(postId, commentId)}>
          <Icon name='heart outline' size='small' color='black' />
        </IconWrapper>
      ) : (
        <IconWrapper onClick={() => props.likePost(postId)}>
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
  likePost,
  unlikePost,
  likeComment,
  unlikeComment
};

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton);
