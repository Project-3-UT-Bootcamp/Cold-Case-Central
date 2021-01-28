import React from "react";
import { Link } from "react-router-dom";

const CaseList = ({ cases, title }) => {
  if (!cases.length) {
    return <h3>No Cases Yet</h3>;
  }

  return (
    <div>
      <h3>Today's Cold Cases:</h3>
      {cases &&
        cases.map(cases => (
          <div key={cases._id} className="">
            <p className="">
              {cases.username}
              case on {cases.createdAt}
            </p>
            <div className="">
              <Link to={`/case/${cases._id}`}>
                <p>Case Title:{cases.caseTitle}</p>
                </Link>
              <p>Case Description: {cases.caseDescription}</p>
              <p>Case Status: {cases.caseStatus}</p>
              <p>Case Start Date: ({cases.caseStartDate})</p>
              <p className="">
                Comments: {cases.commentCount} || Click to{' '}
                {cases.commentCount ? 'see' : 'start'} the discussion!
              </p>
              <div className="double-border"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CaseList;
