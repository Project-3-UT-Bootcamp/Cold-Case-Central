import React, { useState } from "react";

const CommentForm = () => {
  const [commentText, setText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const handleChange = event => {
    if (event.target.value.length <= 500) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  return (
    <div>
      <p className="m-0">Character Count: 0/280</p>
      <form className="flex-row justify-center justify-space-between-md align-stretch">
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
