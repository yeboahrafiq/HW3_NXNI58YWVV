import React, { Component } from 'react'
import '../css/global.css'
import '../css/layout.css'
import '../css/components.css'





class Navbar extends Component{
 render(){
     return(
         <div>
              <header className="header">
              <nav className="navbar">
      <div className="container">
        <a href="#">Hulk</a>
        <a href="#" className="logo is-active">Mavel</a>
        <a href="#">Venom</a>
      </div>
    </nav>
                   </header> 
       
         </div>
     )
 }
} 
export default Navbar