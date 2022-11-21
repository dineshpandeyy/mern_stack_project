import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import {useNavigate} from "react-router-dom";



const Register = () => {

  const [fname,setFName] = useState("");
  const [file,setFile] = useState("");

  const [view,setView] = useState("");
  // console.log(view);


  const history = useNavigate(); // to redirect to home page

  const setData = (e) => {
    setFName(e.target.value)
  }

  const setImgFile = (e) => {
    setFile(e.target.files[0])
  }

  const setMatchView = (e) => {
    setView(e.target.value)
  }

  // adduser data

  const addUserData = async (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("photo", file);
    formData.append("fname", fname);
    formData.append("pundit", view);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }

    const res = await axios.post("/register", formData, config);

    if (res.data.status === 401 || !res.data) {
      console.log("errror")
    } else {
      history("/")
    } // to redirect to home page
  }

  return (
    <>
    <div className="containe mt-3">
      <h1>Upload your blog information</h1>
      <Form className="mt-3">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Match Name</Form.Label>
        <Form.Control type="text" placeholder="" name='fname' onChange={setData}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Select the related image</Form.Label>
        <Form.Control type="file" placeholder="" name="photo" onChange={setImgFile}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Match Point of view</Form.Label>
        <Form.Control as="textarea" rows={3} name="pundit" onChange={setMatchView}/>
      </Form.Group>

      <Button variant="primary" type="submit" onClick=
      {addUserData}>
        Submit
      </Button>
    </Form>
    </div>
    </>
  )
}

export default Register
