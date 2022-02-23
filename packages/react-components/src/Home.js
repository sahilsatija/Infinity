import React from 'react';
import { AutoComplete, Pagination } from './components';

const Home = () => {
  
  return (
    <>
    <div>Home Component</div>
    <AutoComplete />
    <Pagination />
      {/* <button onClick={() => history.goBack()}>Back</button> */}
    
    </>
  )
}

export default Home;