
import React, { useState } from 'react';
import Post from './Components/Post/Post';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import NavBar from './Components/NavBar/NavBar';

function App() {

  const [posts, setPosts] = useState([{name: 'Mara Green', message: 'This is the first message to post.'}])
  
  function addNewPost(post) {
    let tempPost = [post, ...posts];
    setPosts(tempPost);
  }
  
  return (
    <div>
      <NavBar/>
      <CreatePostForm addNewPostProperty={addNewPost}/>
      <Post postEntries={posts}/>
    </div>
  );
}

export default App;
