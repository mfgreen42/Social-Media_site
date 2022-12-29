
import React, { useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import Post from './Components/Post/Post'


function App() {

  const [posts, setPosts] = useState([{name: 'Mara Green', message: 'This is the first message to post.'}])
  
  
  return (
    <div>
      <Post postEntries={posts}/>

    </div>
  );
}

export default App;
