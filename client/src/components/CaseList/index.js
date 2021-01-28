import React from "react";
import { Link } from "react-router-dom";

const CaseList = ({ cases, title }) => {
  if (!cases.length) {
    return <h3>No Cases Yet</h3>;
  }

  return (
    <div>
      <div className="bg-dark">
        <h2 className="english-font py-2 text-center fs-2 text-white">Latest Cases</h2>
      </div>
      <div className="py-3">
        {cases &&
          cases.map(cases => (
            <div key={cases._id}>
              <h3><Link to={`/case/${cases._id}`}>
                {cases.caseTitle}
              </Link></h3>
              <p className="fs-6"><strong>{cases.createdAt}</strong> by <strong>{cases.username}</strong></p>
              <div className="py-2">
                <div>Case Status: <strong>{cases.caseStatus}</strong></div>
                <div>Case Start Date: <strong>{cases.caseStartDate}</strong></div>
              </div>
              <div>
                <p className="text-truncate">Case Description: {cases.caseDescription}</p>
                <p></p>
                <p className="">
                  Comments: {cases.commentCount} || Click to{' '}
                  {cases.commentCount ? 'see' : 'start'} the discussion!
              </p>
                <div className="double-border"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CaseList;
