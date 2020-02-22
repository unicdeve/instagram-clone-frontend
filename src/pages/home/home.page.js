import React from 'react';
import MiniProfileCompononent from '../../components/mini-profile/mini-profile.comp';
import HomePosts from '../../components/home-posts/home-posts.comp';

function HomePage() {
  return (
    <div className='row'>
      <div className='col-md-8'>
        <HomePosts />
      </div>

      <div className='col-md-4 d-none d-lg-block'>
        <MiniProfileCompononent showName imgSize={52} />
      </div>
    </div>
  );
}

export default HomePage;
