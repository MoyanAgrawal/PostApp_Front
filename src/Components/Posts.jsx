import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { baseUrl } from "../services/operations";
import DeleteModal from "./modal/DeleteModal";
import { useNavigate } from "react-router-dom";

function Posts({ imgUrl, title, caption, createdAt, post, getPost }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const navigate=useNavigate();

  function handleDelete(post) {
    setShowDeleteModal(true);
  }

  function handleModalClose(){
    setShowDeleteModal(false);
  }

  function handleEdit(post) {
    navigate(`/newPost/${post}`); 
  }
   return (
     <>
       <div className="d-flex">
         <Card style={{ width: "18rem" }}>
           <Card.Img variant="top" style={{height:"13rem"}} src={imgUrl} />
           <Card.Body>
             <Card.Title>{title}</Card.Title>

             <Card.Text>{caption}</Card.Text>
             <Card.Text>{createdAt}</Card.Text>
             <div className="d-flex gap-3 ">
               <Button variant="danger" onClick={() => handleDelete(post)}>
                 Delete
               </Button>
               <Button variant="primary" onClick={() => handleEdit(post)}>
                 Edit
               </Button>
             </div>
           </Card.Body>
         </Card>
       </div>

       <DeleteModal
         getPost={getPost}
         post={post}
         onHide={handleModalClose}
         show={showDeleteModal}
       />
     </>
   );
}

export default Posts;
