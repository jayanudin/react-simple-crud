import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import '../../assets/css/bootstrap.css';


class CreateUser extends Component {
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
    }

    handleSubmit(event) {
        event.preventDefault();

        var validate = {
            title: this.state.title,
            author: this.state.author
        }

        var data = {
            title: this.state.title,
            author: this.state.author
        }

        if (validate.title == '') {
            console.log('title null');
        }else if(validate.author == '') {
            console.log('author null');
        }else {
            return fetch('http://localhost:3004/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }, 
                body: JSON.stringify(data)
            }).then(response => {
                if (response.status == 201) {
                    console.log('succes input data');
                    this.props.history.push('/listUser');
                      
                }
            }).catch(function(err) {
                console.log(err);
            })
        } 
        
    }

    handleChange({ target: { value, name } }) {
        this.setState({
            [name]: value
        })
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

export default CreateUser;