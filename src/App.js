import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import Wallerpaper from './Components/Wallpaper'
import Introduction from './Components/Introduction'




class App extends Component{
  render(){
    return (

    <div>
       <Navbar/>
       <Introduction/>
      <Wallerpaper/>
      <div className="spacer"></div>
          </div>
  );
}
  
}

export default App;
