import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import { ADD_COMMENT } from '../../utils/mutations';

const CommentForm = ({ caseId }) => {
  const [commentText, setCommentText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleChange = event => {
    if (event.target.value.length <= 280) {
      setCommentText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      await addComment({
        variables: {commentText, caseId}
      });
      setCommentText('');
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <p className={`${characterCount === 280 || error ? 'text-error' : ''}`}>
        Character Count: {characterCount}/280
        {error && <span>Something went wrong...</span>}
      </p>
      <form onSubmit={handleFormSubmit}>
        <textarea
          placeholder="Leave a comment on this case..."
          value={commentText}
          onChange={handleChange}>
        </textarea>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default CommentForm;
