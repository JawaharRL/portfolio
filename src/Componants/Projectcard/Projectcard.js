import React from 'react'
import './Projectcard.css'


const Projectcard=({title,button_name,workimg}) =>{
  return (
    <div className="project_card_container">
       <h3 id="work_title">{title}</h3>
        <div>
            <img id="work_img" src={workimg} alt="" />
        </div>
       
        <button className="work_card_button">
          {button_name}
        </button>

    </div>
  )
}

export default Projectcard