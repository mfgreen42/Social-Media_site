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
        
        props.addNewPostProperty(newPost);
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label>Name</label>
                <input type = 'string' className='form-control' value={name} onChange= {(event) => setName(event.target.value)} />
            </div>
            <div>
                <label>Message</label>
                <input type = 'string' className='form-control' value={message} onChange= {(event) => setMessage(event.target.value)}/>
            </div>
            <button type='submit' className='btn btn-primary' style={{'margin-top': '1em'}}>Post</button>
        </form>
     );
}
 
export default CreatePostForm;