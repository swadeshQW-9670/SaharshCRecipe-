import React from 'react'
import {ImSpoonKnife} from 'react-icons/im'

function Header() {
  return (
    <header className='header' style={{ backgroundImage: `url(https://images.unsplash.com/photo-1516001784377-938d72d1e4ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQwfHxyZWNpcGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60)` }}>
        <div className='layer'>
        <div className="container">
          <nav className='logo-wrapper'>
            <div className='logo'>
              <ImSpoonKnife className='brand' />
            </div>
          </nav>
          <div className='header-text' >
            <h1>Recipe App</h1>
            <p>Let's have fun building this app together...</p>
          </div>

        </div>
        </div>
      </header>
  )
}

export default Header
