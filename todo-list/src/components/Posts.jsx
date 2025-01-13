import { useEffect, useState } from "react";
import axios from "axios";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        setPosts(response.data);  // 데이터 저장
        setLoading(false);  // 로딩 상태 변경
    })
    .catch(error => {
        console.error("Error fetching posts:", error);
        setLoading(false);  // 에러 발생 시 로딩 중단단
    });
  }, []);

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <>
      <div className="py-1 pb-5 rounded-2xl bg-dark-blue">
        <h1 className="mt-5 mb-3 text-center text-white tracking-widest text-2xl font-black">Posts</h1>
      <ul className="mx-5 text-center">
        {posts.map((post) => (
          <li key={ post.id }>
            <p className="mb-5 text-white font-black">-</p>
            <h2 className="mb-3 font-semibold text-white">{ post.title }</h2>
            <p className="mt-1 mb-5 text-white">"{ post.body }"</p>
          </li>
        ))}
      </ul>
        </div>
    </>
  );
}
  
  export default Posts;