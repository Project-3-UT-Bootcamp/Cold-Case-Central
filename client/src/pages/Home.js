import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_CASES, QUERY_ME_BASIC } from "../utils/queries";
import CommentForm from '../components/CommentForm';
import Auth from '../utils/auth';

import CaseList from "../components/CaseList";

const Home = () => {

  const { loading, data } = useQuery(QUERY_CASES);
  const cases = data?.cases || [];
  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div>
      <CommentForm/>
        <div>
          {loading ? (
            <div>Loading...</div>
          ) : (
          <CaseList cases={cases}/>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
