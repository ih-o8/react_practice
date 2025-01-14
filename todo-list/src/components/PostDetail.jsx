import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PostDetail() {
  const { id } = useParams();  // URL에서 id 추출
  const [post, setPost] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
          setPost(response.data);
        })
        .catch(error => {
          console.log("Error fetching posts:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }, [id]);  //id가 변경될 때마다 다시 호출

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <>
      <h1>{ post.id }</h1>
      <hr />
      <p>{ post.title }</p>
      <p>{ post.body }</p>
    </>
  );
}
  
export default PostDetail;