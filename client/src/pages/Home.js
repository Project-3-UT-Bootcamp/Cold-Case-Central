import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_CASES } from "../utils/queries";

import CaseList from "../components/CaseList";

const Home = () => {

  const { loading, data } = useQuery(QUERY_CASES);
  const cases = data?.cases || [];

  return (
    <main className="main_wrapper">
      <div>
        <div>
          This is the CaseList: <CaseList />
        </div>
      </div>
    </main>
  );
};

export default Home;
