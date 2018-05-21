import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import '../../assets/css/bootstrap.css';


class EditUser extends Component {

	constructor(props) {

        super(props);

        console.log(this.state)
    }


	fetchData() {

		let param = this.props.match.params.id;

       	return fetch('http://localhost:3004/posts/'+ param, {
            method: 'PUT'
        }).then(function(response){

        	console.log(response);
            
        }).catch(function(err) {
            console.log(err);
        })
        
    }

    componentDidMount() {
        this.fetchData();
    }


	 render() {

        return (
            <div className="container">
                <div className="row">
                    <h3>Create User</h3>
                    <div className="col-md-4">
                        <form onSubmit={this.handleSubmit}>
                            
                            <div className="form-group text-left">
                                <label>Title: </label>
                                <input type="text" className="form-control" name="title" onChange={this.handleChange} />
                            </div>


                            <div className="form-group text-left">
                                <label>Author: </label>
                                <input type="text" className="form-control" name="author" onChange={this.handleChange} />
                            </div>
                            
                            <div className="form-group text-left">
                                <input type="submit" className="btn btn-success" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

}

export default EditUser;