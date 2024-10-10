"use client"
import React, { useState } from "react";
import { IoIosColorPalette } from "react-icons/io";
import style from "./ColorList.module.scss"

const ColorList = ({colors}) => {

  const [copied, setCopied] = useState(false); // State to show/hide copied message
  const [copiedColor, setCopiedColor] = useState(''); // State to store the copied color

  const handleCopy = (color:string) => {
    navigator.clipboard.writeText(color); // Copy color to clipboard
    setCopied(true); // Show copied message
    setCopiedColor(color); // Set the copied color code

    // Hide copied message after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <>
    <div>
      <label className="flex items-center gap-2 ">
        <IoIosColorPalette />
        Colors
      </label>
      <ul>
        {
          colors?.map( color  => (
          <li onClick={() => handleCopy(color)}>
            <div style={{ background: color }}> </div>{color}
          </li>
        ))} 
      </ul>
    </div>
    <div style={{height:'40px',margin:'10px 20px',color:'rgb(141, 247, 141)'}}>{copied && <p className="copied-message">Copied !</p>}</div>
    </>
  );
};

export default ColorList;
