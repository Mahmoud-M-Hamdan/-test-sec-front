import React, { Component } from 'react'
import axios from 'axios'
import { Card, Button } from 'react-bootstrap'
class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: process.env.REACT_APP_BACKEND_SERVER,
            dataa: []

        }



    }

    crateCradFav=async(data)=>{
await axios.post(`${this.state.url}/createData`,data)

    }

    componentDidMount = async (req, res) => {
        const responseData = await axios.get(`${this.state.url}/getApiData`)
        console.log(responseData)
        this.setState({
            dataa: responseData.data
        })
        
    }
    render() {
        return (
            <>
                {this.state.dataa.map(ele => {
                    return <><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ele.image} />
                        <Card.Body>
                            <Card.Title><h1>{ele.name}</h1></Card.Title>
                            <Card.Text>
                                <h1>{ele.price}</h1>
                            </Card.Text>
                            <Button onClick={e => { this.crateCradFav(ele) }} variant="primary">Add to Fav</Button>
                        </Card.Body>
                    </Card></>

                })}

            </>
        )
    }
}

export default Main
