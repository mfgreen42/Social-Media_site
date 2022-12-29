
import React, { useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import Post from './Components/Post/Post'
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';

function App() {

  const [posts, setPosts] = useState([{name: 'Mara Green', message: 'This is the first message to post.'}])
  
  
  return (
    <div>
      <Post postEntries={posts}/>
      <CreatePostForm />
    </div>
  );
}

export default App;
