import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import CaseList from '../components/CaseList';

const Home = () => {
    return (
        <main className="main_wrapper">
          <div>
            <div>This is the CaseList: <CaseList /></div>
          </div>
      </main>
    )
};

export default Home;