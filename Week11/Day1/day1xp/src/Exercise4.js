import React from 'react';
import logo from './logo.svg'
import './Exercise4.css'

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

const Exercise4 = () => {
    return (
        <div style={{textAlign:'center'}}>
            {/* <h1 style={{color:'red', backgroundColor:'lightblue'}}>
             */}
             <h1 style={style_header}>
                This is Header
            </h1>
            <p className="para">
                This is a paragraph
            </p>
            <a href="" > This is a link </a>
            <form>
            <input type="text" />
            <button type="submit">Submit</button>
            </form>
            <img
            src={logo}
            alt="Example"
            style={{ width: '200px' }}
            />
            <ul>This is a list
            <li>Coffe</li>
            <li>Tea</li>
            <li>Milk</li>
      </ul>
        </div>
    )
}

export default Exercise4;