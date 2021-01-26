import React from "react";
import { Link } from "react-router-dom";

const CaseList = ({ cases, title }) => {
  if (!cases.length) {
    return <h3>No Cases Yet</h3>;
  }
  return (
    <div>
      <h3>{title}</h3>
      {cases &&
        cases.map(cases => (
          <div key={cases._id} className="">
            <p className="">
              {cases.username}
              case on {cases.createdAt}
            </p>
            <div className="">
              <p>{cases.caseText}</p>
              <p className="">
                Comments: {cases.commentCount} || Click to{' '}
                {cases.commentCount ? 'see' : 'start'} the discussion!
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CaseList;
