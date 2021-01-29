import React from "react";
import { Link } from "react-router-dom";

const CommentList = ({ comments, title }) => {
  if (!comments.length) {
    return <h3>No Comments Yet</h3>;
  }
  return (
    <div>
      <h3>Comments</h3>
      {comments &&
        comments.map(comments => (
          <div key={comments._id} className="">
            <p className="">
                <Link
                to={`/profile/${comments.username}`}
                >
              {comments.username}
              </Link>{''}
              comment on {comments.createdAt}
            </p>
            <div className="">
              <p>{comments.commentText}</p>
              <p className="">
                Comments: {comments.commentCount} || Click to{' '}
                {comments.commentCount ? 'see' : 'start'} the discussion!
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CommentList;