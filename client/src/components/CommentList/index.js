import React from "react";
import { Link } from "react-router-dom";

const CommentList = ({ comments, title }) => {
  if (!comments.length) {
    return <h3>No Comments Yet</h3>;
  }
  return (
    <div>
      <h3>{title}</h3>
      {comments &&
        comments.map(comments => (
          <div key={comment._id} className="">
            <p className="">
                <Link
                to={`/profile/${comment.username}`}
                >
              {comments.username}
              </Link>{''}
              comment on {comment.createdAt}
            </p>
            <div className="">
              <p>{comments.commentText}</p>
              <p className="">
                Comments: {comment.commentCount} || Click to{' '}
                {comments.commentCount ? 'see' : 'start'} the discussion!
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CommentList;