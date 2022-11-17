import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Home = () => {
  return (
      <>
        <div className="container mt-2">
            <h1 className="text-center mt-2">
                Football blog project
            </h1>
            <div className="text-end">
                <Button variant="success">Add Blog</Button>{' '}
            </div>

            <div className="row d-flex justify-content-between align-items-center mt-5">
                <Card className="mb-3" style={{ width: '22rem',height:"18rem"}}>
                <Card.Img style={{ width: '100px',textAlign:"center",margin:"auto"}} variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Real Madrid vs Man City</Card.Title>
                    <Card.Text>
                        The night of the Real resurrection! The pure white shirts have shimmered 
                        spectacularly once again. And Real Madrid are Paris-bound. Real Madrid will
                         play the big game again. The love affair goes on.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </div>
        </div>
      </>
  )
}

export default Home
