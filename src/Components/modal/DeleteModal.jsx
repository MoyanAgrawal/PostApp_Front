import axios from 'axios';
import React from 'react'
import { Button, Modal } from "react-bootstrap";
import { baseUrl } from '../../services/operations';


function DeleteModal({getPost,post,onHide,show}) {

 function handleDelete() {
  console.log('____deleteopst',post);
   axios
     .delete(`${baseUrl}/post/delete/${post}`, {})
     .then((res) => {
      console.log('____deleteopst',res.data);

       console.log(res.data);
       onHide();
       getPost();

     })
     .catch((err) => {
       console.log(err);
     });
 }

  return (
    <div>
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Delete post
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#b985b9" }}>
          <h4>Are you sure you want to delete this post</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleDelete}>Delete</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DeleteModal