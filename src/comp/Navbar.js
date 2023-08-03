import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='nav'>
      <h className="header" style={{ fontSize: "25px"}}>REACT NEWS
      
      </h>
      <span style={{ display:"inline", align:"inline-block"}}>
      <img  alt='x'  src='https://png.pngtree.com/png-vector/20190927/ourlarge/pngtree-antenna-icon-isolated-on-abstract-background-png-image_1744313.jpg'style={{alignItems:"center",width:"36px",height:"36px"}}></img>
      </span> 
      <nav>
        
        <Link to='/' className='btn' style={{ marginLeft: "15%", fontSize: "20px" }}>HOME</Link>
        <Link to='/latest' className='btn' style={{ marginLeft: "3%", fontSize: "20px" }}>LATEST</Link>
        <Link to='/national' className='btn' style={{ marginLeft: "3%", fontSize: "20px" }}>NATIONAL</Link>
        <Link to='/world' className='btn' style={{ marginLeft: "3%", fontSize: "20px" }}>WORLD</Link>
        <Link to='/sports' className='btn' style={{ marginLeft: "3%", fontSize: "20px" }}>SPORTS</Link>
        <Link to='/entertainment' className='btn' style={{ marginLeft: "3%", fontSize: "20px" }}>ENTERTAINMENT</Link>
        <input style={{marginLeft:"3%"}} type='text' placeholder='enter news to search' ></input>
        <button  style={{padding:"3px",background:"black", color:"pink"}}  type="submit">go</button>
      </nav>
      
    </div>
  );
}

export default Navbar;