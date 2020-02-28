import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import {
  CommentFormWrapper,
  CommentForm,
  CommentInput
} from './comment-form.styles';
import BorderLessButton from '../BorderLessButton/BorderLessButton.comp';

import { useForm } from '../../util/hooks';
import { postComment } from '../../redux/post/post.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUserProfile } from '../../redux/auth/auth.selector';

function CommentFormComp(props) {
  const [disabled, setDisabled] = useState(true);
  const { handleChange, handleSubmit, values } = useForm(
    handleSubmitCallback,
    changeCallback,
    { body: '' }
  );

  const body = values.body;

  useEffect(() => {
    if (body.length < 2) setDisabled(true);
    else setDisabled(false);
  }, [body]);

  const {
    id,
    image,
    user: { id: userId, fullName, username }
  } = props.userProfile;

  const user = {
    id: userId,
    fullName,
    username,
    profile: {
      id,
      image
    }
  };

  function handleSubmitCallback() {
    props.postComment(props.postId, body, user);
  }

  function changeCallback() {
    return;
  }

  return (
    <CommentFormWrapper>
      <CommentForm onSubmit={handleSubmit}>
        <CommentInput
          placeholder='Add comment...'
          name='body'
          value={body}
          onChange={handleChange}
        />
        <BorderLessButton disabled={disabled}>Post</BorderLessButton>
      </CommentForm>
    </CommentFormWrapper>
  );
}

const mapStateToProps = createStructuredSelector({
  userProfile: selectCurrentUserProfile
});

export default connect(mapStateToProps, { postComment })(CommentFormComp);
