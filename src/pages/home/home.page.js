import React from 'react';
import MiniProfileCompononent from '../../components/mini-profile/mini-profile.comp';

function HomePage() {
  return (
    <div className='row'>
      <div className='col-md-8'>
        <h1>left side</h1>
        <h1>left side</h1>
        <h1>left side</h1>
        <h1>left side</h1>
        <h1>left side</h1>
      </div>

      <div className='col-md-4 d-none d-lg-block'>
        <MiniProfileCompononent />
      </div>
    </div>
  );
}

export default HomePage;
