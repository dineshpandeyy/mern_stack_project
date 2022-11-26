import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {NavLink} from "react-router-dom";
import axios from "axios";
import moment from "moment";
import Alert from 'react-bootstrap/Alert';


const Home = () => {

    const [data, setData] = useState([])
    const [query, setQuery] = useState("")
    const [show, setShow] = useState(false);

    const filteredItem = data.filter(item => {
        console.log(item.fname)
        return item.fname.toLowerCase().includes(query.toLowerCase())

    })

    const getUserData = async () => {
        const res = await axios.get("/getdata", {
            headers: {
                "Content-Type": "application/json"
            }
        });
        
        if (res.data.status === 401 || !res.data) {
            console.log("errror")
        } else {
            setData(res.data.getUser)
        }
    }

    const dltUser = async (id) => {
        const res = await axios.delete(`/${id}`, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (res.data.status === 401 || !res.data) {
            console.log("errror")
        } else {
            console.log("user delete");
            setShow(true)
        }
    }

    useEffect(() => {
        getUserData()
    },[dltUser])

  return (
      <>

        {
            show ?  <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>User Delete</Alert.Heading>
            </Alert> : ""
        }

        <input
          className="search"
          placeholder="Search..."
          value={query}
          onChange = {e => setQuery(e.target.value)}
        />

        <div className="container mt-2">
            <h1 className="text-center mt-2">
                Let's Talk Football
            </h1>
            <div className="text-end">
                <Button variant="warning"><NavLink to="/register" className="text-decoration-none text-black">Post Blog</NavLink></Button>{' '}
            </div>

            <div className="row d-flex justify-content-between align-items-center mt-5">

                    {
                        filteredItem.length > 0 ? filteredItem.map((element, i) => {
                            return (
                                <>
                                    <Card className="mb-3" style={{ width: '22rem',height:"30rem"}}>
                                    <Card.Img style={{ width: '300px',textAlign:"center",margin:"auto"}} variant="top" src= {`/uploads/${element.imgpath}`}/>
                                    <Card.Body className="text-center">
                                    <Card.Title>Match: {element.fname}</Card.Title>
                                    {/* <Card.Text>
                                        The night of the Real resurrection! The pure white shirts have shimmered 
                                        spectacularly once again. And Real Madrid are Paris-bound. Real Madrid will
                                        play the big game again. The love affair goes on.
                                    </Card.Text> */}
                                    <Card.Text>
                                        Analysis: {element.view}
                                    </Card.Text>

                                    <Card.Text>
                                        Date Added: {moment(element.date).format("L")}
                                    </Card.Text>
                                    <Button variant="danger" className="col-lg-6 text-center" onClick={()=>dltUser(element._id)}>Delete</Button>
                                    </Card.Body>
                                    </Card>
                                </>
                            )
                        }) : ""
                    }
            </div>
        </div>
      </>
  )
}

export default Home
