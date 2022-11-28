import React, {useState, useEffect, useMemo} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {NavLink} from "react-router-dom";
import axios from "axios";
import moment from "moment";
import Alert from 'react-bootstrap/Alert';
import Vote from './Vote';



const Home = () => {

    const [data, setData] = useState([])
    const [query, setQuery] = useState("")
    const [show, setShow] = useState(false);

    const filteredItem = useMemo(()=> {
        return data.filter(item => {
            return item.fname.toLowerCase().includes(query.toLowerCase())
        })
    }, [data, query])
   

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
        <div className="box">
            <input
            className="search"
            placeholder="Search..."
            value={query}
            onChange = {e => setQuery(e.target.value)}
            />
        </div>
       

        <div className="container mt-2">
            <h1 className="text-center mt-2">
                Let's Talk Football
            </h1>
            <div className="text-end">
                <Button variant="warning"><NavLink to="/register" className="text-decoration-none text-black">Post Blog</NavLink></Button>{' '}
            </div>

            <div className="row d-flex justify-content-between align-items-center mt-5 main-div">

                    {
                        filteredItem.length > 0 ? filteredItem.map((element, i) => {
                            return (
                                <>
                                    <Card className="mb-3" style={{ width: '22rem',height:"35rem"}}>
                                    <Card.Img style={{ width: '300px',textAlign:"center",margin:"auto"}} variant="top" src= {`/uploads/${element.imgpath}`}/>
                                    <Card.Body className="text-center">
                                    <Card.Title>Match: {element.fname}</Card.Title>
                                    <Card.Text>
                                        Analysis: {element.view}
                                    </Card.Text>

                                    <Card.Text>
                                        Date Added: {moment(element.date).format("L")} <Vote></Vote>
                                        
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
