
const Post = (props) => {
    return ( 
    <table className="table">
    <thead>
        <tr>
        <th>Name</th>
        <th>Message</th>
        <th>Like/Dislike</th>
        </tr>
    </thead>
    <tbody>
        {props.postEntries.map((post) => {
        return (
            <tr>
            <td>{post.name}</td>
            <td>{post.message}</td>
            <td>
                <div className='button1'>
                    <button>Like</button>
                </div>
                <div className='button2'>
                    <button>Dislike</button>
                </div>
            </td>
            </tr>
        );
        })}
    </tbody>
    </table>

     );
}
 
export default Post;

