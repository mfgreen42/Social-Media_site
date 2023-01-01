import { useState } from "react"

const CustomButton = (props) => {
    const [buttonClass, setButtonClass]=useState('inactive')

    function handleClick(){
        if(buttonClass === 'inactive'){
          
            setButtonClass('active')
        }
        else {
            setButtonClass('inactive')
        }
    }
    return ( 
    <div>
        <ul>
            <div className="button">
                <button className={buttonClass} onClick={handleClick}>Like</button>
            </div>
            <div className="button">
                <button className={buttonClass} onClick={handleClick}>Dislike</button>
            </div>
        </ul>
    </div>
     );
}
 
export default CustomButton;

