import React, { useState } from 'react';

const CommentForm = () => {
  return (
    <div>
      <p className="m-0">
        Character Count: 0/280
      </p>
      <form className="flex-row justify-center justify-space-between-md align-stretch">
        <textarea
          placeholder="Here's a new comment..."
          className="form-input col-12 col-md-9"
        ></textarea>
        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;