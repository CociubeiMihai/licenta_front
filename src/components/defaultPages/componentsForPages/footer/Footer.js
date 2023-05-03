import './FooterStyles.css'
import React from 'react'

function Footer() {
  return (
    <div className='footer'>
        <div className='top'>
            <div>
                <h1>Hospital</h1>
                <p>Choose what suits you the most </p>
            </div>
            <div>
                <a href='/'>
                    <i className='fa-brands fa-facebook-square'></i>
                </a>
                <a href='/'>
                    <i className='fa-brands fa-instagram-square'></i>
                </a>
                <a href='/'>
                    <i className='fa-brands fa-behance-square'></i>
                </a>
                <a href='/'>
                    <i className='fa-brands fa-twitter-square'></i>
                </a>
            </div>
        </div>
        <div className='bottom'>
            <div>
                <h4>Project</h4>
                <a href='/'>Something</a>
                <a href='/'>Something</a>
                <a href='/'>Something</a>
                <a href='/'>Something</a>
            </div>
            <div>
                <h4>Research</h4>
                <a href='/'>Something</a>
                <a href='/'>Something</a>
                <a href='/'>Something</a>
                <a href='/'>Something</a>
            </div>
            <div>
                <h4>Comunity</h4>
                <a href='/'>Something</a>
                <a href='/'>Something</a>
                <a href='/'>Something</a>
                <a href='/'>Something</a>
            </div>
            <div>
                <h4>Help</h4>
                <a href='/'>Something</a>
                <a href='/'>Something</a>
                <a href='/'>Something</a>
                <a href='/'>Something</a>
            </div>
        </div>
    </div>
  )
}

export default Footer