import React from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

const login = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",

  height: "100vh",
  width: "100vw",

  backgroundColor: 'rgb(237, 90, 119)',
  color: 'white'
}

const loginTitle = {
  marginBottom: "40px",
  fontSize: "3rem"
}

const loginInput = {
  border: "none",
  outline: "none",

  height: "40px",
  borderRadius: "10px",
  marginRight: "10px",
  textAlign: "center"
}

const loginBtn = {
  border: "none",

  height: "40px",
  borderRadius: "10px",
  marginRight: "10px",
  textAlign: "center",
  backgroundColor: "black",
  color: "white"
}

const errorValid = {
  color: 'black',
  marginTop: "10px"
}

export default class Login extends React.Component{
  constructor(props){
    super(props)
    this.state={
      id: '',
      name: '',
      password: '',
      logIn: false,
      users: []
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try{
      console.log(this.state.name);
      const user = await axios.get('http://localhost:3001/login');
      console.log(user.data.name);
      if(user.data.name === this.state.name && user.data.password === this.state.password){
        this.setState({
          logIn: true
        })
      } else {
        console.log("login failed...");
        this.setState({error: 'Invalides caractères...'});
      }
    }catch(err){
      console.log('login Error', err);
    }
  }

  handlePasswordValue = e => {
    this.setState({
      password: e.target.value
    })
  }

  handleNameValue = e => {
    this.setState({
      name: e.target.value
    })
  }

  render(){
    if(this.state.logIn === true){
      return(<Redirect to="/homepage"/>)
    }

    return(
      <section style={login}>
        <h1 style={loginTitle}>Se Connecter</h1>
        <form onSubmit={this.handleSubmit}>
          <input style={loginInput} onChange={this.handleNameValue} placeholder="Name"/>
          <input style={loginInput} onChange={this.handlePasswordValue} placeholder="Password"/>
          <button style={loginBtn} onSubmit={this.handleSubmit}>Se Connecter</button>
        </form>
        <div style={errorValid}>{this.state.error}</div>
      </section>
    )
  }
}