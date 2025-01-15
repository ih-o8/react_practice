import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PostDetail() {
  const { id } = useParams();  // URL에서 id 추출
  const [post, setPost] = useState({})
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    body: ""
  })

  useEffect(() => {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
          setPost(response.data);
          setFormData({
            title: response.data.title,
            body: response.data.body,
          });
        })
        .catch(error => {
          console.log("Error fetching post:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }, [id]);  //id가 변경될 때마다 다시 호출

  // 수정 모드 전환
  function handleEditToggle() {
    setIsEditing(!isEditing);
  }

  // 폼 입력 관리
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,  // 해당 필드의 이름에 따라 값 업데이트
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, formData)
      .then(response => {
        setPost(response.data);
        setIsEditing(false);
      })
      .catch(error => {
        console.log("Error fetching post:", error);
      })

  }

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <>
      <h1>{ post.id }</h1>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} />
          </div>
          <div>
            <label>Body:</label>
            <input type="text" name="body" value={formData.body} onChange={handleChange} />
          </div>
          <button type="submit">save</button>
          <button onClick={handleEditToggle}>cancel</button>
        </form>
      ) : (
        <div>
          <h2>{ post.title }</h2>
          <p>{ post.body }</p>
          <button onClick={handleEditToggle}>edit</button>
        </div>
      )}
    </>
  );
}
  
export default PostDetail;