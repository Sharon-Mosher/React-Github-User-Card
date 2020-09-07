import React, {Component} from 'react';
import axios from 'axios';
import Cards from './components/Cards';
import './App.css';

var users=["sharon-mosher"]

class App extends Component {
  constructor(){
    super();
    this.state ={
      people: []
    };
  }

  componentDidMount(){
    axios.get(`https://api.github.com/users/sharon-mosher/followers`)
    .then(res =>{
      res.data.map(u=>{
        users=[...users.u.login]
      })
      console.log(users)
      users.map(p=>{
        axios.get(`https://api.github.com/users/${p}`)
        .then(res => {
          var person = {
            img:res.data.avatar_url,
            name:res.data.name,
            username:res.data.login,
            followers:res.data.followers,
            following:res.data.following,
            id:res.data.id,
            link:res.data.html_url
          }
          this.setState({
            people: [...this.state.people, person]
          })
        })
        .catch(err => {console.log(err)})
      })
    })
  }
  render(){
  return (
    <div className = "App">
      <header></header>
      <body>
        <div class ="header">
          <h1>Github User Cards</h1>
        </div>
        <div className = "Information">
          <h1>Github Followers</h1>
        </div>
        <div class = "cards">
        <Cards people={this.state.people}/>
        </div>
      </body>
    </div>
  );
};
};
export default App;
