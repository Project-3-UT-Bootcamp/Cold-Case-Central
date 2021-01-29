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
      <div class="m-2">
        <h2 className="english-font text-center">{cases.caseTitle}</h2>
        <div className="text-center">
          <p>Case Start Date: <span><strong>{cases.caseStartDate}</strong></span></p>
          <p>Case Status: <span><strong>{cases.caseStatus}</strong></span></p>
          <p>Added to Cold Case Central on: <span><strong>{cases.createdAt}</strong></span> by <span><strong>{cases.username}</strong></span></p>
        </div>

        <div>
          <p></p>
          <p><span><strong>The story so far:</strong></span></p> 
          <p className="px-3">{cases.caseDescription}</p>
        </div>
      </div>
      {Auth.loggedIn() && <CommentForm caseId={cases._id} />}
      {cases.commentCount > 0 && <CommentList comments={cases.comments} />}

    </div>
  );
};

export default SingleCase;
