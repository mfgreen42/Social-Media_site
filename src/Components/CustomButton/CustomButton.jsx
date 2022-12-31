import { useState } from "react";

const CustomButton = (props) => {

    function handleClick(){

    }
    return ( 
    <div>
        <div className="button">
            <button className='inactive' onClick={handleClick}>Like</button>
        </div>
        <div className="button">
            <button className='inactive' onClick={handleClick}>Dislike</button>
        </div>

    </div>
     );
}
 
export default CustomButton;

