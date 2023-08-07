import {React,useState} from 'react';
import './App.css';
import { Link } from "react-router-dom";
import Store from '../App/Store';





const Navbar = () => {

  const [inputValue,setInputValue]=useState('');

  return (
    <div>
    <div className='nav'>
      <h className="header" style={{ fontSize: "25px"}}>REACT NEWS
      
      </h>
      <span style={{ display:"inline", align:"inline-block"}}>
      <img alt='x'  src='https://png.pngtree.com/png-vector/20190927/ourlarge/pngtree-antenna-icon-isolated-on-abstract-background-png-image_1744313.jpg'style={{alignItems:"center",width:"36px",height:"36px"}}></img>
      </span> 
      <nav>
        
        <Link to='/' className='btn' style={{ marginLeft: "50%", fontSize: "20px" }}>HOME</Link>
        <Link to='/Bitcoin' className='btn' style={{ marginLeft: "3%", fontSize: "20px" }}>BITCOIN</Link>
        <div class="dropdown">
  <button class="dropbtn" style={{marginLeft: "3%", fontSize: "20px"}}>CATEGORY</button>
  <div class="dropdown-content">
  <a href="/tech">Technology</a>
  <a href="/sports">Sports</a>
  <a href="/business">Business</a>
  </div>
</div>

       
        <input style={{marginLeft:"3%"}}  value={inputValue} onChange={(event) => setInputValue(event.target.value)} type='text' placeholder='enter news to search' ></input>
        <button  style={{padding:"3px",background:"black", color:"cadetblue"}}  type="submit"  >go</button>
      </nav>
      


    </div>
      
     

    </div>
  );
}

export default Navbar;