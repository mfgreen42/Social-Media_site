
import React, { useState } from 'react';
import Post from './Components/Post/Post';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import NavBar from './Components/NavBar/NavBar';
import './App.css';
import CustomButton from './Components/CustomButton/CustomButton';

function App() {

  const [posts, setPosts] = useState([{name: 'Mara Green', message: 'Welcome to my new Social Media Site!'}])
  
  function addNewPost(post,) {
    let tempPost = [post, ...posts];
    setPosts(tempPost);
  }
  
  return (
    <div className='container-fluid'>
      <div className='header'>
      <NavBar/>
      </div>
      <div className='row'>
        <div className='col-md-12'>
          <div className='border-box'>
            <CreatePostForm addNewPostProperty={addNewPost}/>
          </div>
        </div>
        <div className='col-md-12'>
          <div className='border-box'>
            <Post postEntries={posts}/>
            <CustomButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
