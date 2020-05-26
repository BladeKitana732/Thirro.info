import React from 'react';
import webLogo from './image/Logo.png';

export default function Logo() {
    return (
        <div>
           <h1 style={{fontFamily: "monospace"}}>Welcome to
            <img src= {webLogo} alt= "thirroLogo"></img>
            </h1>
        </div>
    )
}
