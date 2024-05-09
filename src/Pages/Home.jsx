import { Link } from "react-router-dom";
import Navbare from "../Components/Navbare";
import { useEffect, useState } from "react";
import Posts from "../Components/Posts";
import axios from "axios";
import { baseUrl } from "../services/operations";

function Home() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    getPost();
  }, []);

  function getPost() {
    axios
      .get(`${baseUrl}/posts`, {})
      .then((res) => {
        if (res.status === 200) {
          const postData = res.data;
          setPost(postData);
          // console.log(postData)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <Navbare />
      <div className="d-flex container gap-4 flex-wrap mt-4 ">
        {post.map((card, idx) => (
          <div key={idx} className="">
            {/* <h1>{card.title}</h1> */}
            <Posts
              imgUrl={card.imageFile}
              title={card.title}
              caption={card.caption}
              createdAt={card.createdAt}
              post={card._id}
              getPost={getPost}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
