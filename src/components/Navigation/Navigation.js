import React,{useState,useEffect,Fragment} from 'react';
import {Link} from "react-router-dom";
import {AiFillHome} from 'react-icons/ai';
import '../css/Navigation.css';
const Navigation = () =>{
  return(
    <Fragment>
      <div className = 'home'>
        <Link to = '/'><AiFillHome style = {{color:"#fff"}}/></Link>
      </div>
    </Fragment>

  )
}
export default Navigation;
