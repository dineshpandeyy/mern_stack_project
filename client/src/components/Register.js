import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const Register = () => {

  const [fname,setFName] = useState("");
  const [file,setFile] = useState("");

  const setData = (e) => {
    setFName(e.target.value)
  }

  const setImgFile = (e) => {
    setFile(e.target.files[0])
  }

  return (
    <>
    <div className="containe mt-3">
      <h1>Upload your img here</h1>
      <Form className="mt-3">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="" name='fname' onChange={setData}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Select your image</Form.Label>
        <Form.Control type="file" placeholder="" name="photo" onChange={setImgFile}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </>
  )
}

export default Register
