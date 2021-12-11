import React, { Component } from 'react';
import AuthService from '../../services/auth.service';

const EMAIL_PATTERN = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const validators = {
    username: (value) => {
        let message;
        if (!value) {
        message = "Username name is required";
        } else if (value.length < 3) {
        message = "Invalid username";
        }
        return message;
    },

    password: (value) => {
        let message;
        if (!value) {
        message = "Password is required";
        } else if (value.length < 3) {
        message = "Invalid password";
        }
        return message;
    },

    email: (value) => {
        let message;
        if (!value) {
        message = "email is required";
        } else if(!EMAIL_PATTERN.test(value)){
        message = 'Invalid email';
        }
    return message;
},
}

export default class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        fields: {
            username: "",
            password: "",
            email: "",
        },
        errors: {
            username: null,
            password: null,
            email: null,
            }
        }
        this.authService = new AuthService()
    }

handleSubmit(event) {
    event.preventDefault();
    if(this.isValid()){
        this.authService.signup(this.state.fields)
        .then(() => {
        this.setState({
            fields: {
                username: "",
                password: "",
                email: "",
                },
            errors: {
                username: null,
                password: null,
                email: null,
                }
            });
        })
        .catch(err => console.error(err))
    }
}

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
        fields: {
            ...this.state.fields,
            [name]: value
        },
        errors: {
            ...this.state.errors,
            [name]: validators[name](value)
        }
        });
    }

    isValid() {
        const { errors } = this.state;
        return !Object.keys(errors).some(key => errors[key]);
    }

    render() {
        const { fields, errors } = this.state;
        return (
            <div className="field-box">
                <form onSubmit={(event) => this.handleSubmit(event)} >
                    <div className="form-item">
                        <label htmlFor="username">Username: </label>
                        <input className={`${errors.username ? "error-input" : ""}`} type="text" name="username" value={fields.username} onChange={(event) => this.handleChange(event)} />
                        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
                    </div>
                    <div className="form-item">
                        <label htmlFor="email">Email: </label>
                        <input className={`${errors.email ? "error-input" : ""}`} type="text" name="email" value={fields.email} onChange={(event) => this.handleChange(event)} />
                        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                    </div>
                    <div className="form-item">
                        <label htmlFor="password">Password: </label>
                        <input className={`${errors.password ? "error-input" : ""}`} type="text" name="password" value={fields.password} onChange={(event) => this.handleChange(event)} />
                        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                    </div>
                    <button className="update-bt" disabled={!this.isValid()} type="submit">Create Chef</button>
                </form>
            </div>
        )
    }
}