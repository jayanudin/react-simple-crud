import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../assets/css/bootstrap.css';


class User extends Component {
	 constructor(props) {
        super(props);

        this.state = {value: ''};

        this.state = {
            newItems: '',
            items: [],
            id: '',
            title: '',
            author: ''
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        var data = {
            title: this.state.title,
            author: this.state.author
        }

        return fetch('http://localhost:3004/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify(data)
        }).then(response => {
            if (response.status == 201) {
                console.log('succes input data');
                  
            }
        }).catch(function(err) {
            console.log(err);
        })
        
    }

    handleChange({ target: { value, name } }) {
        this.setState({
            [name]: value
        })
    }

    deleteData(id) {

        if (window.confirm('Are you sure you wish to delete this item?')) {
             return fetch('http://localhost:3004/posts/'+ id, {
                method: 'DELETE'
            }).then(function(response){
                if (response.status == 200) {
                    console.log('succes remove data');
                    window.location.reload();
                }
            }).catch(function(err) {
                console.log(err);
            })
        }
        
    }

    fetchData(url) {
        fetch(url)
            .then((response) => response.json())
            .then((items) => this.setState({ items }))
    }


    handleEdit(id) {

        return fetch('http://localhost:3004/posts/'+id, {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((newItems) => this.setState({ newItems }))

    }

    handleUpdate(id) {
        var data = {
            title: this.state.title,
            author: this.state.author
        }

        return fetch('http://localhost:3004/posts/'+id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify(data)
        }).then(response => {
            if (response.status == 201) {
                console.log('succes update data');
                  
            }
        }).catch(function(err) {
            console.log(err);
        })
    }

    componentDidMount() {
        this.fetchData('http://localhost:3004/posts');
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <div className="row">

                        <div className="col-md-4">
                            <form onSubmit={this.handleUpdate} method="POST">
                                
                                <div className="form-group text-left">
                                    <label>Title: </label>
                                    <input type="text" className="form-control" name="title" value={this.state.newItems.title} onChange={this.handleChange} />
                                </div>


                                <div className="form-group text-left">
                                    <label>Author: </label>
                                    <input type="text" className="form-control" name="author" value={this.state.newItems.author} onChange={this.handleChange} />
                                </div>
                                
                                <div className="form-group text-left">
                                    <input type="submit" className="btn btn-success" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Author</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   {this.state.items.map((item) => (

                                        <tr>
                                            <td>{item.title}</td>
                                            <td>{item.author}</td>
                                            <td>
                                                <a className="btn btn-danger" onClick={() => this.deleteData(item.id)}>Delete</a> &nbsp;
                                                <a className="btn btn-warning" onClick={() => this.handleEdit(item.id)}>Edit</a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default User;