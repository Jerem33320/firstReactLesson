import React from 'react';
import shortid from 'shortid';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

const auth = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",

  height: "100vh",
  width: "100vw",

  backgroundColor: 'black',
  color: 'white'
}

const authTitle = {
  marginBottom: "40px",
  fontSize: "3rem"
}

const authInput = {
  border: "none",
  outline: "none",

  height: "40px",
  borderRadius: "10px",
  marginRight: "10px",
  textAlign: "center"
}

const authBtn = {
  border: "none",

  height: "40px",
  borderRadius: "10px",
  marginRight: "10px",
  textAlign: "center",
  backgroundColor: "rgb(237, 90, 119)",
  color: "white"
}

const errorValid = {
  color: 'red',
  marginTop: "10px"
}

export default class Auth extends React.Component{
  constructor(props){
    super(props)
    this.state={
      id: '',
      name: '',
      password: '',
      authIn: false,
      users: [],
      error: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    try{
      const user = {
        [this.state.id]: {
          name: this.state.name,
          password: this.state.password
        }
      }

      const name = this.state.name;
      if (/[^a-zA-Z -]/.test(name)) {
          return this.setState({error: 'Invalide caractère...'});
      }
      
      axios.post('http://localhost:3001/auth', user);
      const users = [...this.state.users, user];
      if(!users.includes(this.state.id)){
        console.log("auth réussie");
        this.setState({
          authIn: true,
          users: users
        })
      } else {
        console.log("Auth failed...");
      }
    }catch(err){
      console.log('Auth Error', err);
    }
  }

  handleNameValue = e => {
    this.setState({
      id: shortid.generate(),
      name: e.target.value
    })
  }

  handlePasswordValue = e => {
    this.setState({
      password: e.target.value
    })
  }

  render(){
    if(this.state.authIn === true){
      console.log("Auth Route ready");
      return(<Redirect to="/login"/>)
    }

    return(
      <section style={auth}>
        <h1 style={authTitle}>S'enregistrer</h1>
        <form onSubmit={this.handleSubmit}>
          <input style={authInput} onChange={this.handleNameValue} placeholder="Entrez votre nom"/>
          <input style={authInput} onChange={this.handlePasswordValue} placeholder="Password"/>
          <button style={authBtn} onSubmit={this.handleSubmit}>S'enregistrer</button>
        </form>
        <div style={errorValid}>{this.state.error}</div>
      </section>
    )
  }
}