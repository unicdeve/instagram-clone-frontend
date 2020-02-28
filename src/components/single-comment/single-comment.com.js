import React from 'react';
import LikeButton from '../like-button/like-button.comp';

export default function SingleComment(props) {
  const {
    comment: { id, body, user, likes },
    postId
  } = props;
  return (
    <div className='d-flex justify-content-between'>
      <p>
        <span className='font-weight-bolder pr-2'>{user.username}</span>
        {body}
      </p>

      <LikeButton likes={likes} commentId={id} postId={postId} />
    </div>
  );
}
