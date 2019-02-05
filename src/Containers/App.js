import React, { Component } from 'react';
import PictureContainer from './PictureContainer';
import Nav from './Nav';

class App extends Component {
  render() {
    return (
      <div className="App"> 
      	<Nav />     	
      	<h1>home</h1>
      	<PictureContainer />
      </div>
    );
  }
}

export default App;
