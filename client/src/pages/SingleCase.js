import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import { QUERY_CASE } from '../utils/queries';

const SingleCase = (props) => {
  const { id: caseId } = useParams();

  return (
    <div>
      <div>
        <p className="card-header">
          <span>Username</span> thought on createdAt
        </p>
        <div className="card-body">
          <p>Case Text</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCase;
