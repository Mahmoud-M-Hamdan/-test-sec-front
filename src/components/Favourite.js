import axios from 'axios'
import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
class Favourite extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: process.env.REACT_APP_BACKEND_SERVER,
            dataaa: [],
            name: '',
            image: '',
            price: '',
            id: '',
            showData: false
        }
    }
    deleteCradFav = async (id) => {
        const removeData = await axios.delete(`${this.state.url}/deleteData/${id}`)
        this.setState({
            dataaa: removeData.data
        })
    }

    updateCradFav = async (image, name, price, id) => {
        this.setState({
            name: name,
            image: image,
            price: price,
            id: id,
            showData: true
        })
    }


    handleName = (e) => { this.setState({ name: e.target.value }) }
    handleimage = (e) => { this.setState({ image: e.target.value }) }
    handleprice = (e) => { this.setState({ price: e.target.value }) }

    handleSubmit = async (e) => {
        e.preventDefault()
        const obj = {
            name: this.state.name,
            image: this.state.image,
            price: this.state.price,
        }
        const newData = await axios.put(`${this.state.url}/updateData/${this.state.id}`, obj)
        this.setState({
            dataaa: newData.data
        })

    }

    componentDidMount = async (req, res) => {
        const getData = await axios.get(`${this.state.url}/getData`)
        this.setState({
            dataaa: getData.data
        })

    }
    render() {
        return (
            <>
                {
                    this.state.showData && <form onSubmit={this.handleSubmit}>

                        <input type="text" value={this.state.name} onChange={this.handleName} />
                        <input type="text" value={this.state.image} onChange={this.handleimage} />
                        <input type="text" value={this.state.price} onChange={this.handleprice} />
                        <input type="submit" value="Update" />



                    </form>

                }
                {this.state.dataaa.map(ele => {
                    return <><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ele.image} />
                        <Card.Body>
                            <Card.Title><h1>{ele.name}</h1></Card.Title>
                            <Card.Text>
                                <h1>{ele.price}</h1>
                            </Card.Text>
                            <Button onClick={e => { this.deleteCradFav(ele._id) }} variant="primary">Delete</Button>
                            <Button onClick={e => { this.updateCradFav(ele.image, ele.name, ele.price, ele._id) }} variant="primary">Update</Button>
                        </Card.Body>
                    </Card></>

                })}

            </>
        )
    }
}

export default Favourite
