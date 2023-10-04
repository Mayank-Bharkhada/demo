import React from 'react';
import Ourplateformcontainer from './HomeBlocks/Ourplateformcontainer';
import Jobcirculars from './HomeBlocks/Jobcirculars';
import UploadCV from './HomeBlocks/UploadCV';
import Subscribe from './HomeBlocks/Subscribe';
import SearchBlock from './HomeBlocks/SearchBlock';

function Home() {
  return (
    <>
      <SearchBlock />
      <Ourplateformcontainer />
      <Jobcirculars />
      <UploadCV />
      <Subscribe />
    </>
  );
}

export default Home;
