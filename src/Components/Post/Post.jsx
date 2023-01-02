import CustomButton from "../CustomButton/CustomButton";
const Post = (props) => {
    return ( 
    <div className="table">
    <div>
        {props.postEntries.map((post) => {
        return (
            <div>
                <div>
                    <p>{post.name}</p>
                    <p>{post.message}</p>
                    <CustomButton />
                    <hr></hr>
                </div>
            </div>
        );
        })}
    </div>
    </div>

     );
}
 
export default Post;

