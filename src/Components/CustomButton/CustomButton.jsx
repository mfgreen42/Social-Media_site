import { useState } from "react"

const CustomButton = (props) => {
    const [buttonIsLiked, setButtonIsLiked]=useState('inactive')
    const [buttonIsDisliked, setButtonIsDisliked]=useState('inactive')

    function handleIsLiked(){
        if(buttonIsLiked === 'inactive'){
            setButtonIsLiked('active')
            setButtonIsDisliked('inactive')
        }
        else {
            setButtonIsLiked('inactive')
        }
    }
    function handleIsDisliked(){
        if(buttonIsDisliked === 'inactive'){
             setButtonIsDisliked('active')
             setButtonIsLiked('inactive')
        }
        else {
            setButtonIsDisliked('inactive')
        }
    }
    return ( 
    <div>
        <ul>
            <div className="button">
                <button className={buttonIsLiked} onClick={handleIsLiked}>Like</button>
            </div>
            <div className="button">
                <button className={buttonIsDisliked} onClick={handleIsDisliked}>Dislike</button>
            </div>
        </ul>
    </div>
     );
}
 
export default CustomButton;

