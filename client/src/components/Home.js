import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {NavLink} from "react-router-dom";


const Home = () => {

  return (
      <>
        <div className="container mt-2">
            <h1 className="text-center mt-2">
                Football blog project
            </h1>
            <div className="text-end">
                <Button variant="success"><NavLink to="/register" className="text-decoration-none text-black">Add Blog</NavLink></Button>{' '}
            </div>

            <div className="row d-flex justify-content-between align-items-center mt-5">
                <Card className="mb-3" style={{ width: '22rem',height:"30rem"}}>
                <Card.Img style={{ width: '300px',textAlign:"center",margin:"auto"}} variant="top" src="https://cdn.vox-cdn.com/thumbor/Tt0f2HXoG2uE13gdlCc7_oUj8rw=/0x0:3893x2950/1200x800/filters:focal(1507x247:2129x869)/cdn.vox-cdn.com/uploads/chorus_image/image/70812194/1394004337.0.jpg" />
                <Card.Body className="text-center">
                    <Card.Title>Real Madrid vs Man City</Card.Title>
                    <Card.Text>
                        The night of the Real resurrection! The pure white shirts have shimmered 
                        spectacularly once again. And Real Madrid are Paris-bound. Real Madrid will
                         play the big game again. The love affair goes on.
                    </Card.Text>
                    <Button variant="danger" className="col-lg-6 text-center">Delete</Button>
                </Card.Body>
                </Card>

                <Card className="mb-3" style={{ width: '22rem',height:"30rem"}}>
                <Card.Img style={{ width: '300px',textAlign:"center",margin:"auto"}} variant="top" src="https://cdn.vox-cdn.com/thumbor/Tt0f2HXoG2uE13gdlCc7_oUj8rw=/0x0:3893x2950/1200x800/filters:focal(1507x247:2129x869)/cdn.vox-cdn.com/uploads/chorus_image/image/70812194/1394004337.0.jpg" />
                <Card.Body className="text-center">
                    <Card.Title>Real Madrid vs Man City</Card.Title>
                    <Card.Text>
                        The night of the Real resurrection! The pure white shirts have shimmered 
                        spectacularly once again. And Real Madrid are Paris-bound. Real Madrid will
                         play the big game again. The love affair goes on.
                    </Card.Text>
                    <Button variant="danger" className="col-lg-6 text-center">Delete</Button>
                </Card.Body>
                </Card>

                <Card className="mb-3" style={{ width: '22rem',height:"30rem"}}>
                <Card.Img style={{ width: '300px',textAlign:"center",margin:"auto"}} variant="top" src="https://cdn.vox-cdn.com/thumbor/Tt0f2HXoG2uE13gdlCc7_oUj8rw=/0x0:3893x2950/1200x800/filters:focal(1507x247:2129x869)/cdn.vox-cdn.com/uploads/chorus_image/image/70812194/1394004337.0.jpg" />
                <Card.Body className="text-center">
                    <Card.Title>Real Madrid vs Man City</Card.Title>
                    <Card.Text>
                        The night of the Real resurrection! The pure white shirts have shimmered 
                        spectacularly once again. And Real Madrid are Paris-bound. Real Madrid will
                         play the big game again. The love affair goes on.
                    </Card.Text>
                    <Button variant="danger" className="col-lg-6 text-center">Delete</Button>
                </Card.Body>
                </Card>
            </div>
        </div>
      </>
  )
}

export default Home
