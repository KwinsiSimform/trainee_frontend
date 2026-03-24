import React from 'react';
import GetPage from './pages/GetPage';
import PostPage from './pages/PostPage';
import PutPage from './pages/PutPage';

function App() {
  return (
    <div>
      <h1>CRUD App</h1>
      <hr />
      <GetPage />
      <hr />
      <PostPage />
      <hr />
      <PutPage />
    </div>
  );
}

export default App;