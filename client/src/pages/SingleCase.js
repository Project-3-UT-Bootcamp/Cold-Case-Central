import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_CASE } from "../utils/queries";

const SingleCase = (props) => {
  const { id: caseId } = useParams();

  const { loading, data } = useQuery(QUERY_CASE, {
    variables: { id: caseId },
  });

  const cases = data?.case || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
<div>
  <div className="card mb-3">
    <p className="card-header">
      <span style={{ fontWeight: 700 }} className="text-light">
        {cases.username}
      </span>{' '}
      case on {cases.createdAt}
    </p>
    <div className="card-body">
      <p>{cases.caseText}</p>
    </div>
  </div>
</div>
  );
};

export default SingleCase;
