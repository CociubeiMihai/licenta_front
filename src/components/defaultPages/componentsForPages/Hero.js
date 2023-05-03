import React from 'react'
import "./HeroStyles.css"

function Hero(props) {
  return (
    <div>
        <div className= {props.cName}>
            <img alt='sth' src={props.imagHero}/>
            <div className='hero-text'>
                <h1>{props.title}
                </h1>
                <p>{props.text}</p>
                <a href= {props.url} 
                    className = {props.btnClass}>
                    {props.buttonText}
                </a>
            </div>
        </div>
    </div>
  )
}

export default Hero