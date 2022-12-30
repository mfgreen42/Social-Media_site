import React, { useState } from 'react';


const CreatePostForm = (props) => {
    const [name, setName]= useState('')
    const [message, setMessage]=useState('')

    function handleSubmit(event) {
        event.preventDefault();
        let newPost ={
            name: name,
            message: message
        };
        console.log(newPost);
        props.addNewPostProperty(newPost);
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type = 'string' value={name} onChange= {(event) => setName(event.target.value)} />
            <label>Message</label>
            <input type = 'string' value={message} onChange= {(event) => setMessage(event.target.value)}/>
            <button type='submit'>Post</button>
        </form>
     );
}
 
export default CreatePostForm;