import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter,
  Link 
} from "react-router-dom";
import '../../assets/css/bootstrap.css';


class ListUser extends Component {

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
        return fetch('http://localhost:3004/posts/'+ id, {
            method: 'GET'
        }).then(function(response) {
            console.log(response);
        })
    }

    componentDidMount() {
        this.fetchData('http://localhost:3004/posts');
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    	<NavLink to="/createUser" className="btn btn-info">Create User</NavLink>
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
                                            <Link to={"/edituser/" + item.id} className="btn btn-warning">Edit</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

}

export default ListUser;