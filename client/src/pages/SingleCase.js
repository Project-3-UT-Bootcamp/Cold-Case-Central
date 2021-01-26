import React from 'react';

const SingleCase = props => {
  return (
    <div>
      <div>
        <p className="card-header">
          <span>
            Username
          </span>{' '}
          thought on createdAt
        </p>
        <div className="card-body">
          <p>Case Text</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCase;
