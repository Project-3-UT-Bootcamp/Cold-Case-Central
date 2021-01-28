import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_CASE } from "../utils/queries";
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';
import Auth from '../utils/auth';

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
      <p>Case Title: {cases.caseTitle}</p>
      <p>Case Description: {cases.caseDescription}</p>
      <p>Case Status: {cases.caseStatus}</p>
      <p>Case Start Date: {cases.caseStartDate}</p>
    </div>
  </div>

  {cases.commentCount > 0 && <CommentList comments={cases.comments} />}
  {Auth.loggedIn() && <CommentForm caseId={cases._id} />}
</div>
  );
};

export default SingleCase;
