import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_CASES } from "../utils/queries";
import CommentForm from '../components/CommentForm';

import CaseList from "../components/CaseList";

const Home = () => {

  const { loading, data } = useQuery(QUERY_CASES);
  const cases = data?.cases || [];

  return (
    <main className="main_wrapper">
      <div>
        <div>
          {loading ? (
            <div>Loading...</div>
          ) : (
          <CaseList cases={cases}/>
          )}
          <CommentForm/>
        </div>
      </div>
    </main>
  );
};

export default Home;
