import React, { Component } from 'react'
import '../css/global.css'
import '../css/layout.css'
import '../css/components.css'
class Introduction extends Component{
 render(){
     return(
         <div>
                   <div className="container">
                 <h1 className="title">Mavel's Fearless</h1>
                 <p className="subtitle">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
                   molestias earum eveniet.
                 </p>
                 <div className="search-bar">
                   <input type="search" placeholder="Search" />
                 </div>
                   </div>
            
      
                     

         </div>
          
     )
 }
} 
export default Introduction