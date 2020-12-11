import React from 'react';
import axios from 'axios'
import Card from './components/Card'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: {},
      followers: []
    };
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/sharon-mosher")
      .then(response => {
        this.setState({ userData: response.data });
        console.log(this.state.userData);
      })
      .catch(error => {
        console.log('error', error)

      })

    axios
      .get("https://api.github.com/users/sharon-mosher/followers")
      .then(response => {
        console.log('followers', response);
        this.setState({ followers: response.data })
      })
      .catch(error => {
        console.log('error', error)

      })
  }

  render() {

    return (
      <div>
        <Card data={this.state.userData} followers={this.state.followers} />
      </div>
    )
  }
}

export default App;
