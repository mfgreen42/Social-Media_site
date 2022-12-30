
const Post = (props) => {
    return (
        <table>
        <thead>
            <tr>
            <th>Name</th>
            <th>Message</th>
            </tr>
        </thead>
        <tbody>
            {props.postEntries.map((post) => {
                return (
                    <tr>
                <td>{post.name}</td>
                <td>{post.message}</td>
                </tr>
            );
        })}
        </tbody>
        </table>

     );
}
 
export default Post;