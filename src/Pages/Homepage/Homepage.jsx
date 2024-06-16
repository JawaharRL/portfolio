import React from 'react'
import './Homepage.css'

function Homepage() {
  return (
    <div className="body">
      <div className="nav_container">
        <div>
          <p id="logo">GD</p>
        </div>
        <div>
          <ul className="nav_links">
            <li>Home</li>
            <li>About me</li>
            <li>Works</li>
            <li>Contacts</li>
          </ul>
        </div>
      </div>

      <div className="home_container">
        <div className="name_greetings">
            <h3 id="greeting">Hey there!</h3>
            <h1 id="name">I'm Jawahar</h1>
            <h4 id="role">Im a UX Designer & Frontend Developer</h4>
            <button id="download_but">Download Resume</button>
            <button id="work_but">See my works</button>
        </div>
        <div className="photo">

        </div>
      </div>

    </div>
  )
}

export default Homepage