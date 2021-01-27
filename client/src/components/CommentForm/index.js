import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import { ADD_COMMENT } from '../../utils/mutations';
import { QUERY_COMMENTS, QUERY_ME } from '../../utils/queries';

const CommentForm = () => {
  const [commentText, setText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const [addComment, { error }] = useMutation(ADD_COMMENT, {
    update(cache, { data: { addComment } }) {
      try {
        // could potentially not exist yet, so wrap in a try...catch
        const { comments } = cache.readQuery({ query: QUERY_COMMENTS });
        cache.writeQuery({
          query: QUERY_COMMENTS,
          data: { comments: [addComment, ...comments] }
        });
      } catch (e) {
        console.error(e);
      }
  
      // update me object's cache, appending new thought to the end of the array
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, comments: [...me.comments, addComment] } }
      });
    }
  });

  //event listeners
  const handleChange = (event) => {
    if (event.target.value.length <= 100000) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };
  const handleFormSubmit = async event => {
    event.preventDefault();
  
    try {
      // add comment to database
      await addComment({
        variables: { commentText }
      });
  
      // clear form value
      setText('');
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <p className={`m-0 ${characterCount === 100000 ? "text-error" : ""}`}>
        Character Count: {characterCount}/100000
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>{" "}
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
      >
        <textarea
          placeholder="Here's a new comment..."
          value={commentText}
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        ></textarea>
        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
