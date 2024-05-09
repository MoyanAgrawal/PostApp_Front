import axios from "axios";
import React, { useEffect, useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../services/operations";
import { useParams } from "react-router-dom";
function PostForm({post}) {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    imageFile: "",
    caption: "",
  
  });
  const navigate=useNavigate();
  const[comeFromEdit,setComeFromEdit]=useState(false);
useEffect(()=>{
//if id is not null then user comming from edit
    if(id){
    setComeFromEdit(true);
    getSinglePost();
  }
  

},[id]);
function getSinglePost(){
  axios.get(`${baseUrl}/post/${id}`,{})
  .then((res)=>{
    console.log('____data',res.data);
    setFormData(res.data)
  })
  .catch((err)=>{
    console.log(err)
  })
}
  

  function handleInputChange(e) {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }


  function handleSubmit(e){
    e.preventDefault()
    if(id){
      axios.put(`${baseUrl}/post/edit/${id}`,formData,{
        headers:{"Content-Type":"application/json"}
      })
      .then((res)=>{
        console.log(res);
        setFormData({});
        navigate("/home");
      })
      .catch((err)=>{
        console.log("errrr11111____",err)
      })
      return ;
    }
    else{
      axios.post(`${baseUrl}/post/new`,formData,{
      headers:{"Content-Type":"application/json"}
    })
    .then((res)=>{
      console.log(res);
      setFormData({});
      navigate("/home");
    })
    .catch((err)=>{
      console.log("errrr11111____",err)
    })
    }
    
  }

  return (
    <div className="container mt-3">
      {comeFromEdit ? <h1>Edit a Post</h1> : <h1>Create a Post</h1>}
      <form onSubmit={handleSubmit}>
        <FloatingLabel controlId="floatingInput" label="Title" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Title"
            name="title"
            value={formData?.title}
            onChange={handleInputChange}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="ImageUrl"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="ImageUrl"
            name="imageFile"
            value={formData?.imageFile}
            onChange={handleInputChange}
          />
        </FloatingLabel>
        <FloatingLabel
          className="mb-3"
          controlId="floatingCaption"
          label="Caption"
        >
          <Form.Control
            type="text"
            placeholder="Caption"
            name="caption"
            value={formData?.caption}
            onChange={handleInputChange}
          />
        </FloatingLabel>

        <button type="submit" className="btn btn-primary">
          {comeFromEdit ? "Edit Post" : "Create post"}
        </button>
      </form>
    </div>
  );
}

export default PostForm;
